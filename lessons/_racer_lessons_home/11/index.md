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

### Stop Before We Crash

Let's program our car to stop before we hit a wall.  We'll use what we have learned about the ultrasonic sensor to program our robot to do this.  

{% include youtube.html id='nqGW6I5kZv0' %}{:.block-based}

### Turn Before We Crash

Let's program our car to not only stop before we hit a wall, but also turn to avoid it!

```c
#include <Servo.h>

int trig = 3;
int echo = 4;
int led = 7;

int button = 2;
int mA = 10;
int mB = 11;

Servo motorA;
Servo motorB;

// float so that we can handle decimals
float speedOfSoundMetersPerSec = 343;
float duration_microSeconds;
float duration_seconds;
float distance_meters;
float distance_cm;

void setup() {
  // put your setup code here, to run once:

  pinMode(trig,OUTPUT);
  pinMode(echo,INPUT);
  pinMode(led,OUTPUT);
  
  pinMode(button,INPUT);

  motorA.attach(mA);
  motorB.attach(mB);

  stop();

  Serial.begin(9600);

}

/*************************/
/***** car movements *****/
/*************************/

void stop() {
  motorA.write(90);
  motorB.write(90);
}

void backward() {
  motorA.write(180);
  motorB.write(0);
}

void forward() {
  motorA.write(0);
  motorB.write(180);
}

void turnRight() {
  motorA.write(90);
  motorB.write(180);
  delay(500);
  stop();
}

void turnLeft() {
  motorA.write(0);
  motorB.write(90);
  delay(500);
  stop();
}

/***********************/
/**** ultrasonic *******/
/***********************/

float ultrasonic() {
  // reset the ultrasonic sensor
 digitalWrite(trig,LOW);
 delayMicroseconds(5);

 // send a 10 microsecond pulse out through the trigger
 digitalWrite(trig, HIGH);
 delayMicroseconds(10);
 digitalWrite(trig, LOW);

 // wait for the response and store it in duration.  It will return in microseconds.
 duration_microSeconds = pulseIn(echo,HIGH);

 // convert duration to seconds
 duration_seconds = duration_microSeconds / 1000000;

 // get distance traveled in meters.  distance = (speed * time)/2

 distance_meters = (speedOfSoundMetersPerSec * duration_seconds)/2;

 // convert to cm

 distance_cm = distance_meters*100;
 //Serial.println(distance_cm);

 return distance_cm;
 
}

void loop() {

  //wait here until you press the button
  while(digitalRead(button)==HIGH) {
    //do nothing
  }

  //move forward
  forward();

  //keep moving forward WHILE I am more than 5 cm away from the wall
  while (ultrasonic() > 4) {
    forward();
  }

  stop();
  delay(1000);
  backward();
  delay(500);
  turnRight();

}
```
{:.text-based}



<div markdown="1">
This code will make the robot turn right if it sees an object less than 20 cm away, otherwise it will move forward.   Try it out!

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

