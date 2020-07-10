// Return result and if the execution time is good, ok, or bad.
export const formatResult = (solutionData) => {
  const [result, time] = solutionData;

  const solutionPara = document.createElement("p");
  solutionPara.textContent = `Solution: ${result}`;
  const runtimePara = document.createElement("p");
  runtimePara.textContent = `Runtime: ${time} ms`;
  const ratingPara = document.createElement("p");
  ratingPara.classList.add("has-text-weight-bold");
  const ratingSpan = document.createElement("span");
  ratingSpan.classList.add("icon");
  const ratingIcon = document.createElement("i");
  ratingSpan.append(ratingIcon);
  ratingPara.append(ratingSpan);

  const addMessage = (msg) => ratingPara.prepend(document.createTextNode(msg));

  if (time > 500 && time < 5000) {
    addMessage("OK");
    ratingIcon.classList.add("fas", "fa-exclamation-triangle");
    ratingPara.classList.add("has-text-warning");
  } else if (time > 5000) {
    addMessage("BAD");
    ratingIcon.classList.add("fas", "fa-thumbs-down");
    ratingPara.classList.add("has-text-danger");
  } else {
    addMessage("GOOD");
    ratingIcon.classList.add("fas", "fa-thumbs-up");
    ratingPara.classList.add("has-text-success");
  }

  return [solutionPara, runtimePara, ratingPara];
};