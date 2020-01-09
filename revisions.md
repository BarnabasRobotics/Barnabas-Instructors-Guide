---
layout: index
title: Revisions
---
<!-- Main -->
# {{ page.title }}

This site was inspired by previous schoology courses and 
amazing curriculum writers like Valerie Sun and Monica Bennett.
You can find their work in our [NGSS repo.](https://github.com/BarnabasRobotics/Curriculum-NGSS)

Current Version {{ site.version }}

### Releases
{% for release in site.github.releases %}
{{ release }}  
{% endfor %}
<!-- see github repo tags for revisions -->
<!-- {% for tags in site.repository %}
{% for tag in tags %}
[ {{ tag.id }} ]( {{ tag.link}} )  
{% endfor %}
{% endfor %} -->
