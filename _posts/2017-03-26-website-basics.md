---
layout: post
title: "How I made this website"
date: 2018-03-26 13:10:39
categories: web
---
_[Updated 7-13-2018]_  

Writing a website by hand can take forever. Here's how I managed to build and host this website for free in just a couple hours.

#### _A note on the tutorial_
_This webpage will be free to make, but you won't be able to run server-side code. If you don't know what that is, you probably don't need it._

### Step 0.
It might help to get familiar with [GitHub][gh-tutorial] and the [command line][cl-tutorial]. We won't be using very advanced features, but we'll need the basics.

#### _A note on Jekyll_
_The next two steps involve setting up Jekyll, a tool that makes webpages easier to maintain. If you don't want to use it, skip ahead to step 4!_

### Step 1.
We'll need to install [Jekyll][jekyll-install]. It's harder to [install on Windows][jekyll-install-windows], but it's possible. Jekyll is a "static site generator", which is a buzzword-filled name that confused me for years because nobody seems to have defined it for laypeople. In case you were curious, here's a brief description:  

A "static site generator" defines some useful commands that you can put into your HTML. A simple example is the ability to insert the current date with the string `{% raw %}{{ site.time | date_to_string }}{% endraw %}`, but it's real power lies in the more advanced conditional statements and loops. These commands are not valid HTML on their own, but the "static site generator" can interpret your easy-to-write-but-invalid HTML and output valid HTML for you to use. This system makes writing and maintaining a changing website _much_ easier.

### Step 2.
Find a Jekyll theme you like. There are tons of these online - I found this one on [jekyllthemes.org][jekyllthemes]. Alternatively you can make your own, although I haven't found a handy tutorial for it.

### Step 3.
If you've successfully installed Jekyll and downloaded your template (or made your own), you should now be able to view your webpage! Using the command line, go to the directory where all the files are stored and run `jekyll serve`. If it runs, you can see your webpage by opening a web browser and going to the address it provides - the default is http://localhost:4000.

### Step 4.
Make any changes you want to turn the site into your own! This might be tricky if you're using somebody else's Jekyll template, as they tend to have their files littered all over the place. If you refresh your browser, you should see your changes taking place. Jekyll should auto-refresh, but if it doesn't just re-run `jekyll serve`.

### Step 5.
Create a [GitHub][github] repo with the name _your-github-id_.github.com: ![Github pages repository name]({{ "/static/img/repository_name.PNG" | absolute_url }}) If you name it anything else your webpage it will be available at _your-github-id_.github.com/_your-repo-name_.

### Step 6.
Go to your repo's settings page and enable GitHub pages: ![Github pages settings screen]({{ "/static/img/github_pages.PNG" | absolute_url }}). It might take a couple minutes, but you should now be able to see your website at _your-github-id_.github.com!

### Step 7.
You're done! Here are some extra things you can do to make your website amazing:

* Set up a [custom domain name][gh-domain]. You'll have to purchase a domain name, but those are pretty cheap. Most \*.com names are just $10 a year.
* Set up [HTTPS][cf-https]! Security is cool.  

[jekyll]: http://jekyllrb.com
[jekyllthemes]: http://jekyllthemes.org
[jekyll-install]: https://jekyllrb.com/docs/installation/
[jekyll-install-windows]: https://jekyllrb.com/docs/windows/
[github]: https://github.com/
[gh-pages]: https://pages.github.com/
[gh-domain]: https://help.github.com/articles/using-a-custom-domain-with-github-pages/
[gh-tutorial]: https://guides.github.com/activities/hello-world/
[gh-pages-jekyll]: https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/
[cl-tutorial]: https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything
[cf-https]: https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/
