---
layout: lesson
title: Lesson 15 &middot; Incorporate Motor Limits To Your Move Function
suggested_time: 45-60 minutes
videos:
    - link: https://youtu.be/K0oMXIJTww4
      text: Adding Min and Max Limits For All Motors For Arduino Wood Arm To Your Move Function
    - link: https://youtu.be/m1LiqKgSrSs
      text: FIX - Adding Min and Max Limits For All Motors For Arduino Wood Arm To Your Move Function
---

## Lesson Overview

How to incorporate the max and minimum angles into your move functions so that your code never pushes your robot arm beyond its limits.  Make sure to watch both videos as the second video fixes a bug in the first one!

## Video Tutorial #1

{% include youtube.html id='K0oMXIJTww4' %}

## Sample Code #1

```c
/*
Challenge #1: Add min/max to moveMotor(), moveAngleUp(), moveAngleDown() function
to take into account the min/max values
Challenge #2: Test that all the min/max limits works
Challenge #3: Do more complex moves... try to grab something


*/

#include <Servo.h>

#define CLAW_OPEN 120
#define CLAW_CLOSE 5

#define BASE_MAX 180
#define BASE_MIN 0

#define TILT_MAX 180
#define TILT_MIN 120

#define EXTEND_MAX 150
#define EXTEND_MIN 75

//- servos move half a circle 0-180 degrees.
Servo baseMotor;
Servo tiltMotor;
Servo extendMotor;
Servo clawMotor;

//- runs only once when you turn on
void setup() {
  baseMotor.attach(6);
  tiltMotor.attach(9);
  extendMotor.attach(10);
  clawMotor.attach(11);
  
  home();
  
  delay(1000);
  
}

void home() {
  tiltMotor.write(90);
  baseMotor.write(90);
  extendMotor.write(90);
  clawMotor.write(90);
}


void moveMotor(Servo motor, int target, int min, int max) {
  
  //- figure out if we need to move up or down
  
  int myCurrentAngle = motor.read();
  
  //- if myCurrentAngle is > target, go down
  if (myCurrentAngle > target) {
      moveAngleDown(target,motor,min,max);
  }
  
  //- if myCurrentAngle is < target, go up
  if (myCurrentAngle < target) {
      moveAngleUp(target,motor,min,max);
  }
  
}

void moveAngleUp(int target, Servo motor, int min, int max) {
  
  int angle = motor.read();
  
  while (angle <= target) {
    
    if (angle <= max) {
    
      //-do this code
      motor.write(angle);
      delay(100);
      
      angle = angle + 5;
    }
    
  }
  
}

void moveAngleDown(int target, Servo motor, int min, int max) {
  
  int angle = motor.read();
  
  while (angle >= target) {
    
    if (angle >= min) {
    
      motor.write(angle);
      delay(100);
    
      angle = angle - 5;
    }
    
  }
}
  

//- runs forever in a loop after setup
void loop() {


  moveMotor(clawMotor,6,CLAW_CLOSE, CLAW_OPEN);
  moveMotor(clawMotor,110,CLAW_CLOSE, CLAW_OPEN);
  moveMotor(clawMotor,4,CLAW_CLOSE, CLAW_OPEN);

  moveMotor(baseMotor,-1, BASE_MIN, BASE_MAX);
  moveMotor(baseMotor,200, BASE_MIN, BASE_MAX);

  moveMotor(tiltMotor,-20,TILT_MIN, TILT_MAX);
  delay(1000);

  moveMotor(extendMotor,30,EXTEND_MIN, EXTEND_MAX);
  delay(1000);

  while (1==1) {
    //-do nothing
  }

}
```

## Video Tutorial #2

{% include youtube.html id='m1LiqKgSrSs' %}

## Sample Code #2

```c
/*
Challenge #1: Add min/max to moveMotor(), moveAngleUp(), moveAngleDown() function
to take into account the min/max values
Challenge #2: Test that all the min/max limits works
Challenge #3: Do more complex moves... try to grab something
*/

#include <Servo.h>

#define CLAW_OPEN 120
#define CLAW_CLOSE 5

#define BASE_MAX 180
#define BASE_MIN 0

#define TILT_MAX 180
#define TILT_MIN 120

#define EXTEND_MAX 150
#define EXTEND_MIN 75

//- servos move half a circle 0-180 degrees.
Servo baseMotor;
Servo tiltMotor;
Servo extendMotor;
Servo clawMotor;

//- runs only once when you turn on
void setup() {
  baseMotor.attach(6);
  tiltMotor.attach(9);
  extendMotor.attach(10);
  clawMotor.attach(11);
  
  home();
  
  delay(1000);
  
}

void home() {
  tiltMotor.write(90);
  baseMotor.write(90);
  extendMotor.write(90);
  clawMotor.write(90);
}


void moveMotor(Servo motor, int target, int min, int max) {
  
  //- figure out if we need to move up or down
  
  int myCurrentAngle = motor.read();
  
  //- if myCurrentAngle is > target, go down
  if (myCurrentAngle > target) {
      moveAngleDown(target,motor,min,max);
  }
  
  //- if myCurrentAngle is < target, go up
  if (myCurrentAngle < target) {
      moveAngleUp(target,motor,min,max);
  }
  
}

void moveAngleUp(int target, Servo motor, int min, int max) {
  
  int angle = motor.read();
  
  while (angle <= target) {
    
    if (angle <= max) {
    
      //-do this code
      motor.write(angle);
      delay(100);
      
      angle = angle + 5;
    }
    else {
      break;
    }
    
  }
  
}

void moveAngleDown(int target, Servo motor, int min, int max) {
  
  int angle = motor.read();
  
  while (angle >= target) {
    
    if (angle >= min) {
    
      motor.write(angle);
      delay(100);
    
      angle = angle - 5;
    }
    else {
      break;
    }
    
  }
}
  

//- runs forever in a loop after setup
void loop() {


  moveMotor(clawMotor,0,CLAW_CLOSE, CLAW_OPEN);
  moveMotor(clawMotor,180,CLAW_CLOSE, CLAW_OPEN);
  moveMotor(clawMotor,0,CLAW_CLOSE, CLAW_OPEN);

  while (1==1) {
    //-do nothing
  }

}
```



