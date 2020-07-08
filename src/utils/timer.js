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
  const solutionPara = document.createElement("p");
  solutionPara.textContent = `Solution: ${result}`;
  const runtimePara = document.createElement("p");
  runtimePara.textContent = `Runtime: ${time} ms`;
  const ratingPara = document.createElement("p");
  ratingPara.classList.add("has-text-weight-bold");

  if (time > 500 && time < 5000) {
    ratingPara.textContent = "OK";
    ratingPara.classList.add("has-text-warning");
    return [solutionPara, runtimePara, ratingPara];
  } else if (time > 5000) {
    ratingPara.textContent = "BAD";
    ratingPara.classList.add("has-text-danger");
    return [solutionPara, runtimePara, ratingPara];
  } else {
    ratingPara.textContent = "GOOD";
    ratingPara.classList.add("has-text-success");
    return [solutionPara, runtimePara, ratingPara];
  }
};
