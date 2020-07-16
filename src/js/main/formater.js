import { create } from "./elementCreater.js";

// Return result and if the execution time is good, ok, or bad.
export const formatResult = (solutionData) => {
  const [result, time] = solutionData;

  const solutionPara = create({ tag: "p", content: `Solution: ${result}` });
  const runtimePara = create({ tag: "p", content: `Runtime: ${time} ms` });
  const ratingPara = create({ tag: "p", classes: ["has-text-weight-bold"] });
  const ratingSpan = create({ tag: "span", classes: ["icon"] });
  const ratingIcon = create({ tag: "i" });

  ratingSpan.append(ratingIcon);
  ratingPara.append(ratingSpan);

  const addMessage = (msg) => ratingPara.prepend(document.createTextNode(msg));

  if (time > 500 && time < 5000) {
    addMessage("OK");
    ratingIcon.classList.add("fas", "fa-exclamation-triangle");
    ratingPara.classList.add("has-text-warning");
  } else if (time > 5000 && time < 10000) {
    addMessage("SLOW");
    ratingIcon.classList.add("fas", "fa-thumbs-down");
    ratingPara.classList.add("has-text-danger");
  } else if (time > 10000) {
    addMessage("VERY SLOW");
    ratingIcon.classList.add("fas", "fa-thumbs-down");
    ratingPara.classList.add("has-text-danger");
  } else if (time > 50 && time < 500) {
    addMessage("FAST");
    ratingIcon.classList.add("fas", "fa-thumbs-up");
    ratingPara.classList.add("has-text-success");
  } else {
    addMessage("VERY FAST");
    ratingIcon.classList.add("fas", "fa-thumbs-up");
    ratingPara.classList.add("has-text-success");
  }

  return [solutionPara, runtimePara, ratingPara];
};
