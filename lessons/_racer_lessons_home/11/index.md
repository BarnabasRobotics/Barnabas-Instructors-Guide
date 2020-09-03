---
layout: lesson
title: Lesson 11 &middot; Program Your Car To Avoid Obstacles

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/nqGW6I5kZv0
      text: Stop Before You Crash (Block-based)
    - link: https://youtu.be/yfgcoLhec7E
      text: Turn Before You Crash (Block-based)
    - link: https://youtu.be/0wk1WM62UDg
      text: Turn Randomly (Block-based)
    - link: https://youtu.be/QiMypxfT6PQ
      text: Avoiding Obstacles (Text-based)
    - link: https://youtu.be/Qy43DEdsn0I
      text: Turn Randomly (Text-based)
---



### Overview

In this section we'll combine everything to program our car to move and avoid objects

<div markdown="1">

### Full Tutorial Video

{% include youtube.html id='QiMypxfT6PQ' %}{:.text-based}

</div>{:.text-based}


### Our Previous Tools

With both the motors and the ultrasonic sensor working properly, we have all the tools we need to create an autonomous program that can avoid obstacles.  All that is left of us to do is effectively marry the motion of the robot to its ability to sense objects.  To help us create the avoidance code we are going to use a few of the tools we have constructed thus far. 

### Stop Before We Crash

Let's program that car to stop before we hit a wall.  We'll use what we have learned about the ultrasonic sensor to program our robot to do this.  

{% include youtube.html id='nqGW6I5kZv0' %}{:.block-based}

### Turn Before We Crash

Let's program our car to not only stop before we hit a wall, but also turn to avoid it!

<div markdown="1">
Let's program the robot to turn right if it sees an object less than 20 cm away, else move forward.   See the code below.

![fig 15.5](fig-15_5.png){:.image .block-based}

Note: The 400 ms delay after the right subroutine determines how long it will turn right for before moving on to the next section of code.  

{% include youtube.html id='yfgcoLhec7E' %}{:.block-based}

### Adding Delays 

Let's add some delays into our code to increase our performance.

1. Adding a 500 ms delay after the while loop will give us time to remove our hand from the robot after pressing it.  This is to help prevent us from accidently bumping the robot off its course.
2. Adding a 20 ms delay after the forward subroutine adds a little time for the code to rest before it loops back to the ultrasonic part of the code.  Without the rest, the ultrasonic sensor may malfunction from time to time by getting overloaded by requests.

![fig 15.6](fig-15_6.png){:.image .block-based}

### Improving Our Ultrasonic Sensor's Performance 

As your robot's battery gets drained, it's a known issue that the ultrasonic sensor will begin responding with 0 even when there is something in front of it.  We can actually take care of this through code by ignoring 0 values.  The AND block helps us do this.

![fig 15.8](fig-15_8.png){:.image .block-based}

Note: In the code above, the robot will turn right ONLY if the ultrasonic sensor sees a value that is less than 20 AND it's not 0.  

</div>{:.block-based}

#### Bonus Activity (Turn Randomly)

{% include youtube.html id='0wk1WM62UDg' %}{:.block-based}

{% include youtube.html id='Qy43DEdsn0I' %}{:.text-based}

