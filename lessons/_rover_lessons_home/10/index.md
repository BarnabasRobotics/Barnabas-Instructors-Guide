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

Note: Only pins 8 and 11 can be controlled via analog so pins 8 and 12 can still only be HIGH or LOW.  

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

Now let's experiment!  We'll need to use the command, **analogWrite()**.

The code below converts the original subroutines to include the use of analog and also adds two new subroutines to move forward and backwards at half speed.  Give it a try!

<img src="halfspeedardu.png" alt="fig-6_0" style="zoom:100%;" class="image center block-based" />

```c
void forward() {
  digitalWrite(8,LOW);
  analogWrite(11,255);

  digitalWrite(12,LOW);
  analogWrite(10,255);
}

void backward() {
  digitalWrite(8,HIGH);
  analogWrite(11,0);

  digitalWrite(12,HIGH);
  analogWrite(10,0);
}

void forwardHalf() {
  digitalWrite(8,LOW);
  analogWrite(11,128);

  digitalWrite(12,LOW);
  analogWrite(10,128);
}

void backwardHalf() {
  digitalWrite(8,HIGH);
  analogWrite(11,128);

  digitalWrite(12,HIGH);
  analogWrite(10,128);
}

void rightTurn() {
  digitalWrite(8,LOW);
  analogWrite(11,255);

  digitalWrite(12,LOW);
  analogWrite(10,0);
  
  delay(300);
  stop();
}

void leftTurn() {
  digitalWrite(8,LOW);
  analogWrite(11,0);

  digitalWrite(12,LOW);
  analogWrite(10,255);
  
  delay(300);
  stop();
}

void stop() {
  digitalWrite(8,LOW);
  analogWrite(11,0);

  digitalWrite(12,LOW);
  analogWrite(10,0);
}

void setup()
{
  pinMode(8,OUTPUT);
  pinMode(11,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(12,OUTPUT);
  pinMode(2,INPUT);
}

void loop()
{
  while (digitalRead(2)==HIGH) {
     //- do nothing
  }
 
  forward();
  delay(1000);
  stop();
  delay(1000);
  
  forwardHalf();
  delay(1000);
  stop();
  delay(1000);
  
  backward();
  delay(1000);
  stop();
  delay(1000);

  backwardHalf();
  delay(1000);
  stop();
  delay(1000);
}
```
{:.text-based}

<div markdown = "1">

### Video Lesson - How to code DC driver L9110S with different speeds Arduino (CORRECTED WIRING)

{% include youtube.html id='eLpbRqXdTR0' %}

Note: This version rewires the DC Driver pins to 3,11 and 9,11.  Details explained in the video.

</div>{:.text-based}
