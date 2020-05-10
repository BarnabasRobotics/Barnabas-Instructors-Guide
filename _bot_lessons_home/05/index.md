---
layout: lesson
title: Lesson 5 &middot; Introduction to Breadboards
suggested_time: 60-75 minutes

disciplines:
- "PS3.B: Conservation of Energy and Energy Transfer: Energy can also be transferred from place to place by electric currents, which can then be used locally to produce motion, sound, heat, or light. The currents may have been produced to begin with by transforming the energy of motion into electrical energy. (4-PS3-2),(4-PS3-4)"

### Science and Engineering Practices
- "Planning and Carrying Out Investigations: Make observations to produce data to serve as the basis for evidence for an explanation of a phenomenon or test a design solution. (4-PS3-2)"
- "Constructing Explanations and Designing Solutions: Apply scientific ideas to solve design problems. (4-PS3-4)"

### Cross-Cutting Concepts
- "Energy and Matter: Energy can be transferred in various ways and between objects. (4-PS3-1),(4-PS3-2),(4-PS3-3),(4-PS3-4)"
- "Science is a Human Endeavor: Science affects everyday life. (4-PS3-4)"

### Learning Target(s)
technical_skills:
- Further comprehension of basic electronics concepts from last lesson.
- Ability to utilize breadboard when building circuits.
- Understanding of the concept of resistance and the resistor.
- Ability to identify specific pins on Barnabas Noggin used to power circuits, and understanding the Barnabas Noggin’s use as a power source.
life_skills:
- Teamwork

essential_questions:
- How does the breadboard help us make circuits?
- How does one create a closed circuit on the breadboard?
- What is the purpose of the resistor in our circuit?
- Which of the two types of resistor is stronger? Is the LED dimmer or brighter with the stronger resistor.

vocab:
- Breadboard
- Schematic
- Resistor
- Ohm
- Arduino
- Current
- Amps


videos:
- link: https://youtu.be/BwVRfxDj0Pc
  text: Simple Breadboard LED
- link: https://youtu.be/5P-3rSK79Uo
  text: Build the 3V LED circuit with a breadboard
- link: https://youtu.be/QFm8Gkofgs8
  text: How a breadboard works
- link: https://youtu.be/iY3Ygg6Ucq0
  text: Build the 5V LED circuit
documents:
other:
- link: https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard
  text: Sparkfun Breadboarding Tutorial
- link: https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band
  text: Resistor color code calculator

depth:

barriers: 
- Minimal experience with household electronics.
- No working knowledge of electricity.
- Poor understanding of lesson 7.

anticipatory:
- Demonstrate a completed breadboard circuit without going over all the steps 
- Learn intermediate electrical engineering concepts.
- Introduce new components and use them to create circuits.

practice:
- Assembly of LED circuit using a breadboard with a partner. Time permitting, the assembly of a two LED circuit using a breadboard with three partners.
- Assembly of 5V LED circuit using breadboard, resistor, and Barnabas Noggin.


assessment:
- Comparison of 5V circuit with each type of resistor. Based on the behavior of the circuit which resistor is stronger? Defend your answer.
- Using Ohm’s Law, have each student calculate the current in their circuit with the resistor of their choice.
- The breadboard circuit is complete with a LED that is able to light up  

materials:
- Engineering Journal
- Mini Breadboard (x1)
- Jumper Wires
- AA batteries (x1 min2)
- AA battery holder(x1 min2)
- 3V LED (x1)
- Resistors  (470 Ohm - yellow violet brown gold and 4.7K Ohm - yellow violet red gold)

reflection:
  comprehension: 
  - What is the breadboard used for? How does the breadboard work?
  - What is resistance? How does resistance affect our circuit?
  - What part(s) of the robot does the Barnabas Noggin represent?
  mindset:
  - What does freedom mean to you?
  - Freedom to learn?  
  - Freedom to fail?  

---

### Review
   * How do open and closed circuits differ?
   * How does increasing voltage affect a circuit?


### Step 1: Introducing The Breadboard (15 minutes) 
In this lesson we are introduced to a very valuable tool, The breadboard. What is a breadboard?


A breadboard helps us connect our wires (analogous to blood vessels) together.  We can connect our wires to the holes in the breadboard to make secure connections without needing to tie the wires together.  This is useful, especially when we need to change the connections often.  This is common while engineers figure out how to best make their ideas happen. Draw a picture of the miniature breadboard on the whiteboard.  NOTE: You can use the 1-17 (rows) and A-J (columns) references to tell kids where to place wires as the lesson progresses.

