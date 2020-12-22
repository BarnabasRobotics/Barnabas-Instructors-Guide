---
layout: lesson
title: Lesson 11 &middot; Program Your Car To Avoid Obstacles

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/fgngci1Lno4
      text: Stop Before You Crash (Block-based)
    - link: https://youtu.be/qRF44RI5khk
      text: Finishing Touches On Ultrasonic Code (Block-based)

---



### Overview

In this section we'll combine everything to program our car to move and avoid objects

### Stop Before We Crash

Let's program that car to stop before we hit a wall!  Let's use what we have learned about the ultrasonic sensor to program our robot to do this.  We'll need to use if/else.

![fig 15.3](fig-15_3.png){:.image .block-based}

{% include youtube.html id='fgngci1Lno4' %}{:.block-based}
```c
int trig = 3;
int echo = 4;
int led = 7;

// float so that we can handle decimals
float speedOfSoundMetersPerSec = 343;
float duration_microSeconds;
float duration_seconds;
float distance_meters;
float distance_cm;

void setup() {
  // put your setup code here, to run once:

  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  pinMode(led, OUTPUT);

  Serial.begin(9600);

  pinMode(8, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(2, INPUT);
}

float ultrasonic() {
  // reset the ultrasonic sensor
  digitalWrite(trig, LOW);
  delayMicroseconds(5);

  // send a 10 microsecond pulse out through the trigger
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  // wait for the response and store it in duration.  It will return in microseconds.
  duration_microSeconds = pulseIn(echo, HIGH);

  // convert duration to seconds
  duration_seconds = duration_microSeconds / 1000000;

  // get distance traveled in meters.  distance = (speed * time)/2
  distance_meters = (speedOfSoundMetersPerSec * duration_seconds) / 2;

  // convert to cm
  distance_cm = distance_meters * 100;

  return distance_cm;
}


void forward() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
}

void backward() {
  digitalWrite(8, HIGH);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, HIGH);
}

void rightTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void leftTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void stop() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
}

void loop()
{
  //- wait for button press before doing anything
  while (digitalRead(2) == HIGH) {
    //- do nothing
  }
  
  //- loop here forever after the button is pressed
  while (true) {
    if (ultrasonic() < 20) {
      stop();
    }
    else {
      forward();
    }
  }
}
```
{:.text-based}

### Turn Before We Crash

Let's program our car to not only stop before we hit a wall, but also turn to avoid it!


Let's program the robot to turn right if it sees an object less than 20 cm away, else move forward.   See the code below.


![fig 15.5](fig-15_5.png){:.image .block-based}
```c
int trig = 3;
int echo = 4;
int led = 7;

// float so that we can handle decimals
float speedOfSoundMetersPerSec = 343;
float duration_microSeconds;
float duration_seconds;
float distance_meters;
float distance_cm;

void setup() {
  // put your setup code here, to run once:

  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  pinMode(led, OUTPUT);

  Serial.begin(9600);

  pinMode(8, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(2, INPUT);
}

float ultrasonic() {
  // reset the ultrasonic sensor
  digitalWrite(trig, LOW);
  delayMicroseconds(5);

  // send a 10 microsecond pulse out through the trigger
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  // wait for the response and store it in duration.  It will return in microseconds.
  duration_microSeconds = pulseIn(echo, HIGH);

  // convert duration to seconds
  duration_seconds = duration_microSeconds / 1000000;

  // get distance traveled in meters.  distance = (speed * time)/2
  distance_meters = (speedOfSoundMetersPerSec * duration_seconds) / 2;

  // convert to cm
  distance_cm = distance_meters * 100;

  return distance_cm;
}


void forward() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
}

void backward() {
  digitalWrite(8, HIGH);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, HIGH);
}

void rightTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void leftTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void stop() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
}

void loop()
{
  //- wait for button press before doing anything
  while (digitalRead(2) == HIGH) {
    //- do nothing
  }

  //- loop here forever after the button is pressed
  while (true) {
    if (ultrasonic() < 20) {
      rightTurn();
      delay(400);
    }
    else {
      forward();
    }
  }
}
```
{:.text-based}

Note: The 400 ms delay after the right subroutine determines how long it will turn right for before moving on to the next section of code.  

### Adding Delays 

Let's add some delays into our code to increase our performance.

