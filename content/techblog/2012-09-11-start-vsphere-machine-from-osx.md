---
title: Start vSphere machine from OSX
author: mithrandir
date: 2012-09-11 02:33:24+00:00
slug: start-vsphere-machine-from-osx
permalink: /2012/start-vsphere-machine-from-osx
---
So I have a vSphere 5.1 free Hypervisor installed on a HP Microserver.

Very nice hardware, very nice piece of software, so far so good.

Unfortunately I don&#8217;t have a Windows machine in my house except for a Win 7 which is virtualized on the vSphere machine.

I don&#8217;t want to install a Windows virtual machine on my MacBook just to start my Win 7 machine on the vSphere center.

The virtualized Win 7 machine is equipped with vSphere Client.

I tried several methods:

  * Ruby RVC (Remote Vsphere Console)
  * iPad vShpere application
  * vSphere Web Client

None of these worked.

Ruby RVC cannot be used to perform API write operations with the free HyperVisor, it can be used with the trial (60 days) version or any other paid version.

Both the iPad vSphere app and the web client option need the web client API to be enabled.

**This can be done &#8230;. you guess it &#8230;.. only from a Windows machine!!!**

So I was left with one choice: ssh console.

I enabled it directly in the vSphere terminal and then managed to start up my Win 7 machine with some console ninja secret commandssssss &#8230;
