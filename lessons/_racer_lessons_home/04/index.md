---
layout: lesson
title: Lesson 4 &middot; Wire And Program Motors

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/byMBsEjQ6rY
      text: Wiring The Motors (without using the servo headers)
    - link: https://youtu.be/aM6ilpNDK0E
      text: Wiring The Motors (servo headers)
    - link: https://youtu.be/Db-M5C3b7DA
      text: How to calibrate continuous servos
---

### Continuous Servo Motor Control

{% include youtube.html id='aPI11noSG28' %}{:.text-based}

#### Throttle

A throttle is an instrument used in some kinds of motorized vehicles, such as boats, to control speed. These throttles behave in a particular way; the position of the throttle is what dictates the speed and direction of the motor. For example, a throttle may begin in a position which has the motor stopped. When the throttle is pushed forward from that position the motor begins to move forward. The farther forward the throttle is pushed, the faster the motor moves in that direction. If, instead, I pull the throttle backwards, the motor will begin moving backwards, with it picking up speed as I pull the throttle back further and further. 

As it turns out, our continuous servo motors behave very similarly.

<img src="fig-6_5.png" alt="fig-6_5" style="zoom:50%;" class="image center" />

We can give our motors a command including an angle. Our continuous servo motors understand that angle as moving a throttle back and forth. You can see by the picture above that 90 degrees represents the middle position of the throttle, which would have the motor stopped. An angle larger than 90 will begin moving the motor in one direction, with the speed increasing as the angle approaches 180. Likewise, an angle less than 90 moves the motor in the opposite direction, with the speed increasing as you approach 1.

#### How Continuous Servos Work

Continuous servos are similar to the servos that we used from Barnabas-Bot, except that they move like wheels, rather than just from 0 degrees to 180 degrees.  You will be using the same "Servo" block that you used from your Barnabas-Bot project.  See below for a table that explains what happens when you input different angle values.

| Angle |     Direction      | Speed |
| :---- | :----------------: | ----: |
| 0     |     Clock-wise     |  Full |
| 90    |        None        |  Zero |
| 180   | Counter Clock-wise |  Full |

##### 

### Wire Your Continuous Servo Motors

{% include youtube.html id='byMBsEjQ6rY' %}

### 

![fig 6.0](fig-6_0.png){:class="image "}

Keep in mind that the servo motors can also be attached via the servo pin headers on the Barnabas Noggin. Doing so will ensure, however, that that motor function will be greatly diminished while the noggin is only powered by USB.

### Coding Motors To Move

#### Move Forward

The code below should move your car forward.  Notice that it seems like the motor should be moving in opposite directions.  Look at how your car is constructed and see if you can see why the car moves forward even though the motors are moving in opposite directions.

![fig 6.6](fig-6_6.png){:.image .block-based}

```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);
}

void loop()
{
  servo_pin_11.write( 1 );
  servo_pin_10.write( 180 );
}
```
{:.text-based}

Well, if we look at the robot from underneath, we can see that the two motors are oriented differently, with on pointing out in one direction and the other pointing out in the opposite direction. You can tell this because the sticker is visible on one of them but not on the other. because of this, an angle that would cause a motor to move in one direction will cause the motor on the other side to move in the opposite direction, although at the same speed.
<img src="fig-6_7.png" alt="fig-6_7" style="zoom:50%;" class="image center" />

#### Stop Your Motors
The code below will move your car forward for 1 second, stop and then loop forever.

![fig 6.8](fig-6_8.png){:.image .block-based}

```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);
}

void loop()
{
  servo_pin_11.write( 1 );
  servo_pin_10.write( 180 );
  delay( 1000 );
  servo_pin_11.write( 90 );
  servo_pin_10.write( 90 );
  delay( 1000 );
}
```
{:.text-based}

Because there is a button attached to our robot we can create a far more convenient code. We can use the button to trigger movement of the car. In other words have the car be stopped until the button is pressed;

![fig 6.10](fig-6_10.png){:.image .block-based}


```c
#include <Servo.h>

Servo servo_pin_11;
Servo servo_pin_10;

void setup()
{
  servo_pin_11.attach(11);
  servo_pin_10.attach(10);
  While (digitalRead(2)==HIGH){
    servo_pin_11.write(90);
    servo_pin_10.write(90);
  }
  delay(500);
}

void loop()
{
  servo_pin_11.write( 1 );
  servo_pin_10.write( 180 );
}
```
{:.text-based}

### Calibration
{% include badge.html type='troubleshoot' content='If you notice that your motors are not moving at the right speed, or they do not stop entirely, you will need to calibrate your motors. ' %}

{% include youtube.html id='Db-M5C3b7DA' %}{:.block-based}

{% include youtube.html id='aPI11noSG28?t=1084' %}{:.text-based}