---
layout: lesson
title: Lesson 6 &middot; Set Up Your Computer
suggested_time: 30-45 minutes

videos:
    - link: https://youtu.be/KCxQFMmqkMU
      text: Install Your IDE (Macbook)
    - link: https://youtu.be/IA5jnPW4noQ
      text: Install Your IDE (Windows)      
            
other:
    - link: chrome://flags/#enable-experimental-web-platform-features
      text: Chromebook Settings Link
    - link: https://code.barnabasrobotics.com
      text: Chromebook IDE (code.barnabasrobotics.com)
    - link: https://go.barnabasrobotics.com/pkg
      text: Download Mac IDE (.pkg)
    - link: https://go.barnabasrobotics.com/exe
      text: Download Windows IDE (.exe)
---
### What You'll Need

Before we get started, let’s make sure that we have all the parts.

<img src="fig-6_0.png" alt="fig-6_0" style="zoom:90%;" class="image center" />

### Overview

In this lesson, we’ll be learning about the tool that software engineers need to do their job and also how to set up that tool on your computer.

### IDE - The Tool For Software Engineers

To start, we need to set up your computer with an integrated development environment (IDE).  An IDE is just like any tool that allows someone to do their job.  For example, a chef needs a knife.  A car mechanic needs a wrench.  A software engineer needs their IDE.  An IDE allows a software engineer to:

1. Write code
2. Prepare the code to be sent out

There are IDEs to make video games, apps for your smartphone, websites and lots more.  The IDE that we will be using is designed to allow us to write code for our robot and to prepare that code to be sent out to our robot’s brain (Barnabas Noggin).

### What Type of Computer Do You Have?

Each type of computer has their own version of the IDE, so your first task is to figure out which type of computer you have: Chromebook, Macbook or Windows PC.  Click on your computer type below to jump to the right instructions so that you can setup your IDE.

