---
layout: lesson
title: Lesson 10 &middot; Move All Your Motors
suggested_time: 60-75 minutes
---

### What You'll Need

Before we get started, let’s make sure that we have all the parts.

<img src="fig-10_0.png" alt="fig-10_0" style="zoom:60%;" class="image center" />

### Wiring All Three Motors

The two remaining servo motors will be wired in the same way the first motor was. See the wiring diagram below, which includes the first motor as well.  Go ahead and make your final connections!

<img src="fig-10_1.png" alt="fig-10_1" style="zoom:100%;" class="image center" />

<img src="fig-10_2.png" alt="fig-10_2" style="zoom:30%;" class="image center" />

### Experimenting With The Motors

With all of the motors wired to the robot, we’re getting closer to getting everything moving!  First, let’s experiment with the other two motors to find which on pin 10 and which lies on pin 11 as well as find the range of motion for each of the motors. To do this, we will bring back the code from the previous lesson.

<img src="fig-10_3.png" alt="fig-10_3" style="zoom:80%;" class="image center" />

This code should make one of the arms wave back and forth.  

Change the  pin to 10 and see what happens (Remember to upload!).  Does it move the other arm or the head?  

<img src="fig-10_4.png" alt="fig-10_4" style="zoom:80%;" class="image center" />

Change the  pin to 11 and see what happens (Remember to upload!).  Does it move the other arm or the head?  

<img src="fig-10_5.png" alt="fig-10_5" style="zoom:80%;" class="image center" />

### Moving Multiple Motors

With all of the motors attached and tested it is now possible to get them all moving. We will start by creating a program that moves two motors independently.  

#### Move one motor at a time

This code below moves pin 9 back and forth and then moves pin 10 back and forth.  

<img src="fig-10_6.png" alt="fig-10_6" style="zoom:80%;" class="image center" />

Try adding the third motor (pin 11) on your own!

#### Move motors at the same time

We can also create code that moves motors at the same time.  The key to doing this is to remember that blocks within the “LOOP do” get executed very fast.  So what we can do is intentionally take out wait blocks so that certain blocks appear to happen at the same time.  Below is an example of code that does this:

<img src="fig-10_7.png" alt="fig-10_7" style="zoom:80%;" class="image center" />

The first two blocks move pin 9 to 0 degrees and then immediately move pin 10 to 0 degrees.  The second block happens so fast that it appears to happen at the same time as the first block.  

The third block causes the code to wait and rest for 1 second.

Next, the fourth and fifth blocks move both motors to 180 degrees.  

The last block causes the code to wait and rest for 1 second.

Give this code a try and see what happens.  When you’re done, challenge yourself and see if you can get all three to appear to move at exactly the same time!
