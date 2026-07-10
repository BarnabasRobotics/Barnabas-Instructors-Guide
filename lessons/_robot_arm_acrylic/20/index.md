---
layout: lesson
title: Lesson 20 &middot; Additional Resources
suggested_time: NA
---

## Lesson Overview

Here are some additional resources and challenges.

## Challenge Robot Arm To Do More!

1) Pick up an object and place it down. You can draw a circle on the table to give it a target landing spot. Trigger the motion using one of the potentiometers.
2) Pick up a marker and draw a shape. Trigger the motion using one of the potentiometers.
3) Pick up a marker and write a letter. Trigger the motion using one of the potentiometers.
4) Pick up a marker and write your name. Trigger the motion using one of the potentiometers.

## Quick Workshop Template Code

This template code was used by me in a summer camp workshop where the kids only had an 90-min to get the robot arm operational.   Students were instructed on how to fill-in the blank functions to get their robot to work.

```c
#include <Servo.h>

// SERVO MOTOR OBJECTS

Servo baseMotor;
Servo tiltMotor;
Servo extendMotor;
Servo clawMotor;

// MAIN FUNCTIONS

void setup() {
    baseMotor.attach(6); 
    tiltMotor.attach(9);
    extendMotor.attach(10);
    clawMotor.attach(11);
    home();
}

void loop() {

}

// HELPER FUNCTIONS

void home() {
}
 
void panLeft() {
}

void panRight() {
}

void panCenter() {
}

void openClaw() {
}

void closeClaw() {
}

void tiltUp() {
}

void tiltDown() {
}

void extend() {
}

void retract() {
}
```
