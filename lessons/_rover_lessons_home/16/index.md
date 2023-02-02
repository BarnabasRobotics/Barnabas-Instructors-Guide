---
layout: lesson
title: Lesson 16 &middot; Light Following

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/xmdW76WxKyo?start=13
      text: Line & Light Following Demo With Barnabas Rover
    - link: https://youtu.be/S2HLdrF7zZU
      text: Control Rover with one sensor
    - link: https://youtu.be/e_tf5DuSSrQ
      text: Control Rover with two sensors

    
---



### Overview

In this section we'll learn how to use light sensors to program our robot to follow a light!

### What You'll Need

Before we get started, let's make sure that we have all the parts.

- 1 x Arduino Uno Compatible Board
- 2 x Photoresistors

### Demo Video

{% include youtube.html id='xmdW76WxKyo?start=13' %}

### Introduction To Photoresistors Video

{% include youtube.html id='S2HLdrF7zZU' %}

Video on how to wire and code a single photoresistor to control your robot

### The Photoresistor

<img src="photo resistor.jpg" alt="fig-3_4" style="zoom:50%;" class="image center" />

The photoresistor is a resistor that changes it's resistance value based on the amount of light that it sees.  We can use this characteristic to detect the intensity of light! 

The photoresistor has two legs,and both of them are the same (i.e. it doesn't matter which way you connect it.)

### Using Two Photoresistors

{% include youtube.html id='e_tf5DuSSrQ' %}

Video on how to wire and code two photoresistors to control your robot

### Wiring The Photoresistors

Let's wire two photo resistors so that we can use them to program our Barnabas Rover to follow a light!

We will be connecting the photoresistors between analog inputs and GND.

| Left Photoresistor | Arduino-Uno Compatible Board |
| ------------------ | ---------------------------- |
| Leg #1             | A0                           |
| Leg #2             | GND                          |

| Right Photoresistor | Arduino-Uno Compatible Board |
| ------------------- | ---------------------------- |
| Leg #1              | A1                           |
| Leg #2              | GND                          |

### Coding Light Following

```c

int motb_pin1 = 3;
int motb_pin2 = 11;

int mota_pin1 = 9;
int mota_pin2 = 10;

int button_pin = 2;

int trig_pin = 4;
int echo_pin = 5;

void setup() {
  
  //-Control Motor B
  pinMode(motb_pin1,OUTPUT);
  pinMode(motb_pin2,OUTPUT);
  
  //-Control Motor A
  pinMode(mota_pin1,OUTPUT);
  pinMode(mota_pin2,OUTPUT);
  
  //- button
  pinMode(button_pin,INPUT_PULLUP);
  
  //-ultrasonic pin
  pinMode(trig_pin,OUTPUT);
  pinMode(echo_pin,INPUT);
  
  //- photoresistor pin
  pinMode(A0,INPUT_PULLUP);
  pinMode(A1,INPUT_PULLUP);
  
  Serial.begin(9600);
  
}

//-sends sound out and receives sound
//-returns the distance in centimeters
int ultrasonic() {
  
  long time;
  float distance;
  
  //-trigger a sound 
  // send out trigger signal
  digitalWrite(trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(trig_pin, HIGH);
  delayMicroseconds(20);
  digitalWrite(trig_pin, LOW);
  
  //- a sound has gone out!!
  //- wait for a sound to come back
  
  time = pulseIn(echo_pin, HIGH);
  
  //- calculate the distance in centimeters
  distance = 0.01715 * time;
  
  return distance;

}

//- turn 90 degrees
void turnRight() {
  
  //- motor b is stopped
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);
  
  //- motor a moves forward
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,0);
  
  delay(200);
  //delay(600);
  
  //- stop motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);
  
}

void tankTurn(int speeda, int speedb) {
  //- motor a moves ... backwards
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,speeda);
  
  //- motor b moves forward
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
  
  delay(1650);
  
  //- stop both motors
  stop();
  
}

void turnAround(int speeda, int speedb) {
  
  //- motor a is stopped
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);
  
  //- motor b moves forward
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
  
  delay(1650);
  
  //- stop motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);
  
}

void turnLeft() {
  
  //- motor a is stopped
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);
  
  //- motor b moves forward
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,255);
  
  delay(200);
  //delay(800);
  
  //- stop motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);
  
}

void stop() {
  //- motor a
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,255);
  
  //- motor b
  analogWrite(motb_pin1,255);
  analogWrite(motb_pin2,255);
}


void moveToWall(int speeda, int speedb) {
  
  //- move forward!
  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);
  
  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
  
  //-stop when you hit a wall!!
  
  int distance = ultrasonic();
  
  while (distance > 5) {
    //-do nothing except check distance
    distance = ultrasonic();
  }
  
  //-stop!!!
  stop();
  
}



void moveForward_no_distance(int speeda, int speedb) {
  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);
  
  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
}


void moveForward(int speeda, int speedb, int inches) {
  
  int myDelay;
  
  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);
  
  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
  
  //- move forward the distance in inches
  
  myDelay = inches*125;
  delay(myDelay);
  
  //- stop
  stop();
  
}

void moveBackward(int speeda, int speedb) {
  
  //- motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,speeda);
  
  //- motor b
  analogWrite(motb_pin1,speedb);
  analogWrite(motb_pin2,0);
  
}

void loop() {
  
  Serial.println(analogRead(A1));
  
  delay(100);
  
  //- if the A1 light is on, move the left wheel forward
  if (analogRead(A1) < 30) {
    //-move the left wheel forward
    turnRight();
  }
  else {
    //-stop the left wheel
  }
  
  //- if the A0 light is on, move the right wheel forward
  if (analogRead(A0) < 45) {
    turnLeft();
  }
  else {
    
  }
```

