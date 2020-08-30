---
layout: lesson
title: Lesson 1 &middot; Project Introduction
suggested_time: 10-15 minutes
---

### What Is Barnabas Rover?
<p align="center" markdown = "1">
<img align="center" src="fig-01_05.jpg" width="500">
</p>

The Barnabas Rover is robot car that is able to think and act on its own.  Builders will cover concepts such as circuits, coding, mechanics and sensors.  Recommended ages: 11+

### Project Materials

This project is done with robot parts that are readily available.  Parts needed include:

- 1 x 2WD Chassis 
- 2 x DC Geared Motors (pre-wired and strengthened with hot glue)
- 1 x LS9110S DC Driver
- 1 x Arduino-Compatible Uno
- 1 x USB Cable
- 1 x 7.5V Battery Holder for Arduino
- 12 x Male to Female Arduino Wires
- 5 x Male to Male Arduino Wires
- 1 x Mini Breadboard
- 4 x Resistors (470 Ohm, 4.7 kOhm)
- 1 x LED
- 1 x 4-Pin Button
- 2 x IR Sensor Modules
- 2 x Light Sensors (Photoresistors)
- 1 x Ultrasonic Sensor
- 1 x 3mm Screwdriver
- 5 x Double-Stick Foam

Need materials?  [Purchase the Barnabas Rover kit at our e-store](https://shop.barnabasrobotics.com/products/barnabas-rover-kit).  Classroom sets available.  Contact us at info@barnabasrobotics.com to inquire. 

### How To Use Our Learning Portal

This learning portal portal includes written instructions as well as videos.  Here are a few things that will be helpful for you as you begin.

#### Decide On Your Coding Style

A big part of the Barnabas Rover project includes creating code on the computer, which will be used to control your robot.  When creating code, you can choose between *block-based* coding and *text-based* coding.  

*Block-based* coding is an innovation in education that allows younger students to learn and experiment with the logic flow of computer coding without needing to type very much.  Code is creating by snapping commands together like puzzle pieces.

*Text-based* coding requires that every command in the code to be typed out explicitly.  The commands need to be spelled correctly and are case-sensitive (capitals and lower-case matters!).  This style is the popular method used within the software industry.  

Typically, we recommend block-based coding for ages 8-11 and text-based coding for ages 12 and up.  In our classes, we start younger students (ages 8-11) with block-based and eventually graduate them to text-based coding as they gain experience.

See below for examples of what block-based code looks like versus text-based code.

<p align="center" markdown = "1">
    Block-Based Code
</p>

<p align="center" markdown = "1">
<img align="center" src="fig-01_11.png" width="300">
</p>

<p align="center" markdown = "1">
    Text-Based Code
</p>

```c
void setup()
{
  pinMode( 2 , INPUT);
  pinMode( 7 , OUTPUT);

}

void loop()
{
  if (digitalRead(2) == HIGH) {
    digitalWrite(7,LOW);
  }
  else {
    digitalWrite(7,HIGH);
  }
}
```

If you're having trouble deciding which one, we recommend starting with blocks.  You can always transition to text-based code in the middle of the project if you choose to do so.

#### Set Your Coding Style

Once you've decided on your coding style, you need to make sure to set it on the learning portal so that you are able to view the correct content.  

##### 1. Click on the gear icon on the top right

<img src="fig-01_00.png" alt="fig-01_2" style="zoom:32%;" class="image center" />



##### 2. Click on the toggle button to switch modes

<img src="fig-01_01.png" alt="fig-01_01" style="zoom:40%;" class="image center" />



<img src="fig-01_02.png" alt="fig-01_02" style="zoom:48%;" class="image center" />



### Extra Resources

Some lessons include extra resources (videos, documents, etc.).  Scroll to the bottom of the page to find them.

<img src="fig-01_04.png" alt="fig-01_01" style="zoom:50%;" class="image center" />

### Navigate Between Lessons

After you finish a lesson, scroll to the bottom of the page and click "Next Lesson" to go to the next lesson.  

You can also go back to the previous lesson by clicking on "Prev Lesson".

<img src="fig-01_03.png" alt="fig-01_03" style="zoom:40%;" class="image center" />
