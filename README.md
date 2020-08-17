## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/poproar/Barnabas-Instructors-Guide/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

Switch between text-based and block-based

Block-based Image:
- ![fig 3.6](fig-3_6.png){:.image .block-based}

General tag:
- {:.text-based}
- {:.block-based}


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/poproar/Barnabas-Instructors-Guide/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

### Image Recommendations

In the Barnabas docs the lesson images are stored in their respective lesson folder. All other site images are stored under assets. This is subject to change to a library as many of the images will be used in other cirriculum. All images should be no larger than 640 pixels wide and preferrably in png format. A service like [tinyPNG](https://tinypng.com) can also compress these images based on color depth while preserving transparent backgrounds. A compressed file improves site delivery and puts less load on mobile devices. 

### Adding New Lessons

To add new lessons, the following files need to be updated:
1. _config.yml - deterimines the files to load
2. index.html - home page
3. /_includes/sidebar/lessonsegment.html - show lesson in the sidebar
4. /_includes/sidebar/menu.html - show lesson in the sidebar
5. /_layouts/lesson.html - lesson page layout


Revision History
- 1.00
