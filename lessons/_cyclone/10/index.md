---
layout: lesson
title: Lesson 10 &middot; Adding Sound and Finishing Your Arcade Game
suggested_time: 40-60 minutes
---

## Materials

These lessons go along with [Cyclone Arcade Game: Intro To Arduino Kit (Ages 9+) [KIT-4-4]](https://shop.barnabasrobotics.com/products/cyclone-arcade-game-intro-to-arduino-kit-ages-8).

Classroom sets available.  Contact us at info@barnabasrobotics.com to inquire. 

### Adding Sound and Finishing Your Arcade Game

Finish your Cyclone arcade game by adding sound. In this final lesson, you'll use the buzzer to create audio feedback and bring lights, input, motion, and sound together into one complete interactive project.

### Tutorial Video

<div class="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_vRZ3a5SDho" title="Barnabas Cyclone Arcade Game Lesson 10: Adding Sound and Finishing Your Arcade Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### What You'll Learn

- Connect and control a buzzer
- Use sound as feedback in an interactive game
- Combine lights, button input, servo movement, and sound into a finished system

### Follow Along

1. Follow the video to connect and program the buzzer.
2. Test the complete game from the moving LED sequence through the player's button press.
3. Play several rounds and check that the lights, win logic, servo, and sound all work together.

### Check Your Work

Before moving on, make sure your project behaves like the example shown in the video. If something isn't working, compare your wiring and code carefully with the video before changing multiple things at once.

### What's Next?

Your Cyclone arcade game is complete! Try experimenting with your code using these additional challenges. Start with the easier challenges and work your way up to more advanced ones.

1. **Make the game harder.** Increase the speed of the lights so the game is more difficult to win.
2. **Automatically increase the difficulty.** Each time you win, increase the speed of the lights to make the game progressively harder. HINT: Use a variable to store the delay time between each light blink.
3. **Level up after 3 wins.** Only increase the speed of the lights after you have won 3 times. HINT: Use a variable to keep track of how many times you win.
4. **Level up after 3 wins in a row.** Only increase the speed of the lights if you win 3 times in a row. If you lose, your winning streak should start over. HINT: Reset the win-count variable from the previous challenge whenever you lose.
5. **Display game information on the computer screen.** Add messages that show the status of your game, such as a welcome message, your current level, or how many times you have won. HINT: Use the Serial Print Line block.
6. **Play a victory song.** Use the buzzer to play a victory song of your choice when you win the game. HINT: See more in-depth information on creating music here: https://lessons.barnabasrobotics.com/bot_lessons_home/08/index.html
7. **Add a reset button.** Add a second button that can be used to reset the game. HINT: Place the second button on your breadboard so the top and bottom pins are on new rows. Connect one row to a new input pin on the Uno and connect the other row to GND.
8. **Add a start button.** Make the game wait until the player presses a button before the lights begin moving. HINT: Use a button input to control when the game starts.
9. **Give the player 3 lives.** Each time the player loses, subtract one life. End the game when the player runs out of lives. HINT: Use a variable to keep track of the number of lives remaining.
10. **Add a score system.** Award points every time the player wins and display the player's score on the computer screen. HINT: Use a variable to store the score and Serial Print Line to display it.
11. **Create difficulty levels.** Create Easy, Medium, and Hard modes that use different light speeds. HINT: Use a variable to control the delay between each light.
12. **Add a Game Over message.** When the player runs out of lives, display "Game Over" on the computer screen. HINT: Use Serial Print Line and a condition that checks whether the player has any lives remaining.
13. **Keep track of a high score.** Keep track of the highest score the player reaches during the game. HINT: Compare the current score with a high-score variable. If the current score is greater, update the high score.
14. **Add a countdown.** Before the lights start moving, display "3... 2... 1... GO!" on the computer screen. HINT: Combine Serial Print Line with delay blocks.
15. **Add winning and losing sound effects.** Make the buzzer play one sound when the player wins and a different sound when the player loses. HINT: Experiment with different notes and note lengths to make each sound easy to recognize.
16. **Change the winning light.** Instead of always having the same LED be the winning position, change which LED the player needs to stop on. HINT: Use a variable to store the number of the winning LED.
17. **Create a bonus round.** After the player reaches a certain score or level, start a special bonus round where the lights move faster. HINT: Use a condition to check the player's score or level.
18. **Award different amounts of points.** Instead of every win being worth the same number of points, award more points when the game is moving faster. HINT: Use the current level or light speed to determine how many points the player earns.
19. **Add a winning streak bonus.** Award bonus points when the player wins several times in a row. HINT: Use a variable to count consecutive wins and reset it whenever the player loses.
20. **Make the lights speed up during a round.** Start each round slowly and gradually make the lights move faster the longer the player waits to press the button. HINT: Change the delay variable while the game is running.
21. **Create a two-player game.** Have Player 1 and Player 2 take turns playing and keep a separate score for each player. HINT: Create separate score variables for each player.
22. **Create a best-of-three game.** Have two players compete until one player wins two out of three rounds. HINT: Use variables to keep track of how many rounds each player has won.
23. **Add a time limit.** Give the player only a certain amount of time to make a move. If the player doesn't press the button before time runs out, they lose the round.
24. **Create a special light pattern when you win.** Instead of immediately starting another round, make the LEDs flash, chase around the circle, or create another pattern to celebrate a win.
25. **Create a different light pattern when you lose.** Program the LEDs to show a different animation when the player misses the winning light.
26. **Create your own sound effects.** Design different sounds for starting the game, winning, losing, leveling up, and getting a high score.
27. **Create your own LED animation.** Experiment with the LEDs and create a completely new animation or pattern. Try making the lights bounce back and forth, flash in groups, or create your own sequence.
28. **Add another button with a new function.** Decide what you want the button to do. It could change difficulty, start a new game, select a player, or activate a special feature.
29. **Combine several challenges.** Create a complete game with levels, lives, scoring, sound effects, a high score, and increasing difficulty.
30. **Invent your own version of Cyclone.** Change the rules, lights, sounds, controls, scoring, or movement to create a game that's completely your own. Think like an engineer: design it, build it, test it, find problems, and improve it.
