---
layout: lesson
title: Lesson 13 &middot; Light Following

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

int trig = 3;
int echo = 4;
int led = 7;
int leftSensor = 5;
int rightSensor = 6;
int light_init = 0;

void forward() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
  digitalWrite(10,HIGH);
  digitalWrite(12,LOW);
}

void backward() {
  digitalWrite(8,HIGH);
  digitalWrite(11,LOW);
  digitalWrite(10,LOW);
  digitalWrite(12,HIGH);
}

void rightTurn() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
  digitalWrite(10,LOW);
  digitalWrite(12,LOW);
  delay(300);
  stop();
}

void leftTurn() {
  digitalWrite(8,LOW);
  digitalWrite(11,LOW);
  digitalWrite(10,HIGH);
  digitalWrite(12,LOW);
  delay(300);
  stop();
}

void forwardLeft() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
}

void backwardLeft() {
  digitalWrite(8,HIGH);
  digitalWrite(11,LOW);
}

void backwardRight() {
  digitalWrite(10,LOW);
  digitalWrite(12,HIGH);
}

void forwardRight() {
  digitalWrite(10,HIGH);
  digitalWrite(12,LOW);
}

void stop() {
  digitalWrite(8,LOW);
  digitalWrite(11,LOW);
  digitalWrite(10,LOW);
  digitalWrite(12,LOW);
}

void setup() {
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  pinMode(led, OUTPUT);
  
  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);
  
  pinMode(8, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(12, OUTPUT);
  
  pinMode(2, INPUT);

  pinMode(A0, INPUT_PULLUP);
  pinMode(A1, INPUT_PULLUP);

  Serial.begin(9600);

  //- get initial light intensity of room
  light_init = analogRead(A0);
}

void loop() {

    //- wait for button press before doing anything
    while (digitalRead(2) == HIGH) {
      //- do nothing
    }
    delay(500);

    //- loop here forever after the button is pressed
    while (true) {
      // Code for light following
      
      //- Darkest: Analog Value = 255;
      //- Brightest: Analog Value = 0;
            
      int left_light = analogRead(A0);
      int right_light = analogRead(A1);
      
      Serial.print("Left Light Value:" );
      Serial.println(left_light);
      Serial.print("Right Light Value:" );
      Serial.println(right_light);

      //- turn right if light is more intense on the right
      if (right_light < light_init - 10 && left_light < right_light - 10) {
        backwardLeft();
        forwardRight();
      }
      //- turn left if light is more intense on the left
      else if (left_light < light_init - 10 && right_light < left_light - 10) {
        backwardRight();
        forwardLeft();
      }
      //- go forward if light is evenly intense on both sides
      else if (left_light < light_init - 10 && right_light < light_init - 10) {
        forward();
      }
      //- don't move if light is not intense at all
      else {
        stop();
      }
    }
}
```

