---
layout: lesson
title: Lesson 19 &middot; Additional Sample Code
suggested_time: 30-60 minutes
videos:
    - link: https://youtu.be/F_K7G25mS4k
      text: Robot Arm Demo (Dial)
    - link: https://youtu.be/RPg-ayzt8RA
      text: Wood Robot Arm Demo (Dial)
    - link: https://youtu.be/Gxu7uIzHSiM
      text: Robot Arm Demo (Autonomous)
---

## Lesson Overview

Here is some additional sample code for reference.

## Dial Mode 

Program your robot arm in dial mode so that you can control all 4 axes using the dial.

{% include youtube.html id='F_K7G25mS4k' %}

{% include youtube.html id='RPg-ayzt8RA' %}

## Sample Code

```c
#include <Servo.h>

#define CLAWMOTOR_MAX 90
#define CLAWMOTOR_MIN 65
#define CLAWMOTOR_MID (CLAWMOTOR_MAX + CLAWMOTOR_MIN)/2

#define TILTMOTOR_MAX 155
#define TILTMOTOR_MIN 80
#define TILTMOTOR_MID (TILTMOTOR_MAX + TILTMOTOR_MIN)/2

#define EXTENDMOTOR_MAX 105
#define EXTENDMOTOR_MIN 10
#define EXTENDMOTOR_MID (EXTENDMOTOR_MAX + EXTENDMOTOR_MIN)/2

#define PANMOTOR_MAX 180
#define PANMOTOR_MIN 0
#define PANMOTOR_MID (PANMOTOR_MAX + PANMOTOR_MIN)/2

Servo panMotor;
Servo tiltMotor;
Servo extendMotor;
Servo clawMotor;

int potPin1 = 0;
int potPin2 = 1;
int potPin3 = 2;
int potPin4 = 3;

int panMotorPin = 6;
int tiltMotorPin = 9;
int extendMotorPin = 10;
int clawMotorPin = 11;

void setup() {
  // put your setup code here, to run once:
  panMotor.attach(panMotorPin);
  tiltMotor.attach(tiltMotorPin);
  extendMotor.attach(extendMotorPin);
  clawMotor.attach(clawMotorPin);
  Serial.begin(9600);
}

void printPotStatus() {
  Serial.print("Pot1 = " + String(analogRead(potPin1)));
  Serial.print(" Pot2 = " + String(analogRead(potPin2)));
  Serial.print(" Pot3 = " + String(analogRead(potPin3)));
  Serial.println(" Pot4 = " + String(analogRead(potPin4)));
}


void processPot() {
  int panMotorAngle = map(analogRead(potPin1),0,1023,0,180);
  panMotor.write(panMotorAngle);

  int tiltMotorAngle = map(analogRead(potPin2),0,1023,0,180);
  tiltMotor.write(tiltMotorAngle);

  int extendMotorAngle = map(analogRead(potPin3),0,1023,0,180);
  extendMotor.write(extendMotorAngle);

  int clawMotorAngle = map(analogRead(potPin4),0,1023,0,180);
  clawMotor.write(clawMotorAngle);

  //Serial.println(panMotorAngle);
}

void loop() {
  printPotStatus();
  delay(100);
  processPot();
}
```



## Autonomous Mode

You can also program your robot to follow pre-programmed moves.  Simply copy the code and upload it using the Arduino IDE.  Have fun customizing it!

{% include youtube.html id='Gxu7uIzHSiM' %}

## Sample Code

```c
#include <Servo.h>

#define CLAWMOTOR_MAX 90
#define CLAWMOTOR_MIN 65
#define CLAWMOTOR_MID (CLAWMOTOR_MAX + CLAWMOTOR_MIN)/2

#define TILTMOTOR_MAX 155
#define TILTMOTOR_MIN 80
#define TILTMOTOR_MID (TILTMOTOR_MAX + TILTMOTOR_MIN)/2

#define EXTENDMOTOR_MAX 105
#define EXTENDMOTOR_MIN 10
#define EXTENDMOTOR_MID (EXTENDMOTOR_MAX + EXTENDMOTOR_MIN)/2

#define PANMOTOR_MAX 180
#define PANMOTOR_MIN 0
#define PANMOTOR_MID (PANMOTOR_MAX + PANMOTOR_MIN)/2

Servo panMotor;
Servo tiltMotor;
Servo extendMotor;
Servo clawMotor;

int panMotorPin = 6;
int tiltMotorPin = 9;
int extendMotorPin = 10;
int clawMotorPin = 11;

void setup() {
  // put your setup code here, to run once:
  panMotor.attach(panMotorPin);
  tiltMotor.attach(tiltMotorPin);
  extendMotor.attach(extendMotorPin);
  clawMotor.attach(clawMotorPin);

  homePos();
}
void loop() {
  // put your main code here, to run repeatedly:

  demoSequence();
  syncTest();
  
}

void clawOpen() {
  clawMotor.write(CLAWMOTOR_MAX);
}

void clawClose() {
  clawMotor.write(CLAWMOTOR_MIN);
}

//- cycles through the motor angles smoothly
void cycleMotor(Servo motor, int minNum, int maxNum, int delay_time) {
  for (int i = minNum;i<maxNum;i++) {
    motor.write(i);
    delay(delay_time);
  }
  for (int i = maxNum;i>minNum;i--) {
    motor.write(i);
    delay(delay_time);
  }
}

void syncTest() {
  
  clawMotor.write(CLAWMOTOR_MAX);
  panMotor.write(PANMOTOR_MAX);
  tiltMotor.write(TILTMOTOR_MAX);
  extendMotor.write(EXTENDMOTOR_MAX);
  delay(1000);
  
  clawMotor.write(CLAWMOTOR_MIN);
  panMotor.write(PANMOTOR_MIN);
  tiltMotor.write(TILTMOTOR_MIN);
  extendMotor.write(EXTENDMOTOR_MIN);

  delay(1000);
  
}

void demoSequence() {

  cycleMotor(clawMotor, CLAWMOTOR_MIN, CLAWMOTOR_MAX, 30);
  cycleMotor(panMotor, PANMOTOR_MIN, PANMOTOR_MAX, 30);
  cycleMotor(tiltMotor, TILTMOTOR_MIN, TILTMOTOR_MAX, 30);
  cycleMotor(extendMotor, EXTENDMOTOR_MIN, EXTENDMOTOR_MAX, 30);
}


void homePos() {
  clawMotor.write(CLAWMOTOR_MIN);
  panMotor.write(PANMOTOR_MIN);
  tiltMotor.write(TILTMOTOR_MIN);
  extendMotor.write(EXTENDMOTOR_MIN);
}
```

