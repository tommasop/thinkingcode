---
title: Migrate Joomla from Windows 2003 to Docker
author: mithrandir
date: 2014-01-04 02:33:24+00:00
slug: migrate-joomla-windows-2003-docker
permalink: /2014/migrate-joomla-windows-2003-docker
---
**Migrate Apache2/PHP website to docker**

Before continuing my series on rails deployment with docker in a PAASY environment I needed to migrate and existing Joomla 1.5 from a Windows 2003 machine to an Azure Ubuntu Linux 12.04.

Nothing fancy but there is also a Rails application pointing to the same MySql db which also needs to run on the same Linux VM.

**As the Joomla app is the main company website I don’t want any problem in the Rails app to affect the main website.**

With one machine available I decided to follow the **docker** path.

Envisioned system is as follows:

  * Data only container
  * MySql container
  * Apache2 &#8211; php container
  * Rails container

**Data only container**

I started with a base data-only container following the so called **container as volume pattern**. It is a bare container not even running but existing only to expose common directories to all the other containers. Its data structure is:

  * data 
      * mysql
      * www
      * rails

Here is its Dockerfile:

<pre class="brush: bash; title: ; notranslate" title="">FROM ubuntu:precise
MAINTAINER Thinking Code &lt;a href="mailto:tommaso@thinkingco.de"&gt;tommaso@thinkingco.de&lt;/a&gt;

# Create data directories

RUN mkdir -p /data/mysql /data/www /data/rails

# Create /data volume

VOLUME [“/data”]

CMD /bin/sh </pre>

The container can be built and started with the following commands:

<pre class="brush: bash; title: ; notranslate" title="">docker build -t data-store .
docker run -name my-data-store data-store true </pre>

If you check the container status you will find it’s exited with code 0 still it can be happily used for data storage. This strange container is the holy grail of data persistence and data migration through containers.

**MySql (MariaDB) container**

As MariaDB is an easy drop in replacement for MySql and is completely open source and i tested with Joomla I opted for this solution. The container will have a single service running exposed on port 3306. Here is the Dockerfile:

<pre class="brush: bash; title: ; notranslate" title=""># MariaDB (https://mariadb.org/)

FROM ubuntu:precise MAINTAINER Thinking Code &lt;a href="http://thinkingco.de/"&gt;&lt;&lt;/a&gt;tommaso@thinkingco.de&gt;

# Hack for initctl not being available in Ubuntu

RUN dpkg-divert –local –rename –add /sbin/initctl RUN ln -s /bin/true /sbin/initctl

RUN echo “deb http://archive.ubuntu.com/ubuntu precise main universe” &gt; /etc/apt/sources.list && \
          apt-get update && \
          apt-get upgrade -y && \
          apt-get -y -q install wget logrotate

# Ensure UTF–8

RUN apt-get update
RUN locale-gen en_US.UTF–8
ENV LANG en_US.UTF–8 ENV LC_ALL en_US.UTF–8

# Set noninteractive mode for apt-get

ENV DEBIAN_FRONTEND noninteractive

# Install MariaDB from repository.

RUN apt-get -y install python-software-properties && \
    apt-key adv –recv-keys –keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
    add-apt-repository 'deb http://mirror.jmu.edu/pub/mariadb/repo/5.5/ubuntu precise main' && \
    apt-get update && \
    apt-get install -y mariadb-server

# Decouple our data from our container.

VOLUME [“/data”]

# Configure the database to use our data dir.

RUN sed -i -e 's/^datadir\s&lt;i&gt;=.&lt;/i&gt;/datadir = \/data\/mysql/' /etc/mysql/my.cnf

# Configure MariaDB to listen on any address.

RUN sed -i -e 's/^bind-address/#bind-address/' /etc/mysql/my.cnf

EXPOSE 3306

ADD start.sh /start.sh
RUN chmod +x /start.sh
ENTRYPOINT [“/start.sh”]</pre>

The **start.sh** script is the ENTRYPOINT for each container run from the previous Dockerfile image and is responsible for actually starting MariaDB after a setup which includes the setting of a custom datadir, the migration of the existing data in the new directory and the setup of some users and passwords.

<pre class="brush: bash; title: ; notranslate" title="">&lt;b&gt;!/bin/bash&lt;/b&gt;

# Starts up MariaDB within the container.

# Stop on error

set -e

DATADIR=“/data/mysql”

/etc/init.d/mysql stop

# test if DATADIR has content

