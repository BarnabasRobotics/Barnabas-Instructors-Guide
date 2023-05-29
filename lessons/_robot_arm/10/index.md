---
layout: lesson
title: Lesson 10 &middot; Code The Base Motor
suggested_time: 30-60 minutes
videos:
    - link: https://youtu.be/NFqWNfnIABY?t=1371
      text: Code The Base Motor
---

### Lesson Overview

- Program the base servo motor
- Calibrate the base servo motor 

### Tutorial Video

{% include youtube.html id='NFqWNfnIABY?t=1371' %}

#### Sample Code

```c
#include <Servo.h>

//- servos move half a circle 0-180 degrees.
Servo baseMotor;

//- runs only once when you turn on
void setup() {
  baseMotor.attach(6);
}


//- runs forever in a loop after setup
void loop() {
  
  baseMotor.write(0);
  delay(1000);
  baseMotor.write(180);
  delay(1000);
  
}
```



