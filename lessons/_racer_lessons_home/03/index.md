---
layout: lesson
title: Lesson 3 &middot; Learn About Circuit Basics
suggested_time: 60-75 minutes
reflection:
    comprehension:   
      - Explain the role of resistors in circuits. 
videos:
    - link: https://youtu.be/er4kNM6rLvg
      text: Circuit Basics
    - link: https://youtu.be/QFm8Gkofgs8
      text: How A Breadboard Works
other:
    - link: https://components101.com/switches/push-button
      text: Push Button (Components 101)
---





### What You'll Need

Before we start, make sure that you have everything that you need for this lesson.

- 1 x Barnabas Noggin
- 1 x 9V Battery
- 1 x 9V Battery Holder
- 1 x LED
- 1 x Breadboard
- 1 x Pin-to-Pin Wires
- 1 x 4.7 kOhm Resistor
- 1 x 4-Pin Button

### Overview

In this lesson we will cover the basics of engineering.  Topics include:

- Circuits (Closed Circuit, Short Circuit, Open Circuit)
- Resistors
- Breadboarding
- Buttons

### Tutorial Video

{% include youtube.html id='er4kNM6rLvg' %}

### The Path Of Electricity

Let’s look at some basics of how electricity flows throughout your robot.  We’ll need to learn what a circuit is. A circuit can simply be defined as a pathway for electricity to flow.

#### Heart = Power source Blood = Electricity

Just as humans cannot live without a heart pumping blood to the brain and body parts, robots cannot turn on without a power source to supply electricity to its brain and other robot parts. 

#### Electricity Needs a Complete Loop to Travel

<img src="fig-5_2.png" alt="fig-5_2" style="zoom:20%;" class="image left" />

In our bodies, blood pumps out of the heart, into our body parts, and then loops back into the heart. This series of loops for blood to travel is called the human circulation system. The loops in our human body must be complete and unbroken. If there is a broken loop, then blood can’t reach the rest of our organs, and we wouldn’t be able to live.  

Electricity in robots works in a very similar way. For electricity to travel throughout your robot’s body, there needs to be a complete and unbroken loop for electricity to flow.  When the pathway of electricity creates a complete loop without any breaks, this is called a closed circuit.  A closed circuit in a robot allows it to power on. 

If a circuit does not create a complete loop or if the loop is broken, then electricity cannot flow.  This is called an open circuit because there is an opening in the circuit.  An open circuit in a robot will power the robot off or make it inoperable. 

<img src="fig-5_3.png" alt="fig-5_3" style="zoom:100%;" class="image center" />

During a closed-circuit, two things determine how your circuit behaves.  *Voltage* is the amount of power in your power source.  The higher the voltage, the faster the electricity moves.  The lower the voltage, the slower the electricity moves.

*Current* is the actual electricity moving through the circuit.  The higher the current, the higher the electricity.  The lower the current, the lower the electricity.

#### Vocabulary

- **Closed-circuit**: A closed-circuit is when there is a complete loop in your electrical system. In this case electricity can flow.
- **Open-circuit**: An open-circuit is when the loop is broken. In this case electricity cannot flow. The robot cannot live if we have an open circuit, much like how we cannot live if blood is not circulating through our bodies.
- **Current**: The flow of electricity in the circuit
- **Voltage**: Voltage is what creates current, or the flow of electricity through a circuit. A larger voltage will cause a faster flow of electricity through a circuit.

### The Breadboard

A breadboard helps us connect our wires (analogous to blood vessels) together.  We can connect our wires to the holes in the breadboard to make secure connections without needing to tie the wires together.  This is useful especially when we need to change the connections often, which is common as engineers figure out how to best make their ideas happen. 

<img src="empty_breadboard.png" alt="breadboard" style="zoom:75%;" class="image center" />

In a breadboard, all the holes on each row of 5 are connected to each other (see above).  This means that any two wires placed into the same row will be connected to each other.   Remember this as we'll be using this later to build circuits!

{% include youtube.html id='QFm8Gkofgs8' %}

### Building A Circuit Using Our Breadboard