![fig 9.1](empty_breadboard.png){:class="image "}

   * How many rows are there? (17)
   * How many columns are there? (2 sets of 5)

In a breadboard All the holes on each row of 5 are connected to each other. By connected I mean that any two things placed into the same row will be connected to each other. The breadboard helps us make closed circuits. Test the kids to see if they understand which holes connect to one another.

#### Vocabulary
   * **Breadboard**: A tool used to create circuits. The breadboard is able to connect two or more components together as if their were touching so long as they are on the same row.
   * **Component**: A single element of a circuit. Ex: battery, LED.

{% include youtube.html id="QFm8Gkofgs8" %}

{% include badge.html type="best_practice" content="It is important that the students have a good grasp of how the breadboard works. To ensure comprehension you can draw boxes around each set of holes that are connected on your whiteboard drawing. Another method would be to remove the adhesive from the back of a breadboard (I would suggest you use a spare for this rather than using a student’s) exposing the strips of metal underneath. This may help them understand why the breadboard works as it does." %}

### Step 2: Creating Our First Breadboard Circuit (15 minutes) 
Now that we understand how to use the breadboard we can recreate the 3V LED circuit from the last lesson. This time as a completely hands free circuit. Let’s start by recalling the schematic for that circuit.

![fig 9.2](fig-9_2.png){:class="image "}
  
To create the circuit using the breadboard you need to make the same exact connections as before. A helpful tip is that any two wires/legs that were held together in the previous circuit must now be in a row together. Not necessarily in the same hole though. Also, both ends of a component should never be in the same row together. That is the same as touching the two sides together which, in the case of the battery, creates a short circuit. They should end up with a circuit that looks similar to the one below.

![fig 9.3](fig-9_3.png){:class="image "}

![fig 9.4](fig-9_4.jpg){:class="image fit"}

{% include badge.html type="best_practice" content="Before asking the students to create the circuit, draw the schematic on the board. Then draw a breadboard. Enlist the aid of the students in drawing batteries and the LEDs, as well as placing them in the correct spots to create a complete circuit. Once finished, follow the path of the circuit with the class and ensure that the circuit is closed." %}

{% include badge.html type="troubleshoot" content="A common mistake is to put far too many connections on the same row of the breadboard. This is generally the most common reason a group’s circuit will not work. This is something you should keep an eye out for and simply remind students that only things should be in any row of the breadboard at once. Reminding them of their method of creating the circuit from last week’s lesson may also help, as this is essentially the same circuit." %}

### Step 3: Introducing The Barnabas Noggin and Resistance (20 minutes) 
For the first time we are now going to use the Barnabas Noggin to create a circuit. With the Noggin we will be powering the circuit with 5V instead of 3V. What do you think will happen when we increase the voltage? (The LED will be brighter, and we no longer need the AA batteries) In fact, the 5V is too much.  Ask what will happen if you push 5V through a 3V LED (it will burn out). Talk about what happens in our body if our heart (battery) pumps blood too fast through our veins (it may burst!).  Explain that the same thing happens in electronics, so to combat that, we need to slow the blood (current) down using a resistor.  Have the kids take out the 4.7K resistor (red band).  Explain that a resistor is the component, and that resistance is the value (4.7K or 4,700 in this case). Draw the following schematic.

![fig 9.5](fig-9_5.png){:class="image "}

Before asking the students to attempt building this circuit on their own guide them through placing wires in the Noggin. Have them place one end of a wire (preferably red) into the 5V pin located on the Noggin. Have them place one end of another wire (preferably black) into one of the GND pins located on the Noggin (there is more than one). The other ends of both wires are currently dangling free. These ends should be treated the same as the + and - ends of a battery. Now they should be ready to create the circuit below.

![fig 9.6](fig-9_6.png){:class="image fit"}

Plug the 9V battery into the jack on the Noggin and your LED should light up!

#### Vocabulary
   * **Barnabas Noggin**: The brain of our soon to be robot! The Barnabas Noggin houses the brain of the Barnabas bot. It also contains a large amount of internal circuitry, making it somewhat related to the robot’s heart as well. We will often treat the Noggin as a power source, as it can give us 5V, a voltage we are comfortable with.
   * **Resistance**: The difficulty of passing an electric current through an object. If an object is very difficult to pass current through, it has a high resistance.

