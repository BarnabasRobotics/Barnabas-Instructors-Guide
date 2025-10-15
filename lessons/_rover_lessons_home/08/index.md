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

### How to code Arduino DC Motor Drivers using functions and subroutines

{% include youtube.html id='Zi0cBWEh6nM' %}

### Creating A Subroutine

To create a subroutine is to create a little sub-program within your code.  Take a look at the code below where we create a subroutine that moves motor A forward.  Notice that the name of the subroutine matches what it does.  This way it is easy to keep track what our subroutines do.

```c
void motorAForward() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
}
```

### Calling A Subroutine

To call a subroutine, simple use the name of the subroutine in your main loop.  Try uploading the code to see if your robot moves forward.  If it doesn't, you'll need to modify the code.  Remember if one of the wheels is spinning the wrong way, you just need to flip the high/low on your motor pair (8,11 or 10, 12).

```c
void setup() {
  
  //-Control Motor B
  pinMode(10,OUTPUT);
  pinMode(12,OUTPUT);
    
  //-Control Motor A
  pinMode(8,OUTPUT);
  pinMode(11,OUTPUT);

}

void motorAForward() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
}

void loop() {
  motorAForward();
}
```

### Practice #1: Move Forward and Backward

Using subroutines, create code that moves your motor A forward for a second, stops for a second, moves backwards for a second, stops for a second and then repeats.

```c
void setup() {
  
  //-Control Motor B
  pinMode(10,OUTPUT);
  pinMode(12,OUTPUT);
    
  //-Control Motor A
  pinMode(8,OUTPUT);
  pinMode(11,OUTPUT);
    
}

void motorABackward() {
  digitalWrite(8,HIGH);
  digitalWrite(11,LOW);
}

void motorAForward() {
  digitalWrite(8,LOW);
  digitalWrite(11,HIGH);
}

void motorAStop() {
  digitalWrite(8,HIGH);
  digitalWrite(11,HIGH);
}

void loop() {
  motorAForward();
  delay(1000);
  motorAStop();
  delay(1000);
  
  motorABackward();
  delay(1000);
  motorAStop();
  delay(1000);
}
```

### Additional Challenges

- Create motorBForward, motorBBackward functions that move and stop motor B.  Test to make sure that they work.
- Create forward, backward and stop functions that move and stop both motors. Test to make sure that they work.
- Using functions, create a program that goes forward 24", wait 1 second, then goes backwards 12", wait 1 second, and then goes forward 20".  The entire sequence should be triggered when you press your button.