<img src="fig-5_10.png" alt="fig-5_10" style="zoom:30%;" class="image right" />

We are now going to use the Barnabas Noggin to create our first circuit.  In this first circuit, we're going to be using the Barnabas Noggin (the green controller board) to provide 5 volts of power to turn on a LED.  

We do have to note that our LED is rated at 3 volts, which means that if we give it more than 3 volts, it can burn out.  Don't worry though, we can fix this by adding a resistor, which helps us slow down the flow of electricity in a circuit.  You have a few different types of resistors in your kit.  Grab the one that has a red stripe on it.  This is the 4.7K Ohm (or 4,700 Ohm) resistor.

Take a look at the diagram below to see how everything needs to be connected.  The 5V and 3-lined triangle (also known as GND or Ground) will come from the Barnabas Noggin.  They are like the + and - of a battery.  If created correctly, current will flow from the 5V, through the resistor and LED, into the GND and back up to the 5V - creating a closed circuit.

<img src="fig-9_5.png" alt="fig-9_5" style="zoom:100%;" class="image center" />

Follow the wiring diagram below to see to create this circuit.  A few notes:

- Breadboard fact: If holes are on the same row BUT on opposite sides of the middle valley, the are NOT connected.
- Breadboard fact: If holes are on the same row AND on the same side of the middle valley, they ARE connected.
- The longer leg of the LED is + and the short leg of the LED is -.
- Electrical engineers typically use red for power connections.  Use a red wire for the 5V connection!
- Electrical engineers typically use black for ground connections.  Use a black wire for the GND connection!

![fig 9.6](fig-9_6.png){:class="image fit"}

Plug in the 9V battery into the jack on the Noggin and your LED should light up!  

#### Vocabulary

   * **Barnabas Noggin**: The brain of our soon to be robot! The Barnabas Noggin houses the brain of the Barnabas bot. It also contains a large amount of internal circuitry, making it somewhat related to the robot’s heart as well. We will often treat the Noggin as a power source, as it can give us 5V, a voltage we are comfortable with.
   * **Resistor**: An electrical component that slows down or resists the current in a circuit.
   * **Resistance**: The difficulty of passing an electric current through an object. The higher the resistance, the more it resists electricity.  It is measured in Ohms.

{% include badge.html type="tidbit" content="Resistance, along with voltage and current are the three fundamental quantities in a circuit. In fact, there is an equation that relates all three of these inside of a circuit. The equation is known as Ohm’s Law V=IxR, where V is the voltage, R is the resistance, and I is the current. This simple equation gives us a very good understanding of the behavior of any circuit." %}

{% include badge.html type="activity" content="Switch between the three different kind of resistors and observe the behavior of the LED as the resistor is changed. You should see the LED brighten when the non-red banded resistor is in the circuit. This is the smallest resistor (470 Ohms). Because it is smaller, it allows current to move faster, leading to a brighter light." %}

{% include badge.html type="best_practice" content="Why is it important to color code wires? Color coding wires helps us both construct and troubleshoot our circuits. If I know that a certain color of wire always means a certain thing, it will be obvious when that wire is out of place" %}

### Giving A Robot Senses

#### Outputs vs. Inputs

