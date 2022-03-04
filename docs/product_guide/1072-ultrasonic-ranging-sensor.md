---
title: HC-SR04 Ultrasonic Sensor Guide
sidebar_position: 5
---

Posted by **Kelly M** on **Nov 27, 2021**

The HC-SR04 ultrasonic sensor module is a very popular module for measuring distance or any other purposes. It emits an ultrasound signal at about 40 000 Hz which travels through the air and if there is an object or obstacle along its path, the sound will bounce back to the module.

![](/img/docs/product_guide/1072_01.jpg)

In this article, we will talk about how to wire and set up the module for operation with an Arduino Board.  

**Wiring**
Most HC-SR04 modules operate at 5V and gives out digital outputs. For this project, we will be using the [HC-SR04 Ultrasonic Sensor module](https://www.canadarobotix.com/products/1072) we carry in our shop. This module consists of 4 pins:** VCC, TRIG, ECHO** and **GND**. Both the TRIG and ECHO pins can be connected to any Digital output pins on an Arduino Board. 

**Parts**
* [HC-SR04 Ultrasonic Sensor](https://www.canadarobotix.com/products/1072)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [BreadBoard](https://www.canadarobotix.com/products/223)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)

## **Wiring Guide** 
Insert the HC-SR04 module onto a breadboard and connect the pins with male to male jumper wires 

![](/img/docs/product_guide/1072_01.png)

* HC-SR04 **VCC** -- Arduino **5V pin **
* HC-SR04 **Trig** -- Arduino **D3 pin** 
* HC-SR04 **Echo** -- Arduino **D2 pin** 
* HC-SR04 **GND** -- Arduino **GND pin**

![](/img/docs/product_guide/1072_02.png)
![](/img/docs/product_guide/1072_03.png)

## **Programming **
The following code demonstrates how the ultrasonic sensor works and measure the distance if an object or obstacle is in front of it. If you want to skip the steps and jump to the Full Code. 

**Step 1:** Define connection pins

```c
#define echo 2 
#define trig 3
```

**Step 2:** Create variables for the duration of sound wave travel and for the distance measurement

```c
long duration; 
int distance; 
```

**Step 3:** Set up serial communication between Arduino and HC-SR04 sensor, set the **trig** pin as an **output** and **echo** pin as an **input**. 

```c
void setup(){
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}
```

**Step 4:** Clear the **trig** pin condition

```c
void loop(){
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
```

**Step 5:** Set the **trig** pin HIGH for 10microseconds to generate the ultrasound. 

In order to generate the ultrasound, we need to set the TRIG pin as HIGH for 10milliseconds. This will send out a 8 cycle sonic burst which will travel at the speed sound and it will be received in the Echo pin. The Echo pin will output the time in microseconds the sound wave travelled. 

```c
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
```

**Step 6:** Reads the **echo** pin and returns the sound wave travel time in microseconds. 

```c
 duration = pulseIn(echo, HIGH);
```

**Step 7:** Calculate the distance.

To get the distance in centimetre, we need to use the math formula, Time = Distance/ Speed. For example, if the object is 20 cm away from the sensor, and the speed of the sound is 340 m/s, and the sound wave will need to travel about 588 microseconds. However, the result you will get from the Echo pin will be double of the number since the sound wave needs to travel forward and bounce backward. So, we will need to multiply the received travel time value from the echo pin by 0.034 (which is the speed of the sound) and divide it by 2 (as it travels forward and backward). 

```c
  distance = duration * 0.034 /2;
```

**Step 8:** Display the distance on Serial Monitor

```c
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
}
```

Full Code

```c
#define echo 2 
#define trig 3

long duration; 
int distance; 

void setup(){
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

void loop(){
  digitalWrite(trig, LOW);
  delayMicroseconds(2);

  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  duration = pulseIn(echo, HIGH);
  distance = duration * 0.034 /2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
}
```

## **Output**
Serial Monitor will display the distance from the sensor to the object. In this example, I moved my hand forward and backwards to test the distance measurements.

![](/img/docs/product_guide/1072_01.gif)
![](/img/docs/product_guide/1072_04.png)