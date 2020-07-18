/*
  Add number of solved problem to the array to include the module.
  Important: module files need to be named "problem[number].js" and
  the exported function with the solution need to be named in the same way.

  Example: Module "problem1.js" contains an exported function named "problem1".
*/
const problems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const solvedProblems = problems.map((problem) => "problem" + problem);

export default {
  ...solvedProblems,
};
