# Stectech Tech Test

Welcome to our little test, the instructions may be a little vague at times. This is intentional. We're hoping you´ll figure it out, good luck!

We´ve copied out a few files that have (at least) one bug. This responsive website has a few different menus. We noticed that at 320px if we scroll down then up the menu disappears:

![bug](http://g.recordit.co/FdxwLwS6oi.gif)

To see a live version of this bug [click here](http://quirktools.com/screenfly/#u=https%3A//cdn.rawgit.com/rodcul/tech-test/master/index.html&w=320&h=500&s=1)

Also might be useful to read [Navigation specification document](docs/navigation.md)

## Instructions

1. Clone this repo to your development environment
2. Create a new feature branch in git
3. Figure out what´s making the menu disappear and fix the bug (you will need to run ```npm install``` & ```gulp``` to generate new main.js & main.css)
5. Push your feature branch up to github and open a Pull Request back to master

## Things we´re looking for in order of importance:

1. Fix the bug
2. Time it takes to solve the problem
3. Elegant code
4. Git commits & descriptions

### BONUS
3. Additional comments or ideas around refactoring (or additional commits)
4. Create a functional test with your tool of choice and provide instructions on how to run it that checks that the menu is present after scrolling down & up (EXTRA BONUS points if the test is committed BEFORE the solution in true TDD style)
