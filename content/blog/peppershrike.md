---
title: "Peppershrike"
date: 2018-05-19T12:00:00-05:00
draft: false
---

At times, it's useful to get information from people reading a blog post. However, requiring users to visit another site, potentially deal with advertisements or creating accounts, or other annoyances greatly drives down the number of people willing to answer a quick question.

In an attempt to make it easier for users to quickly respond, I've created a small web app called Peppershrike.

Here's an example of how it works:

{{<peppershrike 1>}}

It's incredibly quick and easy to use and doesn't require users to visit any other sites or fill out any other information. It's easily themeable to fit into any site. And it's [free and open source](https://git.huefox.com/syfaro/peppershrike) software!

All you have to do is create a `div` to contain the survey and include a small JavaScript snippet. Here's an example, using the same code for the survey above.

{{<highlight html>}}
<div class="peppershrike" data-id="1"></div>

<script src="https://peppershrike.huefox.com/peppershrike.js" data-host="https://peppershrike.huefox.com"></script>
<script>
    Peppershrike.find();
</script>
{{</highlight>}}

There's an example theme for how to style it in the [git repo](https://git.huefox.com/syfaro/peppershrike/src/branch/master/themes/syfaro.css). I'll hopefully be adding a few more default themes to make it fit in other places better without extra work.

It's also possible to add other types of questions, such as ones that will only accept numeric input.

{{<peppershrike 2>}}

Or if you have specific data or want to make it easier for the user, there's even a multiple choice type.

{{<peppershrike 3>}}

It creates a fairly simple web interface to add surveys and manage responses. Future versions will contain more types of questions and potentially things like graphs of multiple choice responses.

I'd love to hear what you think about it or if you have any suggestions for new features! Of course, here's a simple form through it to answer this. It's also there to show off you don't need to include a description, only a title.

{{<peppershrike 4>}}

If you're curious about the name, I mostly use bird species to title my projects. Naming things is difficult!

<script src="https://peppershrike.huefox.com/peppershrike.js" data-host="https://peppershrike.huefox.com"></script>
<script>
    Peppershrike.find();
</script>
