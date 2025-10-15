---
layout: lesson
title: Lesson 14 &middot; Program Your Car To Avoid Obstacles

suggested_time: 60-75 minutes  

videos:
    - link: https://youtu.be/pMzp3fG5EeM?t=2047
      text: Math behind ultrasonic code for Arduino, Stopping Robot At A Wall 2WD (Text-Based)
---



### Overview

In this section we'll combine everything to program our car to move and avoid objects

### Stopping Your Robot At A Wall

{% include youtube.html id='pMzp3fG5EeM?t=2047' %} 

Note: This uses pins 4 and 5 for trigger and echo connections, respectively.

### Stop Before We Crash

Let's program that car to stop before we hit a wall!  Let's use what we have learned about the ultrasonic sensor to program our robot to do this.  We'll need to use if/else.

```c
int motb_pin1 = 3;
int motb_pin2 = 11;

int mota_pin1 = 9;
int mota_pin2 = 10;

int button_pin = 2;

int trig_pin = 4;
int echo_pin = 5;

void setup() {
  //-Control Motor B
  pinMode(motb_pin1,OUTPUT);
  pinMode(motb_pin2,OUTPUT);
  
  //-Control Motor A
  pinMode(mota_pin1,OUTPUT);
  pinMode(mota_pin2,OUTPUT);
  
  //- button
  pinMode(button_pin,INPUT_PULLUP);
  
  //-ultrasonic pin
  pinMode(trig_pin,OUTPUT);
  pinMode(echo_pin,INPUT);
  
  Serial.begin(9600);
  
}

//-sends sound out and receives sound
//-returns the distance in centimeters
int ultrasonic() {
  long time;
  float distance;
 
  //-trigger a sound 
  // send out trigger signal
  digitalWrite(trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(trig_pin, HIGH);
  delayMicroseconds(20);
  digitalWrite(trig_pin, LOW);
  
  //- a sound has gone out!!
  //- wait for a sound to come back
  
  time = pulseIn(echo_pin, HIGH);
  
  //- calculate the distance in centimeters
  distance = 0.01715 * time;
  return distance;
}

//- turn 90 degrees
void turnRight() {
  //- motor b is stopped
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);
  
  //- motor a moves forward
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,0);
  
  delay(600);
  
  //- stop motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);
}

void turnLeft() {
  //- motor a is stopped
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);
  
  //- motor b moves forward
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,255);
  
  delay(800);
  
  //- stop motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);
}

void stop() {
  //- motor a
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,255);
  
  //- motor b
  analogWrite(motb_pin1,255);
  analogWrite(motb_pin2,255);
}


void moveToWall(int speeda, int speedb) {
  //- move forward!
  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);
  
  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
  
  //-stop when you hit a wall!!
  
  int distance = ultrasonic();
  
  while (distance > 5) {
    //-do nothing except check distance
    distance = ultrasonic();
  }
  //-stop!!!
  stop();
}


void moveForward(int speeda, int speedb, int inches) {
  
  int myDelay;
  
  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);
  
  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);
  
  //- move forward the distance in inches
  myDelay = inches*125;
  delay(myDelay);
  
  //- stop
  stop();
  
}

void moveBackward(int speeda, int speedb) {
  
  //- motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,speeda);
  
  //- motor b
  analogWrite(motb_pin1,speedb);
  analogWrite(motb_pin2,0);
}

void loop() {
  
  Serial.println(ultrasonic());
  delay(100);
  if (digitalRead(button_pin)==LOW) {
      moveToWall(120,120);
  }
  else {
    stop();
  }
}
```

### Turn Before We Crash

Let's program our car to not only stop before we hit a wall, but also turn to avoid it!

Let's program the robot to turn right if it sees an object less than 20 cm away, else move forward.   See the code below.

```c
int motb_pin1 = 3;
int motb_pin2 = 11;

int mota_pin1 = 9;
int mota_pin2 = 10;

int button_pin = 2;

int trig_pin = 4;
int echo_pin = 5;

void setup() {

  //-Control Motor B
  pinMode(motb_pin1,OUTPUT);
  pinMode(motb_pin2,OUTPUT);

  //-Control Motor A
  pinMode(mota_pin1,OUTPUT);
  pinMode(mota_pin2,OUTPUT);

  //- button
  pinMode(button_pin,INPUT_PULLUP);

  //-ultrasonic pin
  pinMode(trig_pin,OUTPUT);
  pinMode(echo_pin,INPUT);

  Serial.begin(9600);

}

//-sends sound out and receives sound
//-returns the distance in centimeters
int ultrasonic() {

  long time;
  float distance;

  //-trigger a sound 
  // send out trigger signal
  digitalWrite(trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(trig_pin, HIGH);
  delayMicroseconds(20);
  digitalWrite(trig_pin, LOW);

  //- a sound has gone out!!
  //- wait for a sound to come back

  time = pulseIn(echo_pin, HIGH);

  //- calculate the distance in centimeters
  distance = 0.01715 * time;

  return distance;

}

//- turn 90 degrees
void turnRight() {

  //- motor b is stopped
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);

  //- motor a moves forward
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,0);

  delay(600);

  //- stop motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);  
}

void turnLeft() {

  //- motor a is stopped
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,0);

  //- motor b moves forward
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,255);

  delay(800);

  //- stop motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,0);
}

void stop() {
  //- motor a
  analogWrite(mota_pin1,255);
  analogWrite(mota_pin2,255);

  //- motor b
  analogWrite(motb_pin1,255);
  analogWrite(motb_pin2,255);
}


void moveToWall(int speeda, int speedb) {

  //- move forward!
  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);

  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);

  //-stop when you hit a wall!!

  int distance = ultrasonic();

  while (distance > 5) {
    //-do nothing except check distance
    distance = ultrasonic();
  }
  //-stop!!!
  stop();

}


void moveForward(int speeda, int speedb, int inches) {

  int myDelay;

  //- motor a
  analogWrite(mota_pin1,speeda);
  analogWrite(mota_pin2,0);

  //- motor b
  analogWrite(motb_pin1,0);
  analogWrite(motb_pin2,speedb);

  //- move forward the distance in inches
  myDelay = inches*125;
  delay(myDelay);

  //- stop
  stop();

}

void moveBackward(int speeda, int speedb) {

  //- motor a
  analogWrite(mota_pin1,0);
  analogWrite(mota_pin2,speeda);

  //- motor b
  analogWrite(motb_pin1,speedb);
  analogWrite(motb_pin2,0);
}



void loop() {

  Serial.println(ultrasonic());

  delay(100);

  if (digitalRead(button_pin)==LOW) {
      moveToWall(120,120);
      turnRight();
  }
  else {
    moveForward();
  }
}
```

### Extra Challenges

- When you stop at the wall, back up and then turn around
- Once you see a wall, stop, back up and turn around.. and then keep going looking for walls.  Once you see another wall, repeat!