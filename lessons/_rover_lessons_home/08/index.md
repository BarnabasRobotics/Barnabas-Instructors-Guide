---
layout: lesson
title: Lesson 8 &middot; Subroutines, Adding a Button & Basic Navigation

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/Zi0cBWEh6nM
      text: How to code Arduino DC Motor Drivers using functions and subroutines (Text-Code)
    - link: https://youtu.be/SHaALfbN5wc
      text: How To Control Your Motors Using A Button (Text-Code)
---

### Overview

In this section we will be programming our Barnabas Rover to do all the basic operations of navigation: move forward, move backwards and turn.  In order to d this, we'll need to cover:

- Subroutines
- Basic subroutines (forward, backward, turn)
- How to trigger your code with your button
- How to program your motor to move at different speeds

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



### Adding Your Button

Since we have started to program our car to move, you may have noticed that at times your car starts moving before you're ready to test your code.  To make things a bit more convenient for us, we're going to add a bit of code so that you car doesn't begin its program until you press your button.  

In order to accomplish this, we're going to need to use something called a while loop.  The while loop is like an if/else block.  How it works is: 

"Do what ever is inside the loop WHILE this thing is true"

So what we're going to do is tell it to do nothing WHILE the button is not pressed, and then jump out of the while loop once the button is pressed.  This is what it looks like in code.  Give it a try!

<div markdown = "1">

### Video Lesson - How to add button to control motor movement (Text-Code)

{% include youtube.html id='SHaALfbN5wc' %}

</div>{:.text-based}

<img src="fig-7_3.png" style="zoom:100%;" class="image center block-based" />

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
  backward();
  delay(1000);
  stop();
  delay(1000);
}
```
{:.text-based}

### Create A Turn

To create a turn, we'll need to:

1. Program on wheel to move forward while the other one is stopped.  
2. Determine how long we want the one wheel to turn before we stop it

See below for code that turns right, stops for 3 seconds and then turns left and stops for 3 seconds.  Try it out!  Remember that you need to push the button first before it moves because of the button code inside the while loop.

<img src="fig-7_4.png" style="zoom:100%;" class="image center block-based" />

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
  pinMode(2,INPUT);
}

void loop()
{
  while (digitalRead(2)==HIGH) {
     //- do nothing
  }
  rightTurn();
  delay(3000);
  leftTurn();
  delay(3000);
}
```
{:.text-based}

#### Challenge #1: Adjust The Turn Amount

Change the delay inside the subroutines to adjust how much it turns.

#### Challenge #2: Create Right Angle Turns

Change the delay inside the subroutines so that the left and right turns create exactly 90 degree turns.

#### Challenge #3: Adjust The Turn Direction

Change the low/high values to change the direction of the turn so that it turns backwards instead of forwards.

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