{% include youtube.html id="iY3Ygg6Ucq0" %}

{% include badge.html type="troubleshoot" content="Sometimes your students' LEDs may burn out because of incorrect connections.  This is all part of the learning process.  We recommend having a working Arduino + breadboard setup that you can use to test to see if students' LEDs are in fact burned out or if there is perhaps another wiring issue." %}

{% include badge.html type="tidbit" content="Resistance, along with voltage and current are the three fundamental quantities in a circuit. In fact, there is an equation that relates all three of these inside of a circuit. The equation is known as Ohm’s Law V=IxR, where V is the voltage, R is the resistance, and I is the current. This simple equation gives us a very good understanding of the behavior of any circuit." %}

{% include badge.html type="activity" content="Have the students switch between the two different kind of resistors and observe the behavior of the LED as the resistor is changed. They should see the LED dim when the red banded resistor is in the circuit. This is the larger resistor. Because it is larger, it slows down current more, leading to the dimmer light." %}

{% include badge.html type="best_practice" content="It is always a good idea to have power disconnected from our circuit as we are constructing it, or making changes to it. In this case, even in the event of a short circuit, we will not damage any of our parts. It is best to build the circuit, check it for errors, then apply power." %}

{% include badge.html type="best_practice" content="Why is it important to color code wires? Color coding wires helps us both construct and troubleshoot our circuits. If I know that a certain color of wire always means a certain thing, it will be obvious when that wire is out of place" %}

### Step 4: Going Further With Resistance (15 minutes or as time permits)
You may have noticed the two different types of resistor that we have are differentiated based on the colors of their bands. As it turns out we can tell the exact strength of a resistor based on the color of those bands.

![fig 9.7 resistor table](resistor_table.png){:class="image fit"}

Let’s walk through this chart together. In the Numeric Value column we see that each color is given a number value associated with it. These numbers are only applied to the first two colored bands on a resistor. Those two numbers are combined into one 2 digit number. For example our 4,700 Ohm resistor has the colors yellow and violet as it’s first two color bands, in that order. From this we know that resistor’s value must start with the number 47, which we know it does. The third band on the resistor is the multiplier. We take the number denoted by the color of that band (in this case 100-red) and multiply that number and the 2 digit number from earlier together (47x100), giving us 4,700 Ohms. 


The fourth band on a resistor is what’s called it’s tolerance. Tolerance is the error that one can expect in the resistor. For example, a gold tolerance band on our 4,700 Ohm resistor tells us that it may not be exactly 4,700 Ohms, but we can expect it to be within 5% of that. So the resistor could be as small as 4,465 Ohms or as big as 4,935 Ohms. The last column in the table above is labelled Temperature Coefficient. We don’t need to worry about what that means, as it is only used in resistors with five bands or more.

{% include badge.html type="activity" content="Have the students come up with the color code for a resistor that has a strength of your choosing. If you would like, you can put the students in groups and give each group a different resistor value to work on." %}

### Step 5: Going Even Further With Resistance (5 minutes or as time permits)
With knowledge of Ohm’s law, we can calculate the current going through the circuit when either resistor is used. Ohm’s law (V=IR) can be rewritten as I=V/R \\(\frac{\Delta{V}}{R}\\). Both the voltage and the resistance are known to us so we can calculate current in both cases.
   * I=5/470 -> I=0.01 Amps (Amperes are the unit used to measure current)
   * I=5/4700 -> I=0.001 Amps

{% include badge.html type="tidbit" content="Not all resistors are 'Ohmic' resistors, as in ones that follow Ohm's laws. An Ohmic resistor always has the same resistance, where as a non Ohmic resistor has a fluctuating resistance based on some parameter. For example if you were to measure the resistance of a light bulb while it is off, you would measure a fairly low resistance. But if you turned the lightbulb on, the resistance would skyrocket due to how much hotter the lightbulb became. If non Ohmic resistors are used in simple circuits such as this one, some interesting effects can be created." %}

{% include badge.html type="best_practice" content="Do not dismantle the circuits at the end of this lesson. We will be building on these circuits for the rest of class and it would be convenient if we did not have to start from scratch each week. Just make sure that the students unplug their batteries before putting the circuits away." %}
