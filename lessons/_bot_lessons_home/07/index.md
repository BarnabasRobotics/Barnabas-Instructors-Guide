---
layout: lesson
title: Lesson 7 &middot; Blinking in Code
suggested_time: 60-75 minutes

disciplines:
- "ETS1.B: Developing Possible Solutions: At whatever stage, communicating with peers about proposed solutions is an important part of the design process, and shared ideas can lead to improved designs. (3-5-ETS1-2)"
- "Tests are often designed to identify failure points or difficulties, which suggest the elements of the design that need to be improved. (3-5-ETS1-3)"
- "ETS1.C: Optimizing the Design Solution: Different solutions need to be tested in order to determine which of them best solves the problem, given the criteria and the constraints. (3-5-ETS1-3)"
- "At whatever stage, communicating with peers about proposed solutions is an important part of the design process, and shared ideas can lead to improved designs. (3-5-ETS1-2)"
- "Science is a Human Endeavor: Most scientists and engineers work in teams. (4-PS3-4)"
### Science and Engineering Practices
- "Constructing Explanations and Designing Solutions: Generate and compare multiple solutions to a problem based on how well they meet the criteria and constraints of the design problem. (3-5-ETS1-2)"

technical_skills:
- Knowledge of how morse code functions.
- Understanding of how to condense code.
- Improved understanding of how code is executed block by block.
life_skills:
- Communicating
- Planing
- Testing
- Altering a hypothesis

essential_questions: 
- What is morse code? How does one communicate using morse code?
- How can we condense our code to make blinking in morse code easier to achieve.
- Does your code vary the time the LED spends off? Why or why not?

vocab:
- Repeat
- Morse Code
#- Sequence (morse code)
#- Period (duration)

videos:
documents:
other:
- link: https://upload.wikimedia.org/wikipedia/commons/b/b5/International_Morse_Code.svg
  text: Morse Code Browser Cheat Sheet
- link: https://drive.google.com/open?id=1liBuEK5mu3E04ymCv_On7b9cEDAkBJO1
  text: Morse Code PDF

depth:
- "Level 1:  Recall and Reproduction"
- "Level 2:  Skills and Concepts"
- "Level 3:  Strategic Thinking and Reasoning"
- "Level 4:  Extended Thinking"

barriers: 
- Understanding the pauses necessary in coding  
- Correct breadboard set up to power LED  

anticipatory:
- We will create and decode a message using Morse Code by using coding skills in ArduBlock.  
- Demonstrate a simple pre-coded flashing LED with a Morse Code message (ie. S-O-S!) and ask students to decode it using the Morse Code decoder  

practice:
- Student practicing different letters to code.  

assessment:
- Student has a completed, decodable message.  
- Is the breadboard correct to light up LED  

materials:
- USB to mini cable (x1)
- 3V LED (x1)
- Jumper wires
- Resistors (470 Ohm - yellow violet brown gold and 4.7K Ohm - yellow violet red gold)
- Mini breadboard (x1)
- Computer (x1)
- Engineering Journal (x1)
- Pencil (x1)



reflection:
  comprehension: 
  - What i morse code? How is morse code communicated?
  - When making blinks of different speeds, how does not changing the delay after turning the LED off benefit us?
  - Describe how the repeat block helps us create code?
  - What is the importance of precision in coding?
---

### Review
   * What block is used to turn the LED on and off.
   * How is the delay block important in getting the LED to visibly blink?

### Step 1: Blinking At Different Speeds (25 minutes) 
We spent last week learning to blink our LEDs and playing with the speed at which it blinks. We are going to pick up where we left off by using the skills learned last week. The first challenge of this lesson is to create a program that causes the LED to blink at two distinct speeds. It will be on for a long period of time (long as in about a second), then off, then on for a short period of time, then off. 


How should our code from last week, the blinking light code, be altered to accomplish this? Well we need to first understand we will need two different blinks, and will therefore need more blocks. If we stick to the status quo of four blocks in our code we will be limited to only one of the two behaviors; either the fast blink or the slow blink.
  
