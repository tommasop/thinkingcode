---
title: 'My Website stack: WNWS'
author: mithrandir
date: 2012-06-08 02:33:24+00:00
slug: my-website-stack-wnws
permalink: /2012/my-website-stack-wnws
---
After much thinking and wondering around through many solutions I opted for the following stack:

>   * **W**ebbynode
>   * **N**ginx
>   * **W**ordpress
>   * **S**vbtle

I already had a Webbynode account and this was an easy choice.  
My Webby is actually configured with nginx which is also my default webserver for rails deployments: another easy choice.

I fell in love with [svbtle][1] layout and administrative interface because I find it very clean and relaxing like the IA Writer I use in my iPad. But svbtle is a closed bunch of geniuses and I&#8217;m not that kind of boy, so I began searching for a solution.

There is [obtvse][2] a svbtle rails clone but I preferred a solid and rich blogging platform as WordPress for which I already bought some components which will help me quickly setup landing pages and the likes.

So I ended up with [wp-svbtle][3] which is an open source template for WordPress.

An so ended the quest of choosing the building blocks.

To deploy an application with RAPP (Rapid Apps) I use the [webbynode ruby gem][4] which needs to be a git repo.

So I forked the WordPress git repository on my account and cloned it locally I then initiated the webbynode rapp with a PHP engine and pushed it on my webby and use the [change_dns][5] command to point it to my **thinkingco.de** domain.

The init and push commands take also care of setting up a mysql database and password with the name of your app. But I found myself in need to setup the password for the user and grant him access to the database:

    $ mysql -u root -pmy-root-mysql-password
    
    mysql> grant all on app_db_name.* to 'app_user_name'@localhost identified by 'app_user_mysql_password';
    

Then I pointed my browser to thinkingco.de and inserted the configuration data in the wordpress [wp-config.php][6].

Now I wanted a way to easily install plugins and update wordpress itself so I needed to install the **php ssh library**:

    $ sudo apt-get install libssh2-php
    $ sudo /etc/init.d/nginx restart
    

Then I updated the **wp-config.php** file adding the following lines:

    define('FS_METHOD', 'direct'); // 'ssh' is also an option, but did not work for my setup
    define('FTP_BASE', '/opt/local/nginx/html/domain.com/');
    define('FTP_CONTENT_DIR', '/opt/local/nginx/html/domain.com/wp- content/');
    define('FTP_PLUGIN_DIR ', '/opt/local/nginx/html/domain.com/wp-content/plugins/');
    define('FTP_PUBKEY', '/home/username/.ssh/id_rsa.pub');
    define('FTP_PRIKEY', '/home/username/.ssh/id_rsa');
    define('FTP_USER', 'username');
    define('FTP_HOST', 'your-domain.com:22');
    

Now my wordpress site was able to install plugins/themes or update itself. You could need to update permissions for wordpress files:

    $ chown -R www-data /your/wordpress/app
    $ chmod g+x /your/wordpress/app
    

After installing each single plugin I ssh into my webby and from there push back to my github forked repo this keeping my fork updated.

One last thing is to be able to use pretty urls without using rewrite rules in nginx this can be achieved with the **try_files** code line:

    location / {
              root   /your/app/root;
              index  index.php index.html index.htm;
              try_files $uri $uri/ /index.php;
    }
    

So now you know how this website is built, all the process was quite straightforward and I&#8217;m happy with the result.

 [1]: http://svbtle.com/
 [2]: https://github.com/NateW/obtvse
 [3]: https://github.com/gravityonmars/wp-svbtle
 [4]: https://github.com/webbynode/webbynode
 [5]: http://guides.webbynode.com/articles/rapidapps/dns.html
 [6]: http://codex.wordpress.org/File:install-step3.png
