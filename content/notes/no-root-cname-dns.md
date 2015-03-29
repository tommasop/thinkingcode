---
title: No root CNAME DNS
author: mithrandir
date: 2015-03-29 00:22:00+00:00
slug: no-root-cname-dns
permalink: /2015/no-root-cname-dns
tags:
 - dns
---

## CNAME in apex

**WHAT:** CNAME in apex is forbidden by the RFC.

**WHY:** CNAME overrides all other records. Therefore it's impossible to construct a valid zone where the apex has a CNAME, since it would also override the SOA.

**MY EXPERIENCE:** I tried to setup github pages on my domain root `thinkingco.de` what happened was that my `fastmail.com` account stopped to work correctly.

What I did was to switch my github pages on `www.thinkingco.de` and then add a redirect.