![fig 11.1](fig-11_1.png){:class="image "}
One blink
![fig 11.2](fig-11_2.png){:class="image "}
Two blinks
	
In the example on the right we have enough blocks to create two distinctly different blinks, however at the moment the code on the right and the code on the left behave identically. Why is that?

The right hand code may have enough blocks for two blinks but currently all of the delay blocks have the default value of 1000. So in either code every blink we see will be the same length of time. In order to vary the blink speeds we need to alter the value of one or more of the delay blocks. The question is which delays need to be altered? Let’s have a look at the code below:
  
![fig 11.3](fig-11_3.png){:class="image "}

You can see here that the first two delays are kept at the same value, and the last two delays are kept at the same value. They are separated into two blinks, each with their own specific delay. There is a small problem with this code however, which will be apparent as you watch the LED. The second blink, in particular the low part of it, is short enough that the blink becomes hard to distinguish from the longer blink. This can be solved by making sure that the delays after set digital pin LOW blocks are equal in value, like in the example below:

![fig 11.4](fig-11_4.png){:class="image "}  

With the delays set at these values both blinks will be clearly visible as separate blinks and it will be clear that one is longer than the other.

### Step 2: What Is Morse Code (10 minutes) 
In order to accomplish this lessons challenge we first need to understand morse code. Both what morse code is as well as how it is used. Morse code is essentially an alternate way of producing the alphabet using an assortment of dots and dashes to represent any one letter. A message in morse code is usually conveyed through either light or sound rather than just on paper. At this point I’d like you to look at the morse code PDF located here as well as in the additional resources section at the top of the lesson. This is a resource that you should consider distributing to your students.


That PDF does ask that the short and long blinks be timed in a different manner. It asks for significantly shorter blinks in both cases, which would look like the following:

![fig 11.5](fig-11_dot.png){:class="image "}
Short blink. A dot.
	  
![fig 11.6](fig-11_dash.png){:class="image "}
Long blink. A dash.
	
In addition the morse code pdf gives us rules for ending letters and ending words. We are told to have a 1000 millisecond delay at the end of a letter and a 2000 millisecond delay at the end of a word. This helps us interpret the morse code message a little easier, as we can better distinguish between individual letters and words.

#### Vocabulary
   * **Morse Code**: A method of transmitting information as a series of on-off tones, lights, or clicks that can be interpreted by a skilled observer without the use of equipment.

### Step 3: Our First Morse Code Message (20 minutes) 
Morse code is probably most commonly known as as an emergency method of communication, with the most commonly known message being S-O-S (help). This will be the first message we try to create using the LED. It is actually one of the easiest messages to create in morse code as S is represented by three dots, and O is represented by three dashes. Because both S and O are defined with repetitive signals it would be best for me to introduce a new block.


The repeat block can be found in the control tab. It is the first of the three repeat blocks seen, the others being repeat and count, and repeat between. This block behaves somewhat like the loop do in that other blocks can be placed inside it. There is a small integer block attached to it, much like the other blocks we have used thus far, which can have its value changed. That number will dictate how many times the code within the repeat block will run before further blocks in your code are. Take a look at the example below:
  
![fig 11.7](fig-11_7.png){:class="image "}

This code will blink fast three times before waiting a second, then starting over. Based on what we already know, this code creates the message S-S-S-S-S….. 

Putting together the rest of the S-O-S code should be easy to accomplish. We just need to add three long blinks, followed by three more short blinks, with the appropriate delays in between.
  
![fig 11.8](fig-11_8.png){:class="image "}

Notice that the last delay is for 2000 milliseconds (2 seconds). This is appropriate if we consider S-O-S to be a word.
#### Vocabulary
   * **Repeat**: The repeat block, like the loop block, can have other blocks placed within it. Any blocks within the repeat block will be run a number of times equal to the integer that innately comes with the block. Afterwards, subsequent blocks of the code will be run as expected.

{% include badge.html type='activity' content='Have the students attempt custom messages in morse code, such as their name, and see if other students can decipher them.' %}