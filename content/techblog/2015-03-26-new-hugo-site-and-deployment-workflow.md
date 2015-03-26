---
title: New Hugo site and deployment workflow
author: mithrandir
date: 2015-03-27 00:22:00+00:00
slug: new-hugo-site-and-deployment-workflow
permalink: /2015/new-hugo-site-and-deployment-workflow
tags:
 - hugo
 - markdown
 - github pages
---
I've longed for long to have a statically generated website.

I've always found wordpress not to be inline with my vision of as thin code as possible.

This is where [Hugo][1] came into play. I find it particularly attractive because:

1. it is blazing fast (you can rebuild your site in milliseconds)
2. it is written in [go][2] language which I find extremely interesting for its simplicity
3. it is written by [Steve Francia][3] of Docker, MongoDB, vim-spf13 and other project's fame

I love docker and vim and now also **Hugo!**

Apart from copying the hugo website layout I also find it very pleasing to write content with it in [markdown][4]

and also find it very easy to deploy everything to [github pages][5] through a **git subtree**.

To setup your Hugo website you need to have a git repository on github.

Remove the public directory from the .gitignore file. Hugo projects ignore it by default.

Add the public directory to your repository:
```
git add public && git commit -m "Initial public subtree commit"
```

Deploy the subtree to a different branch. Specify a relative path to your public directory with --prefix:
```
git subtree push --prefix public origin gh-pages
```

Develop normally, committing your entire repository to your default (master) branch.

To deploy the public directory, run the subtree push command from the root directory:
```
git subtree push --prefix public origin gh-pages
```

Then you only need a `CNAME` file with your domain name inside and to CNAME your DNS to your default github.io domain:
```
CNAME thinkingco.de tommasop.github.io
```
 
Overall I'm very happy with the new asset:

- no db
- no webserver
- no administrative console
- **just content**

 [1]: http://gohugo.io
 [2]: https://golang.org
 [3]: http://spf13.com
 [4]: http://daringfireball.net/projects/markdown/
 [5]: https://pages.github.com/
