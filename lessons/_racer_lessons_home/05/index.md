---
layout: lesson
title: Lesson 5 &middot; Motion

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/GnWS4G7Db4g
      text: Turning your bot 90 degrees
    - link: https://youtu.be/Kr0Qempo_gI
      text: Navigating your robot (Block-based)
	- link: https://youtu.be/EcphrH3rvFQ 
      text: Navigating your robot (Text-based)

---

#### Review

Let's recall the code that ultimately got our robot moving forward;

![fig 7.1](fig-7_1.png){:.image .block-based}

Getting each motor to move depends on geving it a non 90 degree angle. An angle further from 90 will cause the motor to move faster, and choosing a number on the other side of 90 will cause the motor to change directions. As we learned in the last lesson the two motors are flipped, so that one motor must be given the "opposite" angle to move in the same direction as each other.

```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);
  
  while (digitalWrite(2)==HIGH)
  {
    servo_pin_11.write( 90 );
    servo_pin_10.write( 90 );
  }
}

void loop()
{
  servo_pin_11.write( 1 );
  servo_pin_10.write( 180 );
}
```
{:.text-based}

### Step 1: Let's Move Backwards!

Drawing from the knowledge we gained to make the racer move forward, we should easily be able to make it move backwards as well. Simply remember that a number on the other side of 90 will make a motor move in the opposite direction:

![fig 7.3](fig-7_3.png){:.image .block-based}

```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);

while (digitalWrite(2)==HIGH){
    servo_pin_11.write( 90 );
    servo_pin_10.write( 90 );
  }
}

void loop()
{
  servo_pin_11.write( 180 );
  servo_pin_10.write( 1 );
}
```
{:.text-based}

That's great! We now know how to put our robots into reverse. 

### Step 2: Can We Make Our Car Turn?

Now let's say that from here we instead want to turn in one direction, how do we do that? Thinking about the direction we want to turn our motors if I wanted to turn left I would have the right motor continue moving forward but change the direction of the left motor. I could do likewise with the right motor if I wanted to turn right instead. The code to do either is below;

![fig 7.4](fig-7_4.png){:.image .block-based}

![fig 7.6](fig-7_5.png){:.image .block-based}

```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);

  while (digitalWrite(2)==HIGH){
    servo_pin_11.write( 90 );
    servo_pin_10.write( 90 );
  }
}

void loop()
{
  servo_pin_11.write( 1 ); //both being 1 will turn the robot left
  servo_pin_10.write( 1 ); //both being 180 will turn the robot right
}
```
{:.text-based}

#### Beginning To Turn...
You should find that changing the amount of time one wheel turns either shortens or lengthens the time the robot spends turning and therefore changes how far the robot turns.  Take some time to experiment!

Just remember that it will be impossible to see how long a turn lasts for if the turn is the only command being given. Instead, the robot will just turn continuously and appear to spin in place. Instead have a code that will move either forward or backward for some amount of time before turning, like so;

![fig 7.2](fig-7_2.png){:.image .block-based}

```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);

  while (digitalWrite(2)==HIGH){
    servo_pin_11.write( 90 );
    servo_pin_10.write( 90 );
  }
}

void loop()
{
  servo_pin_11.write(1);
  servo_pin_10.write(180);
  delay(500);
  servo_pin_11.write( 1 ); //both being 1 will turn the robot left
  servo_pin_10.write( 1 ); //both being 180 will turn the robot right
  delay(500);
}
```
{:.text-based}

{% include youtube.html id='Kr0Qempo_gI %}{:.block-based}

{% include youtube.html id='EcphrH3rvFQ %}{:.text-based}

### Challenge

1. Change the delay vaules of this code and see how the robot reacts. 
2. Move the robot forwards and backwards in the same program.

**Note**: Remember that you want to make a portion of your code at the end of any movement that brings your robot to a stop before having it move again. Without this it will be difficult to determine how far the robot is turning in a single command, as it will appear to turn continuously.