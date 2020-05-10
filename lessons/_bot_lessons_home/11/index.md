---
layout: lesson
title: Lesson 11 &middot; Advanced Coding
suggested_time: 60-75 minutes each

disciplines: 
- "ETS1.A: Defining and Delimiting Engineering Problems: Possible solutions to a problem are limited by available materials and resources (constraints). The success of a designed solution is determined by considering the desired features of a solution (criteria). Different proposals for solutions can be compared on the basis of how well each one meets the specified criteria for success or how well each takes the constraints into account. (3-5-ETS1-1)"
- "ETS1.B: Developing Possible Solutions: At whatever stage, communicating with peers about proposed solutions is an important part of the design process, and shared ideas can lead to improved designs. (3-5-ETS1-2)"
- "Tests are often designed to identify failure points or difficulties, which suggest the elements of the design that need to be improved. (3-5-ETS1-3)"
- "ETS1.C: Optimizing the Design Solution: Different solutions need to be tested in order to determine which of them best solves the problem, given the criteria and the constraints. (3-5-ETS1-3)"

### Learning Target(s)
technical_skills:
- Learning to integrate new ideas, subroutines, with old ones, motors, LEDs and buzzers.
life_skills:
- Perserverance
- Teamwork

essential_questions:
- What advantages does coding with subroutines provide?

vocab:
- Subroutine

videos:
documents:
other:

depth:
- "Level 1:  Recall and Reproduction"
- "Level 2:  Skills and Concepts"
- "Level 3:  Strategic Thinking and Reasoning"
- "Level 4:  Extended Thinking"
barriers:
- Poor understanding of previous programming concepts
- Inability to grasp abstract concepts

anticipatory:
- Students will learn about subroutines as advanced methods of implementing previous coding ideas.

practice:
- Creating several subroutines for individual tasks that have already been covered i.e. waving, blinking, siren noises etc.

assessment:
- Having the robot do several different actions one after the other with the use of subroutines.

materials:
- Engineering journal
- Computer with Arduino/Ardublock software
- Assembled robot

reflection:
  comprehension: 
  - Using subroutines is a two step process. Explain the two steps.
  - How is naming subroutines significant?

---

### Step 1:  Subroutines (60 min)
![fig 15.1](fig-15_1.png){:class="image fit"} 

In Ardublock we can code using what are called subroutines, which can be found at the bottom of the control tab.  

The two subroutine blocks available are the subroutine commands block and the subroutine block ( which I will refer to as the subroutine run block). Upon closer inspection of the two blocks I can see that only one of them fits into the loop do:

![fig 15.2](fig-15_2.png){:class="image "}

The subroutine commands block acts as a place to hold code. If we subroutine commands block contains other blocks in it we can use the subroutine run block to reference that code later. Here is an example:

![fig 15.3](fig-15_3.png){:class="image "}

Inside the subroutine commands block you can see I have recreated the blinking light code. Also, I have renamed the subroutine commands block to flash. The exact same has been done to the subroutine run block, which also reads flash. When the code attempts to run the loop do sees flash and tries to find a subroutine command block with the same name. If it is successful in finding an identically named subroutine command block it will essentially insert all blocks within that subroutines command block into the code. Looking above you can think of the block inside the loop do as a placeholder for all of the blocks inside the subroutines command block.

The real question is why is this useful? Haven’t we just made more work for ourselves? Well, yes and no. In the example above the use of subroutines is unnecessary, but as we aspire to create more and more complex code subroutines become a powerful tool. Take a look at the list of tasks I want my robot to do below:

1. Wave its right hand
2. Blink
3. Make a siren noise for several seconds
4. Wave its right hand again
5. Dance for a few seconds

Doing this without subroutines will take  much work and be difficult to keep organized. However if I take the time to create subroutines for each of these actions I can clean up the code inside the loop do tremendously:

![fig 15.4](fig-15_4.png){:class="image "}

Notice that in the code above some subroutines are used multiple times. This is done while only making one subroutines command block per each distinctly named subroutine. You can see that in this case, where some subroutines are run multiple times, having subroutines is much better than not. In addition to that the code is much easier to read and understand.

#### Vocabulary
 * **Subroutine**: A set of instructions designed to perform a frequently used task. In Ardublock the subroutine blocks consist of the subroutine commands block, which holds the instructions, and the subroutine (run) block, which fits into the loop do.

{% include badge.html type='best_practice' content='You may have noticed that I avoided calling the LED based subroutine blink, calling it flash instead. This is because blink is a named command in Arduino already, and naming a subroutine blink causes a conflict when the Ardublock code is translated to Arduino. You could however name the subroutine Blink, as subroutines are case sensitive.' %}

{% include badge.html type='tidbit' content='The process of creating and calling subroutines is common amongst every programming language. Typically in typed programming languages subroutines are given the name functions instead. For the students planning to continue learning about programming beyond this class functions will become a constant.' %}