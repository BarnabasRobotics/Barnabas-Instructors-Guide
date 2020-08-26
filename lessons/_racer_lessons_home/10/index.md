---
layout: lesson
title: Lesson 10 &middot; Program Your Car To Avoid Obstacles

suggested_time: 60-75 minutes  

---

### Overview

In this section we'll combine everything to program our car to move and avoid objects

{% include youtube.html id='QiMypxfT6PQ' %}{:.text-based}


### Our Previous Tools

With both the motors and the ultrasonic sensor working properly, we have all the tools we need to create an autonomous program that can avoid obstacles.  All that is left of us to do is effectively marry the motion of the robot to its ability to sense objects.  To help us create the avoidance code we are going to use a few of the tools we have constructed thus far. 

#### Subroutines

We're going to use the subroutines that we created previously to program motion commands with ease.

![fig 15.1](fig-15_1.png){:.image .block-based}

#### Button Start Code

We're going to use our button start code so that we can trigger the program using our hand.

![fig 15.2](fig-15_2.png){:.image .block-based}

### Stop Before We Crash

{% include youtube.html id='nqGW6I5kZv0' %}

### Turn Before We Crash

{% include youtube.html id='yfgcoLhec7E' %}

Lastly, let's use what we have learned about the ultrasonic sensor to program our robot to avoid obstacles.  To avoid obstacles it needs to be able to do different things depending on what the situation is.  For that reason we'll need to use if/else.

![fig 15.3](fig-15_3.png){:.image .block-based}

Using these tools, let's program the robot to turn right if it sees an object less than 20 cm away, else move forward.   See the code below.

![fig 15.5](fig-15_5.png){:.image .block-based}

Note: The 400 ms delay after the right subroutine determines how long it will turn right for before moving on to the next section of code.  



### Adding Delays 

Let's add some delays into our code to increase our performance.

1. Adding a 500 ms delay after the while loop will give us time to remove our hand from the robot after pressing it.  This is to help prevent us from accidently bumping the robot off its course.
2. Adding a 20 ms delay after the forward subroutine adds a little time for the code to rest before it loops back to the ultrasonic part of the code.  Without the rest, the ultrasonic sensor may malfunction from time to time by getting overloaded by requests.

![fig 15.6](fig-15_6.png){:.image .block-based}

### Improving Our Ultrasonic Sensor's Performance 

As your robot's battery gets drained, it's a known issue that the ultrasonic sensor will begin responding with 0 even when there is something in front of it.  We can actually take care of this through code by ignoring 0 values.  The AND block helps us do this.

![fig 15.8](fig-15_8.png){:.image .block-based}

Note: In the code above, the robot will turn right ONLY if the ultrasonic sensor sees a value that is less than 20 AND it's not 0.  

#### Bonus Activity (Turn Randomly)

{% include youtube.html id='0wk1WM62UDg' %}
