# About

Hello! My name is gravitowl, and I like to do stupid stuff. I got this idea from megat69/Assassin_craft on discord. He was making his own language using Python, you can go to this repo [here.](https://github.com/megat69/ACPL)

This project is just basically me, trying to do something cool. It's completely for fun and has no other purpose. If you want to use it for anything, you are free to use it. If you do show it off to any people, please credit me. This won't be any advanced thing, just the basics as it's also a way of me learning some more JS and Node.

## Table of contents

* [About](https://github.com/gravitowl/graviton-language#about)
* [Important Notes](https://github.com/gravitowl/graviton-language#important-notes)
* [Documentation](https://github.com/gravitowl/graviton-language#documentation)
* [Change log](https://github.com/gravitowl/graviton-language#change-log)

# Important Notes

All lines should end with a ;. Otherwhise this won't work. Currently, only single line commands are supported. Variables can not be named after functions. These include things like print, or later on when I add it user made functions. You need Node.js in order to run this, get it [here](https://nodejs.org/en/). To write code, you need to open the main.gton file in your favorite text editor. If you have written all of your code, type "node ." in the console/terminal. This will run the main.js file, and it will scan your file for possible instructions.

# Documentation

## Table of contents

* [Print](https://github.com/gravitowl/graviton-language#print)
* [Variables](https://github.com/gravitowl/graviton-language#variables)

## Print

The print function can be used to log text to the console. The print function is used like this: print(text);. There is no need for "" around the text, and variables can be inputed in the text with using {variable name} inside of the ( ).

#### Examples:

* We want to print "Hello World!" to the console:
Input: print(Hello World!); Output: Hello World!
* We want to print the variable X, that has been pre-set to a value of 10:
Input: print({X}); Output: 10.
* We want to print the variable X, that has been pre-set to a value of 10 with the text "X is: " in front of it:
Input: print(X is: {X}); Output: X is 10.

## Variables

Variables can be used to print custom values, and to give more interaction with the user. Variables are used like this: var (variable name) = (value). The value can be anything, from strings to integers. You don't need "" to specify strings, booleans can be used and integers too. To reassign a value of a variable, you do this: (variable name) = (value);

### Examples:

* We want to set a variable named X to 10:
Input: var x = 10;
* We want to set a variable named X to 10, than after that we will set it to 9:
Input: var x = 10;
       x = 9;

# Change log
