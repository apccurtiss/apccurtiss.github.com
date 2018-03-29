---
layout: post
title: "How I made this website"
date: 2018-03-26 13:10:39
categories: web
---
Writing a website by hand can take forever. Here's how I managed to build and host this website for free in just a couple hours:

### Step 0.
I'm assuming you have some knowledge of [GitHub][gh-tutorial] and the [command line][cl-tutorial].

### Step 1.
Install [Jekyll][jekyll]. Jekyll is a "static site generator", which is a buzzword-filled name that confused me for years because nobody seems to have defined it for laypeople. In case you were curious, here's a brief description:  

A "static site generator" defines some useful commands that you can put into your HTML. A simple example is the ability to insert the current date with the string `{% raw %}{{ site.time | date_to_string }}{% endraw %}`, but it's real power lies in the more advanced conditional statements and loops. These commands are not valid HTML on their own, but the "static site generator" can interpret your easy-to-write-but-invalid HTML and output valid HTML for you to use. This system makes writing and maintaining a changing website _much_ easier.

### Step 2.
Find a Jekyll theme you like. There are tons of these online - I found this one on [jekyllthemes.org][jekyllthemes].

### Step 3.
Put the files in a [GitHub][github] repo. If you've installed Jekyll, you should now be able to view it locally by running `jekyll serve` then going to http://localhost:4000.

### Step 4.
Make any changes you want to turn the site into your own! This might take some digging at first, as Jekyll sites sometimes have their files littered all over the place.

### Step 5.
Set your repo up as a [GitHub Pages][gh-pages] site. GitHub Pages offers free web hosting for static websites, meaning you can use all the HTML, CSS, and Javascript you want but you can't customize the server. If you don't know what that means for you, you're probably fine. If you're running into problems, you can also check out GitHub's guide on setting up Jekyll pages [here][gh-pages-jekyll].

### Step 6.
You're done! You can now set up a [custom domain name][gh-domain] and even [HTTPS][cf-https]!

[jekyll]: http://jekyllrb.com
[jekyllthemes]: http://jekyllthemes.org
[github]: https://github.com/
[gh-pages]: https://pages.github.com/
[gh-domain]: https://help.github.com/articles/using-a-custom-domain-with-github-pages/
[gh-tutorial]: https://guides.github.com/activities/hello-world/
[gh-pages-jekyll]: https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/
[cl-tutorial]: https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything
[cf-https]: https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/
