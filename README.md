# The Monster Slayer

> Game built with Vue.js during course "Vue JS 3 - The Complete Guide"

The course is available at [Udemy](https://www.udemy.com/vuejs-2-the-complete-guide/).

## Summary

* [About the project](#about-the-project)
* [How the game works](#how-the-game-works)
* [How to play](#how-to-play)
* [How to contribute](#how-to-contribute)

## About the project

This is the first project of the course "Vue JS 3 - The Complete Guide".

The goal is to create a game with basic Vue JS features to manipulate the DOM.

## How the game works

On the home screen there is a button to start a new game.

![Start game](https://raw.githubusercontent.com/taymison/the-monster-slayer/master/docs/assets/img/start-game.png)

After starting the game, four buttons appear: attack, special attack, heal and give up.

When attacking, the player deals between 3 to 10 points of damage to the monster and receives between 5 and 12 points of damage.

In the special attack, the player deals between 10 and 20 points on the monster and gets between 5 and 12 points of damage.

By healing the player recovers 10 points or until completing 100 and receives between 5 and 12 points of damage of the monster.

Quitting makes the game return to the home screen.

![Initial gameplay](https://raw.githubusercontent.com/taymison/the-monster-slayer/master/docs/assets/img/gameplay-1.png)

The bars increase and decrease dynamically during the game representing the scores of the player and the monster.

Todas as ações durante o jogo são registradas em um log abaixo dos botões.

![Gameplay](https://raw.githubusercontent.com/taymison/the-monster-slayer/master/docs/assets/img/gameplay-2.png)

When the player or monster has 0 or fewer points the game ends.

A message of victory or defeat appears and the player can start a new game or not.

If you choose to start a new game, the log is deleted and the game and monstr have 100 points again.

![End game](https://raw.githubusercontent.com/taymison/the-monster-slayer/master/docs/assets/img/endgame.png)

## How to play

To play just open the ``index.html`` file in any browser.
