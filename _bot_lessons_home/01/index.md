---
layout: lesson
title: Lesson 1 &middot; 3D Printing and Design
suggested_time: 60-75 minutes

disciplines:
    - "Constructing Explanations and Designing Solutions: Apply scientific ideas to solve design problems. (4-PS3-4)"
### Cross-Cutting Concepts
    - "Science is a Human Endeavor: People’s needs and wants change over time, as do their demands for new and improved technologies. (3-5-ETS1-1)"
    - "Science affects everyday life. (4-PS3-4)"

### Learning Target(s)
technical_skills:
    - We will learn the parts and properties of a 3-D printer.
    - We will learn about industrial design and the importance of form and function in design.
life_skills:
    - How to have a discussion

essential_questions: 
    - What are the limitations of 3-D printing?
    - What is the importance of form and function in regards to the design process?
    - How do you suspect the robot was printed? (How were the pieces oriented on the printer?)

vocab:
    - Filament
    - Extruder
    - Bed
    - Cartridge

videos:
    - link: https://youtu.be/f4RGU2jXQiE
      text: 3-D Printer and How it is Made
    - link: https://youtu.be/Gwro2HzxMgw
      text: 3-D Printer in Action
documents:
other:

barriers: 
    - There shouldn’t be any barriers in this lesson

anticipatory:
    - Hand students a few 3-D printed objects, if you have them. What do they notice about the objects? What process do they think is needed to print the objects? 

practice:
    - Asking/answering questions regarding the 3-D printer and the process of printing 3-D objects.

assessment:
    - Drawing of robot with color schemes to be used for painting in the next session  
    - Ability to name the parts of a 3-D printer  
    - Understanding the importance of designing a product before it is printed?  

materials:
  - Engineering Journal
  - Portable 3-D printer
  - If a 3-D printer is not available for students to see, opt for the video

reflection:
  comprehension:
  - Explain the significance of 3-D printing in the design process.
  - What are some of the 3-D printers components and what does each of them do?
  - Describe the process that begins with designing an object in a CAD program and ends with the 3-D printed object.
  - Why is the form or beauty of a product important to engineers?

---

#### Review
* What CAD operations did we learn to do last week?

### Step 1: Introduction To 3-D Printing (25 minutes) 
Over the last two lessons the process of 3-D printing has been mentioned, but I think it is time to explicitly ask: “What is 3-D printing?”. That question is much more complicated than it originally seems. We can begin to answer it by drawing similarities and differences between a 3-D printer and your paper printer at home. The big difference is that a 3-D printer will print layers one on top of another, accumulating height while doing so. Using an analogy we can say that the 3-D printing process is much like writing your name on a cake, the icing sits atop the rest of the cake.

3-D printers are used by engineers in the field to quickly build designs. They are used as rapid prototyping machines more often than not, giving engineers the opportunity to design, build and test an idea in the same day. This means that while 3-D printers are not always creating the finished product, they are still crucial to the design process.

The process of getting a 3-D file to the printer isn’t as simple as you may suspect. It is not as easy as throwing the file we designed into a 3-D printer and turning it on. The CAD file we designed previously can be exported from Onshape as what is called an STL file. STLs are a common format for 3-D files. Unfortunately for us, a 3-D printer does not accept STL files. Instead they are made to accept g-code files. A g-code file is a file made up of many two dimensional drawings which will ultimately be printed one on top of the other to create the finished product. A g-code file tells the 3-D printer the specifics of how it should move and how much plastic to extrude at any one time.

What is needed is some way of converting an STL file to a g-code file. This can be done with a slicer program. A slicer will take the 3-D STL file and slice it into each 2-D piece. The overall process is shown in simplified form below:

![fig 5.1](fig-5_1.png){:class="image "}

Draw a 3-D printer on the whiteboard, making sure to label important components:

![fig 5.2](fig-5_2.png){:class="image fit"}

Going over the significant parts:

#### Vocabulary

* **Filament**: A long string of plastic that is fed into the extruder where it is melted and used to print an object.
* **Extruder**: The component responsible for heating and printing the plastic material of the filament.
* **Cartridge**: Where the filament is held.
* **Platform**: Where the object is printed.

Have the students attempt to point out these parts on the 3-D printer. Perhaps also ask them questions such as: How many motors do you see? What does each motor do?

### Step 2: Industrial Design (20 minutes) 
Industrial design is a term that refers to two different aspects of a manufactured product. The first is the object’s usefulness (function). The second is the object’s beauty (form). When engineers design products for the public they need to carefully consider the role of the product and determine how much of their effort goes into the form of the product and how much goes into the function of the product. Some things do not need to look pretty, they just need to work. Others need to draw people's attention to have a chance in the market.

Lead the students in a discussion about common items (especially electronics) and ask the students if they think that form or function is more important for that item. 

{% include badge.html type='activity' content='Have the class discuss reasons they like either Samsung or Apple phones.  Group each reason into two categories: function or beauty.   Explain the story of the <a href="https://bgr.com/2018/05/24/samsung-apple-lawsuit-patents-rounded-corners-setllement/" target="_blank">Samsung and Apple dispute</a> over rounded edges.  This activity enforces that looks do matter!' %}

{% include badge.html type='activity' content='Have your students design a smartphone for themselves and one for someone they know, like a relative, friend or sibling. How do those two phones differ? Perform the same exercise with something simpler, like a sandwich. How is the sandwich you made for yourself different from the sandwich you made for the other person? Why are they different?' %}

Hand each student the drawing of their robot as well as a box with the robot parts inside. The box should contain everything except the custom 3-D printed parts. You can hand those out next time. The drawing of their robot can be placed inside the box under the top. 
