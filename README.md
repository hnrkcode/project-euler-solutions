# Project Euler Solutions

My solutions to problems at [projecteuler.net](https://projecteuler.net/) solved with javascript.

Some solutions are slow. That's why I've added a timer function to make it easier to find which solutions I can optimize at a later time.

## How to add new solutions

1. Add the number of the problem to the `problem` array in `solvedProblems.js`

    ```javascript
    const problems = [1, 2, 3, 4, 5]
    ```

2. Create a new module in `src/problems/` and name it `problem5.js` if it's the fifth problem.

3. `Export a function` that `only returns a number` that is the solution to the problem.

## How to run the project

Use [serve](https://www.npmjs.com/package/serve) to view the project in the browser.

`npm install -g serve`

`serve`