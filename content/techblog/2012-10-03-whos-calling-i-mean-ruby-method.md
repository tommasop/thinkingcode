---
title: 'Who&#039;s calling? (I mean ruby method)'
author: mithrandir
date: 2012-10-03 02:33:24+00:00
slug: whos-calling-i-mean-ruby-method
permalink: /2012/whos-calling-i-mean-ruby-method
---
I needed to know which method was calling another method in a ruby app.

I&#8217;m writing a legacy protocol parser and need to control that received packets from the serial port stream are matching with commands replies.

So I have a set of methods performing some commands and constants which represent correct replies:



I wanted to be able to have the following interface to parse reply packets so that I can adapt the correct answer on the basis of the sent command:



So I had to find a way to dynamically call the reply packet constant.

I already named the constants with the same name as the called command prepended by an **R_** standing for reply.

The main problem was how to find the **calling_method**.  
I found out that in the ruby Kernel there is a method called **caller** which prints the calling chain in a ruby script.  
The only task was then to parse the last method name from the chain:



The parse_answer method ended up being coded like this:
