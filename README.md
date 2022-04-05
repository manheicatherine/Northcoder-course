# JavaScript Precourse

Congratulations on passing your entry challenge and taking your first steps towards the Northcoders Bootcamp! 🎉

You must finish the JavaScript Precourse before moving on to the HTML/CSS Precourse. We'd like you to have completed at least the JavaScript Precourse before starting the coding bootcamp.

Please follow this README in order. The JavaScript Precourse contains a mixture of videos, reading material and challenges covering fundamental skills that we expect you to be comfortable with when you begin the bootcamp.

## Before you start

### Remember we're here to help 👋🏽

While you complete your precourse we encourage you to attend our regular drop-in sessions and make use of the 'precourse' Slack channel (if you haven't received an invite let us know). In this channel, you'll find people who are completing the precourse just like you, people who have already completed it and tutors - a community to ask any and all questions to.

### Take Regular Breaks 🚰 🌳 🚶‍♂️

There is a lot of work to get through in this repository and you're just one person.

Remember to take regular screen breaks (5 - 10 minutes every hour at least) and get some fresh air if possible. Sitting in front of your screen for hours at a time is tiring and can often lead to 'brain fog', especially when tackling lots of challenges.

### Be the tortoise, not the hare 🐢 🐰

Take your time with this content. You're here to learn, it isn't a race to a finish line. Maybe try chipping away at this repo in small regular sessions.

---

## 1. The Command Line

Please read [this article](http://learntocodewith.me/getting-started/topics/command-line/) that explains why we use the command line.

Follow a tutorial on how to use the command line. There are some differences between macOS and Linux command line (Ubuntu, Mint...) so choose the appropriate one:

- [macOS](https://openclassrooms.com/en/courses/4614926-learn-the-command-line-in-terminal?status=published)
- [Linux/WSL](https://tutorials.ubuntu.com/tutorial/command-line-for-beginners)

Follow the whole course up to the end. Code Academy also has [more practice material](https://codeacademy.com/learn/learn-the-command-line) on the command line.

Print out or bookmark this [cheat sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/) of common commands. The directory and file commands are most useful so try to practice with these and commit them to memory as soon as possible.

From now on, try to **always** use your terminal program (iTerm, Terminator or git bash) to navigate around your computer, make, move, copy or remove files and folders.

---

## 2. Git / Github

Github is a website and cloud-based service we can use to manage our code. On our local machines, we use git version control to track changes we make.

Version control is a necessity in modern-day programming. Git and Github are big topics and we will explore them during the course in more detail, but they will be part of your daily workflow from day 1, so take some time to start learning how they work.

Make sure you have installed git (revisit the setup-guides if necessary) and that you have sent your Github account details to us on Slack.

For a basic introduction to git and Github, please watch videos 1-7 of [this playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).

Try out git yourself by following the GitHub Learning Lab course [here](https://lab.github.com/githubtraining/introduction-to-github).

### 2a. Fork and Clone this Repository

You should now use git to download this repository so that you can work on the challenges on your local machine!

Here's a tutorial on how to fork and clone this repo from Github: [Forking and cloning the project](https://youtu.be/QxvgzQFmOJE).

1. Fork and clone this repository.

2. Open this repository in VSCode.

3. Continue reading this README on your local machine.

---

## 3. Basic Skills

You've probably already shown in your Entry Challenge that you can demonstrate the below skills, but make sure you are absolutely confident with them as they will underpin everything you do in this Precourse, in JavaScript and beyond.

- Store a value as a variable
- Execute code conditionally ('if' something is true)
- Access an item in an array if you know its index
- Access a value of an object if you know its key
- Iterate through an array or string
- Create a function with parameters that returns a value
- Execute a function with parameters
- Log values to the console

---

## 4. Coding Style

It's important our code is easy to read and well laid out. As well as helping other people, it also makes our life easier when we go back and read our code over at a later date.

Read this article and implement these styling guidelines when working through the rest of the Precourse:
https://javaScript.info/coding-style.

Always be asking yourself 'if I was to take away the question and any comments, can someone still understand what my code is doing?'

---

## 5. Challenges

We have supplied you with a folder of challenges for you to complete. The style of these katas should be familiar to you after the katas you've completed running up to and including your entry challenge.

To start this section you will need to read through the [`challenges.md`](challenges/challenges.md) file within the challenges folder. In this file, you'll find instructions on how to complete these challenges.

---

## 6. Problem Solving

Problem solving is the number one skill that employers in the tech sector value - good problem solvers are able to work in any language, technology or situation.

Please watch [these 5 videos by Michael Starbird](https://www.youtube.com/playlist?list=PLEo7ej2RhHszJy_77UXC8GJpb8LtW-dJT). The first two in particular really resonate with the Northcoders philosophy. Try to apply what you have learnt in these videos to the next coding problems you encounter.

If you haven't already done so, please work through some of the [Algorithm Challenges on FreeCodeCamp](https://learn.freecodecamp.org/javaScript-algorithms-and-data-structures/basic-algorithm-scripting). All of the problems in this chapter are excellent practice - we recommend trying to solve 5 of them as a minimum.

### TASK

Now we want you to approach some existing katas from a problem solving perspective. This task requires you to fix some broken code in order to get tests passing.

Please navigate to [errors.md](/problem-solving/errors.md) within the problem-solving folder to find your next steps.

---

## 7. Reading

Take a look at [Kyle Simpson's Get Started](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md) book, which is a great intro to JavaScript and gives a thorough overview of the things you should understand at this point. Read the [Preface](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/preface.md), and [Chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md) up until the section on 'How We Organize in JS' - from thereon, we'll cover in the course.

You may also enjoy reading (or at least beginning!) Paul Ford's excellent article, [What is Code?](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)

It's a long read, but stick with it - it's probably one of the top articles of all time, on any subject. When Ford first published it in Bloomberg Businessweek, the magazine completely sold out and is almost impossible to get hold of in hard copy now.

---

## 8. Functional Programming

How about adding a couple of new tools to your tool belt? `map` and `filter` are methods available on all arrays (like `slice`, `pop` and `push`) and are extremely useful!

Map allows us to transform elements in an array, and filter allows us to filter down an array based on elements we want to keep or reject.

Both of these things we can do perfectly well with for loops, but `map` and `filter` make it a lot easier, and arguably make our code easier to read.

Firstly, watch [this video](https://www.youtube.com/watch?annotation_id=9a10b561-1e8b-405b-a677-73c215d264fb&feature=cards&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&src_vid=Wl98eZpkp-c&v=BMUiFMZr7vk) on functional programming which explains how to use `filter` and how the same operation could be achieved with a normal for loop.

Then watch [this video](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2) which demonstrates the use of the native map method, another classic example of functional programming.

### TASK

Now we want you to look at some existing katas from a functional programming perspective. You will be asked to refactor them and, where possible, use higher order functions.
Navigate to the functional-programming folder and open [refactoring.md](functional-programming/refactoring.md) for your next steps.

---

## 9. Regular Expressions

Regular expressions are common across all programming languages and allow you to match complex patterns in strings of characters. Have you ever wondered how forms know whether your email address is valid, or how the strength of your password gets rated? These are examples of common problems can be solved with regular expressions.

Work through [this tutorial](http://regexone.com/) to introduce the key components of Regular Expressions.

Finally, play around with writing your own regular expressions in [Regexr](http://regexr.com/). Some matches to try:

- A word with 8+ characters
- A word of 5 characters including at least 1 number at the end
- A sequence of words separated by underscores or hyphens
- A valid .com email address
- A valid .co.uk email address
- A valid mobile phone number beginning in 07
- A date in the format 11-01-2017 OR 11-02-17
- A hashtag or mention e.g. #mondaymotivation, @northcoders

---

## 10. Advanced Challenges

The steps for completing the final challenges are the same as `5.Challenges`. Use what you've learnt about regex and functional programming where you can - it would be great to see some array methods used like `map` and `filter`. If you can't make it work, feel free to send us a message on Slack!
