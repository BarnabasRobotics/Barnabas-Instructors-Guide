---

layout: lesson
title: Lesson 12 &middot; Line Following

suggested_time: 60-75 minutes  

videos:

---



### Overview

In this section we'll learn how to use IR sensors to get our robot to follow a line!

### What You'll Need

Before we get started, let's make sure that we have all the parts.

- 1 x Arduino Uno Compatible Board
- 2 x IR Sensor Modules
- 6 x Pin to Socket Arduino Wires
- 2 x Double-stick foam

#### IR Sensor Module 

<img src="ir module.jpg" alt="fig-3_4" style="zoom:50%;" class="image center" />

IR Sensor modules include two special LEDs.  One LED is a IR transmitter (the clear one) and the other is a IR receiver (the dark one).  

The transmitter sends a IR signal into the air.  While the IR travels through the air, it will bounce off of near by objects, sending IR back to the module.  The IR receiver looks for any IR signals that are bounced back and reports back to your robot if it does - which means that there is an object near by.  

There is a caveat here, though.  If IR hits black color, it won't bounce back because the black color absorbs the IR.  We can use this caveat to tell the different between white and black!  

Use two modules, and you now have the ability to cause the robot to follow a line!

#### Mounting Your Modules 

Mount your modules to the front bumper using double-stick foam.

<img src="rover (3).png" alt="fig-3_4" style="zoom:40%;" class="image center" />

#### Wire Your IR Modules

The IR modules have three pins: VCC, GND and OUT.  

VCC and GND provide power to the module.  OUT is the signal that goes to the controller board, which our code will look at to see whether we see white or black.

Let's wire the IR modules to your Arduino-Compatible board using the following connections.

| IR Module #1 Pin | Arduino-Uno Compatible Board |
| ---------------- | ---------------------------- |
| VCC              | 5V                           |
| GND              | GND                          |
| OUT              | 5                            |

| IR Module #2 Pin | Arduino-Uno Compatible Board |
| ---------------- | ---------------------------- |
| VCC              | 5V                           |
| GND              | GND                          |
| OUT              | 6                            |

#### Coding Your IR Modules

```c

int leftSensor = 5;
int rightSensor = 6;


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
  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);
}

void loop() {

    // 0: no line, 1: line
    int leftStatus = digitalRead(leftSensor); 
    int rightStatus = digitalRead(rightSensor);

    if (leftStatus == 0 && rightStatus == 0) {
      forward();
    }

    if (leftStatus == 0 && rightStatus != 0) {
      forwardLeft();
      backwardRight();
    }

    if (leftStatus != 0 && rightStatus == 0) {
      backwardLeft();
      forwardRight();
    }

    if (leftStatus != 0 && rightStatus != 0) {
      stop();
    }

}
```

### Demo Video