In the introductory [Barnabas-Bot project](https://shop.barnabasrobotics.com/collections/kits-1/products/barnabas-bot-kit), we used a LED, buzzer and motor.  These are considered *output* components, meaning that they need to get a signal *from* the robot's brain to work. 

In this section, we'll be introduced to *input* components, which send a signal **to** the robot's brain. Inputs (also known as sensors) will give our robot information about the world around it.

{% include badge.html type="tidbit" content="Think of our human senses (touch, see, feel, smell and taste).  They all come together as inputs so that our brain can use them to help us interact with the world around us." %}

#### Touch

We're going to introduce our first *sense* or *input* to our robot, specifically the *touch* sense.  In other words, your robot will be able to *feel* when something touches it.  We'll be using a **button** component to accomplish this.  We'll have to connect the button to the brain, heart and personality in order to make this all work.  Let's get started!

### Button Basics

<img src="fig-3_7.jpg" style="zoom:100%;" class="image center" />

We are going to be using a 4-pin button.  The diagram below shows how it works.  Notice that the legs are connected in pairs.  - 

- When the button is pressed, the two leg pairs are connected.
- When the button is not pressed, the two leg pairs are disconnected.

Keeping this behavior in mind, we can use the button to control the opening and closing of a circuit.  

<img src="Push-button-Pinout.gif" style="zoom:100%;" class="image center" />

<p align="center">https://components101.com/switches/push-button</p>

### A Simple Button Circuit

Let's now connect our button to our brain (Barnabas Noggin) so that it can turn a light on and off.   The diagram of the circuit that we need to build is shown below.

<img src="fig-3_1.png" alt="fig-3_1" style="zoom:70%;" class="image center" />

Follow the diagram below to make sure that you build it correctly.  

{% include badge.html type="tidbit" content="Make sure that your LED is connected the right way (long leg connected to 5V, short leg connected to the button).  If you need a refresher on LEDs, review <a href="https://lessons.barnabasrobotics.com/bot_lessons_home/05/index.html"> Barnabas-Bot: Lesson 5</a>" %}

Once you are done, power up the Barnabas Noggin with the 9V battery and test your button circuit.  Your LED should only turn on if you push the button down.  If it's not working correctly, double check your connections!  

<img src="fig-3_3.png" alt="fig-3_3" style="zoom:50%;" class="image center" />

### Bonus Activity: Going Further With Resistance

You may have noticed the two different types of resistor that we have are differentiated based on the colors of their bands. As it turns out we can tell the exact strength of a resistor based on the color of those bands.

<img src="resistor_table.png" alt="resistor_table" style="zoom:90%;" class="image right" />

Let’s walk through this chart together. In the Numeric Value column we see that each color is given a number value associated with it. These numbers are only applied to the first two colored bands on a resistor. Those two numbers are combined into one 2 digit number. For example our 4,700 Ohm resistor has the colors yellow and violet as it’s first two color bands, in that order. From this we know that resistor’s value must start with the number 47, which we know it does. The third band on the resistor is the multiplier. We take the number denoted by the color of that band (in this case 100-red) and multiply that number and the 2 digit number from earlier together (47x100), giving us 4,700 Ohms. 


The fourth band on a resistor is what’s called it’s tolerance. Tolerance is the error that one can expect in the resistor. For example, a gold tolerance band on our 4,700 Ohm resistor tells us that it may not be exactly 4,700 Ohms, but we can expect it to be within 5% of that. So the resistor could be as small as 4,465 Ohms or as big as 4,935 Ohms. The last column in the table above is labelled Temperature Coefficient. We don’t need to worry about what that means, as it is only used in resistors with five bands or more.

{% include badge.html type="activity" content="Have the students come up with the color code for a resistor that has a strength of your choosing. If you would like, you can put the students in groups and give each group a different resistor value to work on." %}

### Bonus Activity: Going Even Further With Resistance

With knowledge of Ohm’s law, we can calculate the current going through the circuit when either resistor is used. Ohm’s law (V=IR) can be rewritten as I=V/R \\(\frac{\Delta{V}}{R}\\). Both the voltage and the resistance are known to us so we can calculate current in both cases.

   * I=5/470 -> I=0.01 Amps (Amperes are the unit used to measure current)
   * I=5/4700 -> I=0.001 Amps

{% include badge.html type="tidbit" content="Not all resistors are 'Ohmic' resistors, as in ones that follow Ohm's laws. An Ohmic resistor always has the same resistance, where as a non Ohmic resistor has a fluctuating resistance based on some parameter. For example if you were to measure the resistance of a light bulb while it is off, you would measure a fairly low resistance. But if you turned the lightbulb on, the resistance would skyrocket due to how much hotter the lightbulb became. If non Ohmic resistors are used in simple circuits such as this one, some interesting effects can be created." %}

{% include badge.html type="best_practice" content="Do not dismantle the circuits at the end of this lesson. We will be building on these circuits for the rest of class and it would be convenient if we did not have to start from scratch! Just make sure to unplug your battery before putting the circuits away." %}