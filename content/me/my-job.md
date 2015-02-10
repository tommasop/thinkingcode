---
aliases:
- /me/my-job/
date: 2013-07-01
linktitle: MyJOb
menu:
  main:
    parent: me
prev: /me/my-life
notoc: true
title: My Job
weight: 40
---

# My Job

IT Freelance since 2001.

I've been mainly working for two companies in the last years: the largest IT Training network in Italy PCSNET Srl and the biggest privately owned road safety focused company in Italy AISICO Srl. 

For both I've:
- planned, implemented and deployed the IT infrastructure
- planned, developed and deployed the websites
- engineered out business processes into business web applications
- built web application sold to several customers and actually in production

As a Devop I use Linux virtualization in its Docker form.

The **most complex dockerized network configuration** consists of a rack with 5 1U servers hosting:
- a fault tolerant haproxy
- an owncloud backed by GlusterFS distributed replicated volume configuration
- a PostgreSQL 9.3 + Postgis 2.1 database hot standby replicated
- three highly available wordpress websites 
- a gitlab code repository

The **most complex business application** is a 12-factor rails 4 application used internally for guardrail crash test data collection and graphs and drawings production.
The rails 4 app is structured as a series of excel like auto updating forms. Drawings and graphs are made with SVG and d3.js.

The web application I developed for AISICO Srl is in production in ASTRAL Spa and Provincia di Latina and it is a web based road cadastre management system. It is 12 factorized and deployed through docker.






