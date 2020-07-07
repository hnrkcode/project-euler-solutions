// Return the result of the function and how many milliseconds it took.
export const timeFunc = (func) => {
  const start = new Date().getTime();
  const result = func();
  const end = new Date().getTime();
  const time = end - start;
  return [result, time];
};

// Return result and if the execution time is good, ok, or bad.
export const formatResult = (func) => {
  const [result, time] = timeFunc(func);

  if (time > 500 && time < 5000) {
    return `Solution: ${result} <b style="color:#C4A000;">(${time} milliseconds) OK</b>`;
  } else if (time > 5000) {
    return `Solution: ${result} <b style="color:red;">(${time} milliseconds) BAD</b>`;
  } else {
    return `Solution: ${result} <b style="color:green;">(${time} milliseconds) GOOD</b>`;
  }
};