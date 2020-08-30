---
layout: lesson
title: Lesson 11 &middot; Program Your Car To Avoid Obstacles

suggested_time: 60-75 minutes  

videos:

---



### Overview

In this section we'll combine everything to program our car to move and avoid objects

https://youtu.be/fgngci1Lno4

https://youtu.be/qRF44RI5khk

### Stop Before We Crash

Let's program that car to stop before we hit a wall!  Let's use what we have learned about the ultrasonic sensor to program our robot to do this.  We'll need to use if/else.

![fig 15.3](fig-15_3.png){:.image .block-based}



### Turn Before We Crash

Let's program our car to not only stop before we hit a wall, but also turn to avoid it!

<div markdown="1">
Let's program the robot to turn right if it sees an object less than 20 cm away, else move forward.   See the code below.

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

</div>{:.block-based}

#### Bonus Activity (Turn Randomly)

{% include youtube.html id='0wk1WM62UDg' %}{:.block-based}

{% include youtube.html id='Qy43DEdsn0I' %}{:.text-based}

