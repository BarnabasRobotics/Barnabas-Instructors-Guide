---
layout: lesson
title: Lesson 10 &middot; Changing Speed

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/eLpbRqXdTR0
      text: How to code DC driver L9110S with different speeds Arduino (CORRECTED WIRING)
---

### Overview

In this section we will be programming our Barnabas Rover to change speeds.

### Changing Speed

So what happens if you want to change the speed of your motor?  Well the answer here is that we need to switch our thinking from digital to analog.  Until now we've been controlling our DC drive control pins (8,11,10,12) by either turning them fully on (HIGH) or fully off (LOW).  This results in either full speed (HIGH) or not moving at all (LOW).  To set the speed in between these two values, we need to use something called analog control.  The table below shows how digital and analog relate to one another when coding

| Digital Value | Analog Value | Motor Driver Control Speed |
| ------------- | ------------ | -------------------------- |
| HIGH          | 255          | Fully on                   |
| LOW           | 0            | Fully off                  |
| - (NA)        | 128          | Half on                    |

You can see that analog value of 255 is the same as HIGH, and analog value of 0 is the same as LOW.  Using analog value 128 will allow you to set the pin to be half on (Note: 128 is half of 255)  This is something that you can't do with digital.  

See the updated motor control tables for both motor A and motor B using analog control.  

Note: In the table below, only pins 8 and 11 can be controlled via analog so pins 8 and 12 can still only be HIGH or LOW.

**Motor A Control Table Using Analog**

| A-IA Signal (Pin 8) - Digital | A-IB Signal (Pin 11) - Analog | DC Motor Movement                |
| :---------------------------: | :---------------------------: | -------------------------------- |
|            LOW (0)            |               0               | Stop Slowly (Deceleration Stop)  |
|            LOW (0)            |              255              | Turn One Way                     |
|            LOW (0)            |              128              | Turn One Way (Half Speed)        |
|          HIGH (255)           |               0               | Turn The Other Way               |
|          HIGH (255)           |              128              | Turn The Other Way (Half Speed)  |
|          HIGH (255)           |              255              | Stop Right Away (Emergency Stop) |

**Motor B Control Table Using analog**

| B-IB Signal (Pin 12) - Digital | B-IA Signal (Pin 10) - Analog | DC Motor Movement                |
| :----------------------------: | :---------------------------: | -------------------------------- |
|            LOW (0)             |               0               | Stop Slowly (Deceleration Stop)  |
|            LOW (0)             |              255              | Turn One Way                     |
|            LOW (0)             |              128              | Turn One Way  (Half Speed)       |
|           HIGH (255)           |               0               | Turn The Other Way               |
|           HIGH (255)           |              128              | Turn The Other Way (Half Speed)  |
|           HIGH (255)           |              255              | Stop Right Away (Emergency Stop) |

<div markdown = "1">

### Changing Our Motor Wires To Analog Pins

It is a good idea to change all of our pins to analog pins instead of digital.  This way you can adjust the analog level of both control pins, simplifying the logic.  8 and 12 are digital pins, so let's change them to 3 and 9.  See the updated table and video below.


### How to code DC driver L9110S with different speeds Arduino (CORRECTED WIRING)

{% include youtube.html id='eLpbRqXdTR0' %}

</div>{:.text-based}

**Motor A Control Table Using Analog**{:.text-based}

| A-IA Signal (Pin 3) - Analog | A-IB Signal (Pin 11) - Analog | DC Motor Movement                |
| :--------------------------: | :---------------------------: | -------------------------------- |
|              0               |               0               | Stop Slowly (Deceleration Stop)  |
|              0               |              255              | Turn One Way                     |
|              0               |              128              | Turn One Way (Half Speed)        |
|             255              |               0               | Turn The Other Way               |
|             128              |               0               | Turn The Other Way (Half Speed)  |
|             255              |              255              | Stop Right Away (Emergency Stop) |
{:.text-based}

**Motor B Control Table Using analog**{:.text-based}

| B-IB Signal (Pin 10) - Analog | B-IA Signal (Pin 9) - Analog | DC Motor Movement                |
| :---------------------------: | :--------------------------: | -------------------------------- |
|               0               |              0               | Stop Slowly (Deceleration Stop)  |
|               0               |             255              | Turn One Way                     |
|               0               |             128              | Turn One Way  (Half Speed)       |
|              255              |              0               | Turn The Other Way               |
|              128              |              0               | Turn The Other Way (Half Speed)  |
|              255              |             255              | Stop Right Away (Emergency Stop) |
{:.text-based}

<div markdown = "1">

Now let's experiment!  We'll need to use the command, **analogWrite()**.

The code below converts the original subroutines to include the use of analog and also adds two new subroutines to move forward and backwards at half speed.  Give it a try!

<img src="halfspeedardu.png" alt="fig-6_0" style="zoom:100%;" class="image center" />

</div>{:.block-based} 

```c
int motb_pin1 = 3;
int motb_pin2 = 11;

int mota_pin1 = 9;
int mota_pin2 = 10;

int button_pin = 2;

void setup() {
  
  //-Control Motor B
  pinMode(motb_pin1,OUTPUT);
  pinMode(motb_pin2,OUTPUT);
  
  //-Control Motor A
  pinMode(mota_pin1,OUTPUT);
  pinMode(mota_pin2,OUTPUT);
  
  //- button
  pinMode(button_pin,INPUT_PULLUP);
  
}

//- turn 90 degrees
void turnRight() {
  
}

void turnLeft() {
  
}

void stop() {
  //- motor a
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,255);
  
  //- motor b
  analogWrite(motb_pin1,255);
  analogWrite(motb_pin2,255);
}

void moveForward(int speed) {
  
  //- motor a
  analogWrite(mota_pin1,speed);
  analogWrite(mota_pin2,0);
  
  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speed);
  
}

void moveBackward(int speed) {
  
  //- motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,speed);
  
  //- motor b
  analogWrite(motb_pin1,speed);
  analogWrite(motb_pin2,0);
  
}

void loop() {
  
  if (digitalRead(button_pin)==LOW) {
    for (int i=255;i>0;i--) {
      moveForward(i);
      delay(100);
    }
  }
  else {
    stop();
  }

}
```
{:.text-based}

### Extra Challenges{:.text-based}

1) Make functions for forward, backwards and stop{:.text-based}
2) Make function for forward and backwards that allows you to set speed{:.text-based}
3) Make your car move and slow down by using the for loop{:.text-based}
4) Change forward and backwards functions so that you can set the speed for BOTH motors.{:.text-based}
5) Create function to turnRight() and turnLeft(){:.text-based}
