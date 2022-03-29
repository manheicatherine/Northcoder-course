### Challenges

The challenges attached to this section are designed to test your coding ability and help you build familiarity with the environment you will be using every day on the course.

We are looking for you to show your understanding of the different types of values there are in JavaScript, and some of their attached methods. We also want to see your ability to solve problems and use what you've learnt about JavaScript logic creatively.

These videos show the workflow required to get and solve the final challenges. There's step-by-step instructions below too - this will put your skills with the command line and git to the test, alongside JavaScript problem solving.

<!-- 🚩 We will need to re-record these videos (github out of date/repo might look different) 👇🏽 -->

[Solving a problem](https://youtu.be/8r2DrCwKPRY)

Please note that the arrangement of the files has changed a bit since we recorded this video. Follow the guide below when ensuring you are in the right directory to run `npm install` and `npm test`.

[Pushing and committing your code](https://youtu.be/WkZvpDnphqE)

1. Check you `cd` into the root of this repository. _Hint: if you use the command `pwd` in your terminal the path returned should end in `PRE-1`._

2. Run `npm install` in your terminal. Don't worry about any 'vulnerabilities' messages you might see e.g. `2 moderate severity vulnerabilities`. There's **no need** to run `npm audit fix` like the terminal might suggest.

3. Run `npm test` in your terminal to see the test suite. You will see lots of red - that's good!
<!-- how to test specific files -->

<!-- --ORDER?? 🚩🚩🚩🚩🚩🚩 -->

4. Open the index.js file within the challenges folder in VS Code and begin solving them.

5. Run the test suite regularly using `npm test` to see how you are doing.

6. If you stall on one problem and want to move on, you'll find that the tests will end at the last incorrect challenge. To allow the test suite to move on, open the index.spec.js file in the spec folder. Find the describe block for the function you are currently writing, and place an x before it, like this:

```js
xdescribe('getLastWord', () => {
  it('returns the last word of the passed sentence', () => {
    expect(getLastWord('hello')).to.equal('hello');
    //etc
  });
});
```

This will allow the test suite to skip over it and it will list as 'pending' in your terminal on running `npm test`.

7. Practice using git from the command line by adding and committing your work frequently as you work through the exercises. When you solve a problem, make a commit.

8. If you're having difficulties, you can post on the 'precourse' Slack channel - we'll try to get back to you as soon as possible, and there's usually some helpful current / former / upcoming students with useful advice too :)
