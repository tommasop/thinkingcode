---
title: Email from static site
author: mithrandir
date: 2015-04-03 22:38:00+00:00
slug: email-from-static-site
permalink: /2015/email-from-static-site
tags:
 - email
---

**WHAT:** HUGO is a great static site generator but I need a contact form.

**HOW:** You can use `http://formspree.io/` an [open sourced][1] project that makes sending email as easy as:

```
<form action="//formspree.io/you@email.com">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form>
```


 [1]: https://github.com/asm-products/formspree

