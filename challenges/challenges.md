# Challenges

The challenges attached to this section are designed to test your coding ability and help you build familiarity with the environment you will be using every day on the course.

We are looking for you to show your understanding of the different types of values there are in JavaScript, and some of their attached methods. We also want to see your ability to solve problems and use what you've learnt about JavaScript logic creatively.

These videos show the workflow required to get and solve the final challenges. There's step-by-step instructions below too - this will put your skills with the command line and git to the test, alongside JavaScript problem solving.

[Solving a problem](https://youtu.be/8r2DrCwKPRY)

[Pushing and committing your code](https://youtu.be/WkZvpDnphqE)

### Instructions

1. Check you `cd` into the root of this repository. _Hint: if you use the command `pwd` in your terminal the path returned should end in `JavaScript-Precourse`._

2. Run `npm install` in your terminal. Don't worry about any 'vulnerabilities' messages you might see e.g. `2 moderate severity vulnerabilities`. There's **no need** to run `npm audit fix` like the terminal might suggest.

3. Run `npm test` in your terminal to see the test suite. You will see lots of red - that's good! - `npm test` by default will run all of the files in the **tests** folder.

4. In your katas folder you will see a number of files. Each file contains a range of katas focusing on one fundamental JavaScript theme. We recommend that you attempt the challenges in the suggested order. If you feel less confident in one area than you do in others, we would recommend that you spend more time on those trickier concepts.
   Suggested order:

- 1-maths.js
- 2-conditional-logic.js
- 3-strings.js
- 4-arrays.js
- 5-objects.js

5. Run the test suite regularly using `npm test` to see how you are doing. - If you look at the **tests** folder we have more than one test file. We would encourage you going forward to only run the tests on the specific katas you are working on. Each set of katas has a corresponding test file e.g `maths.js > maths.test.js`.
   To run a specific test file you can append the `npm test` command with the specific file you wish to run. To run the maths test file you would run the command `npm test maths.test.js`

6. It is possible to further narrow down which kata you would like to run tests for. We can append `.only` to a `describe` block and Jest will only run that describe block and the tests within it. See below for an example -

```js
describe.only('getLastWord', () => {
  it('returns the last word of the passed sentence', () => {
    expect(getLastWord('hello')).to.equal('hello');
    //etc
  });
});
```

If you have any describe blocks with a .only appended, the test suite will only run those tests. All other tests will be skipped.  
_HINT: Remember to name the specific file in your `npm test` command._

7. Practice using git from the command line by adding and committing your code frequently as you work through the exercises. When you solve a problem, make a commit.

8. If you're having difficulties, you can post on the 'precourse' Slack channel - we'll try to get back to you as soon as possible, and there's usually some helpful current / former / upcoming students with useful advice too :)

9. Once you have completed all of the sections inside the challenges folder, move onto section 6 (Problem Solving) in the [README](../README.md).