if [ ! “$(ls -A $DATADIR)” ]; then
  echo “Initializing MariaDB at $DATADIR” # Copy the data that we generated within the container to the empty DATADIR.
  cp -R /var/lib/mysql/* $DATADIR
fi

# Ensure mysql owns the DATADIR
chown -R mysql $DATADIR chown root $DATADIR/debian*.flag

# The password for ‘debian-sys-maint’@’localhost’ is auto generated.
# The database inside of DATADIR may not have been generated with this password.
# So, we need to set this for our database to be portable.

echo "Setting password for the 'debian-sys-maint'@'localhost' user" /etc/init.d/mysql start sleep 1 DB_MAINT_PASS=$(cat /etc/mysql/debian.cnf |grep -m 1 "password\s&lt;i&gt;=\s"&lt;/i&gt;| sed 's/^password\s&lt;i&gt;=\s&lt;/i&gt;//') mysql -u root -e \ "GRANT ALL PRIVILEGES ON &lt;i&gt;.&lt;/i&gt; TO 'debian-sys-maint'@'localhost' IDENTIFIED BY '$DB_MAINT_PASS';"

# Create the superuser named ‘docker’.

mysql -u root -e \ “DELETE FROM mysql.user WHERE user = ‘docker’; CREATE USER ‘docker’@’localhost’ IDENTIFIED BY ‘docker’; GRANT ALL PRIVILEGES ON &lt;i&gt;.&lt;/i&gt; TO ‘docker’@’localhost’ WITH GRANT OPTION; CREATE USER ‘docker’@‘%’ IDENTIFIED BY ‘docker’; GRANT ALL PRIVILEGES ON &lt;i&gt;.&lt;/i&gt; TO ‘docker’@‘%’ WITH GRANT OPTION;” && \
 /etc/init.d/mysql stop

# Start MariaDB

echo "Starting MariaDB…" /usr/bin/mysqld_safe </pre>

Build it and run it with volumes from the **my-data-container**.

<pre class="brush: bash; title: ; notranslate" title="">docker build -t site-db .
docker run -d -p 3306:3306 -volumes-from my-data-store -name my-site-db site-db </pre>

So up to now we have a MariaDB saving data on a /data/mysql folder shared from another container.

**Apache2 &#8211; php container**

This is the main container which will actually serve the Jommla website. This container will have two services running: **httpd and sshd**. [Supervisord][1] will be in charge of starting both services and keep them running. Dockerfile:

<pre class="brush: bash; title: ; notranslate" title="">FROM ubuntu:precise

MAINTAINER Thinking Code &lt;a href="http://thinkingco.de/"&gt;&lt;&lt;/a&gt;tommaso@thinkingco.de&gt;

# Hack for initctl not being available in Ubuntu
RUN dpkg-divert –local –rename –add /sbin/initctl
RUN ln -s /bin/true /sbin/initctl

# Install all that’s needed
RUN echo “deb http://archive.ubuntu.com/ubuntu precise main universe” &gt; /etc/apt/sources.list && \
    apt-get update && apt-get -y upgrade && \
    DEBIAN_FRONTEND=noninteractive apt-get -y install mysql-client apache2 libapache2-mod-php5 pwgen python-setuptools vim-tiny php5-mysql openssh-server sudo php5-ldap unzip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN easy_install supervisor

# Add all config and start files
ADD ./start.sh /start.sh
ADD ./foreground.sh /etc/apache2/foreground.sh
ADD ./supervisord.conf /etc/supervisord.conf
RUN mkdir -p /var/log/supervisor /var/run/sshd
RUN chmod 755 /start.sh && chmod 755 /etc/apache2/foreground.sh

# Set Apache user and log
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2

VOLUME [“/data”]

# Add site to apache

ADD ./pcsnetweb /etc/apache2/sites-available/
RUN a2ensite pcsnetweb

# Set root password to access through ssh
RUN echo "root:myroootpwd” |chpasswd

# Expose web and ssh
EXPOSE 80
EXPOSE 22

CMD [“/bin/bash”, “/start.sh”]</pre>

In addition to the Dockerfile there are several files needed to set everything up: an apache virtual host file, a file to start apache in foreground and a configuration file for supervisor. Then a start file to sum everything up and all the website files. Being a Joomla migration I only have a kickstarter.php and the jpa archive to restore everything from an akeebabackup.

So here we have the relevant part of the **supervisord.conf**:

<pre class="brush: bash; title: ; notranslate" title="">[program:httpd]
command=/etc/apache2/foreground.sh
stopsignal=6
;sshd
[program:sshd]
command=/usr/sbin/sshd -D
stdout_logfile=/var/log/supervisor/%(program_name)s.log
stderr_logfile=/var/log/supervisor/%(program_name)s.log
autorestart=true </pre>

The foreground.sh:

<pre class="brush: bash; title: ; notranslate" title="">&lt;b&gt;!/bin/bash&lt;/b&gt;

read pid cmd state ppid pgrp session tty_nr tpgid rest &lt; /proc/self/stat trap “kill -TERM -$pgrp; exit” EXIT TERM KILL SIGKILL SIGTERM SIGQUIT

source /etc/apache2/envvars
apache2 -D FOREGROUND </pre>

The start.sh:

<pre class="brush: bash; title: ; notranslate" title="">&lt;b&gt;!/bin/bash&lt;/b&gt;

if [ -d /data/www ]; then
  cp ./site-mysite.jpa /data/www/
  cp ./kickstart-core–3.8.0.zip /data/www/
fi
if [ -f /data/www/kickstart-core–3.8.0.zip ]; then
  cd /data/www && unzip kickstart-core–3.8.0.zip
  rm kickstart-core–3.8.0.zip
  cp kickstart-core–3.8.0/* .
  rm -rf kickstart-core–3.8.0
fi
chown www-data:www-data /data/www
supervisord -n </pre>

Now build and run it:

<pre class="brush: bash; title: ; notranslate" title="">docker build -t web-machine .
docker run -d -name my-web-machine -p 80:80 -p 9000:22 -link my-site-db:mysql -volumes-from my-data-store web-machine </pre>

I then needed to copy the temporary beckup files into the /data/www directory which can be done finding the actual dir with the

<pre class="brush: bash; title: ; notranslate" title="">docker inspect my-data-store | grep data</pre>

command which will give use the actual /data/www path on the host machine.

I then moved there the two needed file for restoring Joomla from an Akeeba backup: 1. a site-mysite–20131230–162721.jpa file containing all db data and files 2. kickstart-core–3.8.0.zip containing the kickstarter.php page to restore the backup

I’m doing this manually and not through a Dockerfile because it will be needed only the first time and not on every container start up.

So now we have all the db data in the my-data-store /data/mysql dir, all the website data in the my-data-store /data/www dir thus having a full backup can be achieved also with rsync on the /data dir.

We can also access the Apache2 PHP container through ssh using the host ip address on port 9000 and from inside the Apache container connect to the MariaDB through mysql client.

 [1]: http://supervisord.org/
