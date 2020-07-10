// Return the result of the function and how many milliseconds it took.
const timeFunc = (func) => {
  const start = new Date().getTime();
  const result = func();
  const end = new Date().getTime();
  const time = end - start;
  return [result, time];
};
