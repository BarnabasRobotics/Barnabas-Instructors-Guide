---
layout: lesson
title: Lesson 9 &middot; Triggering Movement With Your Button

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/SHaALfbN5wc
      text: How To Control Your Motors Using A Button (Text-Code)
---

### Overview

In this section we will be programming our Barnabas Rover to trigger your code with your button

### Trigger Motion With Your Button

{% include youtube.html id='SHaALfbN5wc' %}

Since we have started to program our car to move, you may have noticed that at times your car starts moving before you're ready to test your code.  To make things a bit more convenient for us, we're going to add a bit of code so that you car doesn't begin its program until you press your button.  

In order to accomplish this, we're going to need to include button sensing into our code using IF/ELSE blocks.  Check out the code below!

NOTE: Previously we used a 10K resistor as a pull-up resistor to pull the voltage at the button to HIGH whenever the button is not pushed.  In the video above, we will learn about an internal pull-up resistor so that we can rewire our circuit and remove that 10K resistor.

```c
void setup() {
   
  //-Button Setup
  pinMode(2,INPUT_PULLUP);
  
  //-Control Motor B
  pinMode(10,OUTPUT);
  pinMode(12,OUTPUT);
   
  //-Control Motor A
  pinMode(8,OUTPUT);
  pinMode(11,OUTPUT);
  
}

void loop() {
  
  //-if I press the button, move motor A
  if ( digitalRead(2) == LOW ) {
    digitalWrite(8,LOW);
    digitalWrite(11,HIGH);
  }
  
  //-if I don't press the button, stop motor A
  if ( digitalRead(2) == HIGH ) {
    digitalWrite(8,HIGH);
    digitalWrite(11,HIGH);
  }
}
```
### Extra Challenges

<li>Get motor B to move when you press and stop when don't press</li>
<li>Get both motor A and B to move when you press and both to stop when you don't press</li>
<li>When you press, move both motors forward for 1 second and then stop.</li>
<li>When you press, move both motors backward for 1 second and then stop.</li>
<li>Place a piece of tape on your table then program your car to move right to the tape when you press the button.</li>