- [Chromebook](#chromebook-ide-setup)
- [Macbook](#macbook-ide-setup)
- [Windows PC](#windows-pc-ide-setup)

***

### Chromebook IDE Setup

<img src="fig-6_1.png" alt="fig-6_1" style="zoom:90%;" class="image center" />

For Chromebooks, your IDE will be a website called Barnabas Blocks.  Follow the instructions below to get it working.  


Before starting:

- [ ] Make sure that your Chromebook is powered on and charged (or charging)
- [ ] Make sure that your Chromebook has access to the internet

#### Enable Experimental Web Platform features

Your Chromebook has special secret features that we need to enable so that it will be able to communicate with our Barnabas Noggin.  We’ll go through how to enable this cool feature.

#### 1. Open your Google Chrome browser

#### 2. Copy and paste this text into your address bar.  

<p style="text-align:center"><cmd>chrome://flags/#enable-experimental-web-platform-features</cmd></p>

#### 3. Select “Enabled” on the “Experimental Web Platform features”

<img src="fig-6_2.png" alt="fig-6_2" style="zoom:40%;" class="image center" />

#### 5. Click “Relaunch”

Your Chromebook is now ready.  That was easy, right?  Type the link below (or copy and paste) into your address bar to check out your IDE!

<p style="text-align:center"><cmd><a style="color:white" href="https://code.barnabasrobotics.com">https://code.barnabasrobotics.com</a></cmd></p>

#### 6. Upload Code

1. Connect your Barnabas Noggin (Green board) to your Chromebook using a USB cable.  A red light should turn on on your Barnabas Noggin.

2. Set "Select a board" to "Noggin

3. Set "Select a lesson" to "Advanced"

4. Drag an empty yellow program loop into your workspace

   <img src="fig-6_17.png" alt="fig-6_0" style="zoom:40%;" class="image center" />

5. Click "Upload"

   <img src="fig-4_5.png" style="zoom:60%;" class="image center" />

6. Select the COM port and click "Connect"

***

### Macbook IDE Setup

<img src="fig-6_3.png" alt="fig-6_3" style="zoom:15%;" class="image center" />

For Macbooks, your IDE is called Ardublock.  We’re going to need to download something called a package file (**.pkg**) from the internet and then run the **.pkg** so that it can install the IDE onto your Macbook.  

We’re going to use a super cool software engineering tool called the terminal to do this.

Before starting:

- [ ] Make sure that your Macbook is powered on and charged (or charging)
- [ ] Make sure that your Macbook has access to the internet

#### Tutorial Video

{% include youtube.html id="KCxQFMmqkMU" %}

#### The Terminal

<img src="fig-6_4.png" alt="fig-6_4" style="zoom:30%;" class="image center" />

The terminal is a place where you can use the keyboard to type direct commands to tell your computer what to do.  In the early days of computers, the terminal was the only way to communicate with a computer.  Whether you wanted to open an app, print something out, or even shut down your computer, you needed to use the terminal.  This was because there were no computer mice or touch screens yet!  Software engineers today still use the terminal because it is the best way to give special commands to your computer.  In fact, there are secret commands that you can use in the terminal that you can’t use with a mouse or touch screen.  It’s an important tool for any software engineer to master.  Let’s try it out! 

#### 1. Login

After you power on your Macbook, log into an administrative profile on your Mac so that you’re able to make changes to your Macbook system.  This is likely the parent profile.

#### 2. Open The Terminal

Press **Command (or Cmd) ⌘ + space** on your keyboard at the same time to open your Spotlight Search function.  In the search bar, type “**terminal**”.  The Terminal should show up as your “TOP HIT”.  Double-click on the Terminal app to open it.

<img src="fig-6_5.png" alt="fig-6_5" style="zoom:60%;" class="image center" />

#### 3. Download The Installer

After the Terminal opens, we’re going to use the **curl** command to download the **barnabas.pkg** file.  In the terminal, type the following command.  

<p style="text-align:center"><cmd>curl -L -o barnabas.pkg go.barnabasrobotics.com/pkg</cmd></p>



{% include badge.html type='troubleshoot' content='Make sure to type it exactly right. Upper-case letters, lower-case letters, spaces, no spaces, dots, slashes and dashes all matter!  When you’re done, press enter on your keyboard to execute the command.  If you get it wrong, no need to panic.  Your terminal will just respond with an error because it can’t understand the command.  Just type it again, double-check everything and press enter again.' %}

The **curl** command downloads the **barnabas.pkg** file from the web address **go.barnabasrobotics.com/pkg**.  We will later run the **barnabas.pkg** file to install the IDE onto our Macbook. If you get it right, the file will begin to download.  This download confirmation comes out at the end.

<img src="fig-6_6.png" alt="fig-6_6" style="zoom:90%;" class="image center" />

#### 4. Run The Installer

Next, let’s use the **sudo installer** command to run **barnabas.pkg**, which will install the IDE.  Remember to press enter to execute the command


<p style="text-align:center"><cmd>sudo installer -pkg barnabas.pkg -target /</cmd></p>


{% include badge.html type='troubleshoot' content='Don’t forget the -target / at the end of the command!' %}

If you get it right, a password prompt will come up.  Type in the password for your administrator profile here and press enter.  After you do that, the Macbook will begin installing your IDE.

<img src="fig-6_14.png" alt="fig-6_14" style="zoom:100%;" class="image center" />

If installation was successful, you’ll see the following confirmation from the terminal:

installer: Package name is BarnabasArdublock

installer: Upgrading at base path /

installer: The upgrade was successful.

{% include badge.html type='troubleshoot' content='If you get the prompt below, it means that the current profile can’t install the banabas.pkg file.<img src="fig-6_15.png" alt="fig-6_15" style="zoom:90%;" class="image center"  /> To fix this, you’ll need to log out of your profile and log back into an administrative profile (this is likely a parent profile).  Once you’ve done that, start again on step 1.' %}

#### 5. Delete The Installer

Now that our IDE is installed, we no longer need the **barnabas.pkg file**.  Let’s remove it from our computer.  To do this, use the **rm** command.  Remember to press enter to execute the command.

<p style="text-align:center"><cmd>rm barnabas.pkg</cmd></p>



#### 6. Start The IDE

You’re done!  Go to Finder-> Applications and double-click on **BarnabasArdublock** to check out your IDE!

<img src="fig-6_7.png" alt="fig-6_2" style="zoom:90%;" class="image center" />



---

### Windows PC IDE Setup

<img src="fig-6_8.png" alt="fig-6_8" style="zoom:15%;" class="image center" />

For Windows PCs, your IDE is called **Ardublock**.  We’re going to need to download something called an executable file (.exe) from the internet and then run the .exe so that it can install the IDE onto your Windows PC.  


We’re going to use a super cool software engineering tool called the terminal to do this.

Before starting:

- [ ] Make sure that your Windows PC is powered on and charged (or charging)
- [ ] Make sure that your Windows PC has access to the internet

#### Tutorial Video

{% include youtube.html id="IA5jnPW4noQ" %}

#### The Terminal

<img src="fig-6_9.png" alt="fig-6_9" style="zoom:80%;" class="image right" />

The terminal is a place where you can use the keyboard to type direct commands to tell your computer what to do.  In the early days of computers, the terminal was the only way to communicate with a computer.  Whether you wanted to open an app, print something out, or even shut down your computer, you needed to use the terminal.  This was because there were no computer mice or touch screens yet!  Software engineers today still use the terminal because it is the best way to give special commands to your computer.  In fact, there are secret commands that you can use in the terminal that you can’t use with a mouse or touch screen.  It’s an important tool for any software engineer to master.  Let’s try it out!  

#### 1. Login

After you power on your Windows PC, log into an administrative profile on your Windows PC so that you’re able to make changes to your Windows system.  This is likely the parent profile.

#### 2. Open The Terminal

We will use a terminal called **PowerShell** on your computer.  To access it, type “**powershell**” in your search bar and click on the “Windows PowerShell” App to launch it.

<img src="fig-6_16.png" alt="fig-6_16" style="zoom:40%;" class="image center" />

#### 3. Download The Installer

After PowerShell opens, we’re going to use the **wget** command to download the barnabas.exe file.  To do this, type in the following command.  

<p style="text-align:center"><cmd>wget go.barnabasrobotics.com/exe -o barnabas.exe</cmd></p>


{% include badge.html type='troubleshoot' content='Make sure to type it exactly right. Upper-case letters, lower-case letters, spaces, no spaces, dots, slashes and dashes all matter!  When you’re done, press enter on your keyboard to execute the command.  If you get it wrong, no need to panic.  Your terminal will just respond with an error because it can’t understand the command.  Just type it again, double-check everything and press enter again.' %}

The **wget** command downloads the barnabas.exe file from the web address **go.barnabasrobotics.com/exe**.  We will later run the **barnabas.exe** file to install the IDE onto our Windows PC. When done correctly, a download pop-up will show up in your terminal.  The download pop-up will go away once it finishes downloading.  It may take a few minutes, so be patient!  

   <img src="fig-6_10.png" alt="fig-6_10" style="zoom:80%;" class="image center" />

#### 4. Run The Installer

Next, let’s run barnabas.exe, which will help us install the IDE.  To do this, we need to use the **.\** command.  Remember to press enter on your keyboard to execute the command.

<p style="text-align:center"><cmd>.\barnabas.exe</cmd></p>



{% include badge.html type='troubleshoot' content='There is no space between . and \ or between \ and b!' %}

When done correctly, a screen will pop up asking: “Do you want to allow this app from an unknown publisher to make changes to your device?”.  

Click **Yes**.

   <img src="fig-6_11.png" alt="fig-6_11" style="zoom:60%;" class="image center" />

When installation finishes, you’ll see the **BarnabasArdublock** icon appear on your computer desktop.

<img src="fig-6_13.png" alt="fig-6_13" style="zoom:80%;" class="image center" />



#### 5. Delete The Installer

Now that our IDE is installed, we no longer need the **barnabas.exe** file.  Let’s delete it from our computer.  To do this, use the **del** command.  Remember to press enter to execute the command.

<p style="text-align:center"><cmd>del barnabas.exe</cmd></p>



#### 6. Start The IDE

You’re done!  Double-click on the **BarnabasArdublock** icon to check out your IDE!

<img src="fig-6_13.png" alt="fig-6_13" style="zoom:80%;" class="image center" />
