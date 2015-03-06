---
title: Tailing problems in Windows
author: mithrandir
date: 2013-02-17 02:33:24+00:00
slug: tailing-problems-in-windows
permalink: /2013/tailing-problems-in-windows
---
I built this beautiful dashboard collecting data from different sensors on a high efficiency vehicle.

I opted for an html page with server-events.

Now I need to tail two files every 0.2 seconds and those files are uptaded every 0.2 seconds. These in Windows 7 brings up random errors when tail.exe tries to read a file that&#8217;s being updated in the same exact instant.

This means that **tail.exe uses file reading with an exclusive lock** &#8230;. very baaaad!

I wondered if powershell had a non locking mechanism for reading content from files.

I whipped up something with Set-Content and Get-Content but to no avail because Get-Content seems to use a reading exclusive lock too!

So I invoked the powers of ruby flock (f-ile lock) to overcome this problem.

Try this on windows:

  * launch the writing.rb process
  * launch as many reading.rb processes you want

You will find no problems nor errors!



For [more info on ruby flock options][1]

 [1]: http://www.ruby-doc.org/core-1.9.3/File.html#method-i-flock
