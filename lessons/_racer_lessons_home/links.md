---
published: true
layout: index
title: Additional Links &middot; Racer

documents:
    - link: https://youtu.be/L7ud2i_yfRI
      text: Basic Viewing 
    - link: https://goo.gl/DlDJ53
      text: Barnabas Template File
    - link: https://youtu.be/L7ud2i_yfRI
      text: Designing your Barnabas-Bot
---

# {{ page.title }}

The links provided here are items our instructors find useful or have created themselves for use in the classroom and not currently associated with our cirriculum. Please feel free to browse through them or even add your own by contributing to the page.

{% for item in page.documents %}[ {{ item.text }} ]( {{ item.link}} ){:target="_blank"}  
{% endfor %}