1. Adding a 500 ms delay after the while loop will give us time to remove our hand from the robot after pressing it.  This is to help prevent us from accidently bumping the robot off its course.
2. Adding a 20 ms delay after the forward subroutine adds a little time for the code to rest before it loops back to the ultrasonic part of the code.  Without the rest, the ultrasonic sensor may malfunction from time to time by getting overloaded by requests.

![fig 15.6](fig-15_6.png){:.image .block-based}

```c
int trig = 3;
int echo = 4;
int led = 7;

// float so that we can handle decimals
float speedOfSoundMetersPerSec = 343;
float duration_microSeconds;
float duration_seconds;
float distance_meters;
float distance_cm;

void setup() {
  // put your setup code here, to run once:

  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  pinMode(led, OUTPUT);

  Serial.begin(9600);

  pinMode(8, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(2, INPUT);
}

float ultrasonic() {
  // reset the ultrasonic sensor
  digitalWrite(trig, LOW);
  delayMicroseconds(5);

  // send a 10 microsecond pulse out through the trigger
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  // wait for the response and store it in duration.  It will return in microseconds.
  duration_microSeconds = pulseIn(echo, HIGH);

  // convert duration to seconds
  duration_seconds = duration_microSeconds / 1000000;

  // get distance traveled in meters.  distance = (speed * time)/2
  distance_meters = (speedOfSoundMetersPerSec * duration_seconds) / 2;

  // convert to cm
  distance_cm = distance_meters * 100;

  return distance_cm;
}


void forward() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
}

void backward() {
  digitalWrite(8, HIGH);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, HIGH);
}

void rightTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void leftTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void stop() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
}

void loop()
{
  //- wait for button press before doing anything
  while (digitalRead(2) == HIGH) {
    //- do nothing
  }
  delay(500);

  //- loop here forever after the button is pressed
  while (true) {
    if (ultrasonic() < 20) {
      rightTurn();
      delay(400);
    }
    else {
      forward();
      delay(20);
    }
  }
}
```
{:.text-based}

### Improving Our Ultrasonic Sensor's Performance 

As your robot's battery gets drained, it's a known issue that the ultrasonic sensor will begin responding with 0 even when there is something in front of it.  We can actually take care of this through code by ignoring 0 values.  The AND block helps us do this.

![fig 15.8](fig-15_8.png){:.image .block-based}

Note: In the code above, the robot will turn right ONLY if the ultrasonic sensor sees a value that is less than 20 AND it's not 0.  
```c
int trig = 3;
int echo = 4;
int led = 7;

// float so that we can handle decimals
float speedOfSoundMetersPerSec = 343;
float duration_microSeconds;
float duration_seconds;
float distance_meters;
float distance_cm;

void setup() {
  // put your setup code here, to run once:

  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  pinMode(led, OUTPUT);

  Serial.begin(9600);

  pinMode(8, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(2, INPUT);
}

float ultrasonic() {
  // reset the ultrasonic sensor
  digitalWrite(trig, LOW);
  delayMicroseconds(5);

  // send a 10 microsecond pulse out through the trigger
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  // wait for the response and store it in duration.  It will return in microseconds.
  duration_microSeconds = pulseIn(echo, HIGH);

  // convert duration to seconds
  duration_seconds = duration_microSeconds / 1000000;

  // get distance traveled in meters.  distance = (speed * time)/2
  distance_meters = (speedOfSoundMetersPerSec * duration_seconds) / 2;

  // convert to cm
  distance_cm = distance_meters * 100;

  return distance_cm;
}


void forward() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
}

void backward() {
  digitalWrite(8, HIGH);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, HIGH);
}

void rightTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, HIGH);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void leftTurn() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, HIGH);
  digitalWrite(12, LOW);
  delay(300);
  stop();
}

void stop() {
  digitalWrite(8, LOW);
  digitalWrite(11, LOW);
  digitalWrite(10, LOW);
  digitalWrite(12, LOW);
}

void loop()
{
  //- wait for button press before doing anything
  while (digitalRead(2) == HIGH) {
    //- do nothing
  }
  delay(500);

  //- loop here forever after the button is pressed
  while (true) {
    if ((ultrasonic() < 20) && (ultrasonic() != 0)) {
      rightTurn();
      delay(400);
    }
    else {
      forward();
      delay(20);
    }
  }
}
```
{:.text-based}

{% include youtube.html id='qRF44RI5khk' %}{:.block-based}
