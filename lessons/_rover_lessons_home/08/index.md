---
layout: lesson
title: Lesson 8 &middot; Subroutines

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/Zi0cBWEh6nM
      text: How to code Arduino DC Motor Drivers using functions and subroutines (Text-Code)
---

### Overview

In this section we will begin the process of adding more complex moves to our Barnabas Rover.  In order to do this, we need to learn about subroutines.

### About Subroutines

Up to this point we have been issuing commands to our robot in a painstaking way. To move the robot forward we need to give orders to four different pins (8,11, 10, 12) and then specify a time that they continue obeying that order. It would be nice if we could instead give only one order to our robot, like move forward, and have it understand what we mean. 

Think of when you're told to take out the trash.  Your parents don't tell you: 

1. Open the trash can, then take the trashbag out
2. Tie it
3. Go outside and put it in the bin
4. Come inside and put another trashbag in the can
5. Then close the lid

Instead, they just tell you to "take the trash out".  The reason is because at some point you were already taught all the necessary steps required to accomplish the task.  Our robot can do this same thing where we make it understand one command as a longer list of orders.

We are going to achieve this by using **subroutines**. 

<div markdown = "1">

### Video Lesson - How to code Arduino DC Motor Drivers using functions and subroutines (Text-Code)

{% include youtube.html id='Zi0cBWEh6nM' %}

</div>{:.text-based}

### Creating A Subroutine

To create a subroutine is to create a little sub-program within your code.  Take a look at the code below where we create a subroutine that moves the car forward.  Notice that the name of the subroutine matches what it does.  This way it is easy to keep track what our subroutines do.

<img src="fig-8_1.png" alt="fig-6_0" style="zoom:65%;" class="image center block-based" />

<img src="fig-8_2.png" alt="fig-6_0" style="zoom:70%;" class="image center block-based" />

<img src="fig-8_3.png" alt="fig-6_0" style="zoom:100%;" class="image center block-based" />




```c
void forward() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
  digitalWrite(10,HIGH);
  digitalWrite(12,LOW);
}
```
{:.text-based}

### Calling A Subroutine

To call a subroutine, simple use the name of the subroutine in your main loop.  Try uploading the code to see if your robot moves forward.  If it doesn't, you'll need to modify the code.  Remember if one of the wheels is spinning the wrong way, you just need to flip the high/low on your motor pair (8,11 or 10, 12).

<img src="fig-7_1.png" alt="fig-6_0" style="zoom:100%;" class="image center block-based" />


```c
void forward() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
  digitalWrite(10,HIGH);
  digitalWrite(12,LOW);
}

void setup()
{
  pinMode(8,OUTPUT);
  pinMode(11,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(12,OUTPUT);
}

void loop()
{
  forward();
}
```
{:.text-based}

#### Practice #1: Move Forward and Backward

Using subroutines, create code that moves your car forward for a second, stops for a second, moves backwards for a second, stops for a second and then repeats.

<img src="fig-7_2.png" alt="fig-6_0" style="zoom:100%;" class="image center block-based" />




```c
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

void stop() {
  digitalWrite(8,LOW);
  digitalWrite(11,LOW);
  digitalWrite(10,LOW);
  digitalWrite(12,LOW);
}

void setup()
{
  pinMode(8,OUTPUT);
  pinMode(11,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(12,OUTPUT);
}

void loop()
{
  forward();
  delay(1000);
  stop();
  delay(1000);
  backward();
  delay(1000);
  stop();
  delay(1000);
}
```
{:.text-based}

#### Practice #2: Make more subroutines

Create the following subroutines and test them inside your main loop to make sure that they work

| Name        | Action                                         |
| ----------- | ---------------------------------------------- |
| *stop*      | Stops all motors                               |
| *rstop*     | Stops the right motor only                     |
| *lstop*     | Stops the left motor only                      |
| *left*      | Moves the left motor forward only              |
| *lbackward* | Move the left motor backward only              |
| *right*     | Moves the right motor forward only             |
| *rback*ward | Moves the right motor backward only            |
| *forward*   | Moves both the left and right motor forward.   |
| *backward*  | Moves both the left and right motor backwards. |
