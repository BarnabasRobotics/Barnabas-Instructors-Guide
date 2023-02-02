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
