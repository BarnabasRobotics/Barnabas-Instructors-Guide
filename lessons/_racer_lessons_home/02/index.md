---
layout: lesson
title: Lesson 2 &middot; Inputs with Variables

suggested_time: 60-75 minutes  

disciplines:
    - "Define a simple design problem that can be solved through the development of an object, tool, process, or system and includes several criteria for success and constraints on materials, time, or cost. (3-5-ETS1-1)"
    - "Connections to Engineering, Technology, and Applications of Science: Influence of Engineering, Technology, and Science on Society and the Natural World Engineers improve existing technologies or develop new ones. (4-PS3-4)"

videos:
    - link: https://youtu.be/u_sgzyL4H04
      text: Variables and Serial Monitor
documents:
    - link: https://docs.google.com/document/d/1njrwHVSLKPP6TWMX1Z0ioinAXKJz24Rvrhr5yOWntRA/edit
      text: Inputs With Variables + Reading The Values
    - link: https://docs.google.com/document/d/1qOQdq6A_5UGRDv5YxJ_P7kcFElL1LGZeSfDEQy_q-ho/edit
      text: Serial Monitor - Text Based Coding
---

#### Review
   * Previous week  
   * Critical thinking based on previous question

### Step 1: Getting The Input Value Into A Variable
A variable is like a bucket that stores information.  A variable has a name, which is the name of the bucket, and it also has a value, which is the stuff that is inside the bucket.

The program below creates a variable named "button", and it sets it the value "1" if the button is pushed, and "0" if the button is not pushed.

Study the program below to make sure that you understand how it works.

![fig 4.1](fig-4_1.png){:.image .block-based}

```c
int button = 0 ;

void setup()
{
  pinMode( 2 , INPUT);
  pinMode( 7 , OUTPUT);
}

void loop()
{
  if (digitalRead(2) == HIGH)
  {
    digitalWrite( 7 , LOW );
    button = 0;
  }
  else
  {
    digitalWrite( 7 , HIGH );
    button = 1;
  }
}
```
{:.text-based}

### Step 2: Displaying The Variable On The Serial Monitor

Now we will display our variable to the screen.  We do this by using `serial println`.

![fig 4.2](fig-4_2.png){:.image .block-based}

```c
int button = 0 ;

void setup()
{
  pinMode( 2 , INPUT);
  pinMode( 7 , OUTPUT);
  Serial.begin(9600);  
}

void loop()
{
  if (digitalRead(2) == HIGH)
  {
    digitalWrite( 7 , LOW );
    button = 0;
  }
  else
  {
    digitalWrite( 7 , HIGH );
    button = 1;
  }
  Serial.print("The button is: ");
  Serial.print(button);
  Serial.println();
  delay(500);
}
```
{:.text-based}

Once you upload the code, click on "Serial Monitor" to see your data displayed!

### Step 3: Customizing Your Message
Modify the message so that it says "the button status is: _____". 

![fig 4.3](fig-4_3.png){:.image .block-based }

{% include youtube.html id='u_sgzyL4H04' %}{:.block-based}
[Variables and Serial Monitor](https://youtu.be/u_sgzyL4H04){:.block-based}

#### Challenges
Now that you know how to store input values and display them, try the following challenges!
- Display your robot's name on the screen
- Display on the screen whether the light is on or off.  Display "YES" for on and "NO" for off.  If programmed correctly, the message should change whenever you push the button.
- *Advanced* Create a program so that your Arduino can display the total number of times the button has been pressed.  It should keep counting higher each time you press the button.

{% include badge.html type='suggestion' content='Student had idea to add light sensor, photo sensor and sound sensor. The buzzer can be modified to be used as a sound sensor' %}
