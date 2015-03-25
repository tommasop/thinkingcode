---
title: Polymorphic attachment management for Rails 4 and ActiveAdmin
author: mithrandir
date: 2014-01-04 02:33:24+00:00
slug: polymorphic-attachment-management-for-rails-4-and-activeadmin
permalink: /2014/polymorphic-attachment-management-for-rails-4-and-activeadmin
---
Following my [2012 post!!!][1] I finally managed to write down a small gem that allows anyone to add multiple files to any model in his rails app.

The gem has the highly innovative name of: **AttachIt**.

As the original post also took into account ActiveAdmin I managed to add the same functionalities to ActiveAdmin also.

The gem is thought for use in the show action for your model.

I have a lot of websites with this requirement of handling multiple files for multiple models so I think this must be a fairly common pattern.

I also use [activeadmin][2] quite broadly and find it highly flexible. And it is indeed! Here I use [dropzonejs.com][3] inside activeadmin and also import bootstrap modal and grid to handle the responsive image gallery.

Enjoy: <https://github.com/tommasop/attach_it>

 [1]: http://thinkingco.de/2012/tech/rails-3-is_documentable-with-activeadmin
 [2]: https://github.com/activeadmin/activeadmin
 [3]: http://www.dropzonejs.com
