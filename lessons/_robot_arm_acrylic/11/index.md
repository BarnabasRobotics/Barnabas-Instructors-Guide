---
layout: lesson
title: Lesson 11 &middot; Code Base Motor With A While Loop
suggested_time: 30-60 minutes
videos:
    - link: https://youtu.be/iGCHPjRm1Lo
      text: Introduction To While Loops and Variables Using the Base Servo Motor - Arduino Robot Arm
---

## Lesson Overview

- While loop, condition, variable
- How to make your code loop any number of times 
- Using a while loop to change the angle of the servo motor
- Make your servo motor move like the second hand of a clock

## Tutorial Video

{% include youtube.html id='iGCHPjRm1Lo' %}

## Sample Code

```c
#include <Servo.h>

//- servos move half a circle 0-180 degrees.
Servo baseMotor;

//- runs only once when you turn on
void setup() {
  baseMotor.attach(6);
}


//- runs forever in a loop after setup
void loop() {
  
  int counter = 0;
  int angle = 0;
  
  //- move from 0 to 180
  while (angle <= 180) {
    
    //-do this code
    baseMotor.write(angle);
    delay(1000);
    
    angle = angle + 6;
    
  }
  
  //- move from 180 to 0
  angle = 180;
  while (angle >= 0) {
    
    baseMotor.write(angle);
    delay(1000);
    
    angle = angle - 6;
    
  }
  
  
  while (1==1) {
    //-do nothing
  }

}
```



