import { create } from "./main/elementCreater.js";
import solutions from "./main/solved-problems.js";
import { formatResult } from "./main/formater.js";

// Add space before the first digit in the string.
const addSpace = (str) => {
  const index = str.search(/\d/);
  return index !== -1 ? str.slice(0, index) + " " + str.slice(index) : str;
};

// Capitalize the first letter of a string.
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Format the problem name text.
const formatName = (str) => capitalize(addSpace(str));

const getProblemNumber = (str) => str.slice(str.search(/\d/));

const createLoader = (el) => {
  const loader = create({ tag: "div", classes: ["loader"] });
  el.prepend(loader);

  return loader;
};

// Solve the problem with Web Workers to not block the main thread.
const calculateSolution = (solution, content, btn) => {
  if (window.Worker) {
    const calculationWorker = new Worker("./src/js/web-worker/worker.js");
    calculationWorker.postMessage(solution);

    // Removed to prevent creating multiple worker threads for the same problem.
    btn.removeEventListener("click", calculateSolution);
    btn.remove();

    const loader = createLoader(content);

    // Listener waiting for worker ti finish so it can display the result and runtime.
    calculationWorker.addEventListener("message", ({ data }) => {
      loader.remove();
      content.prepend(...formatResult(data));
    });
  }
};

// Render all solutions to the solved problems.
const renderSolutions = (id) => {
  const url = "https://projecteuler.net";
  const problems = document.getElementById(id);
  const container = create({ tag: "div", classes: ["container"] });
  const columns = create({ tag: "div", classes: ["columns", "is-multiline"] });
  container.append(columns);

  for (let i in solutions) {
    const solution = solutions[i];
    const problem = create({
      tag: "div",
      classes: ["column", "is-one-quarter"],
    });
    const card = create({ tag: "div", classes: ["card"] });
    const cardHeader = create({ tag: "header", classes: ["card-header"] });
    const cardAnchor = create({
      tag: "a",
      classes: ["card-header-title"],
      href: `${url}/problem=${getProblemNumber(solution)}`,
      content: formatName(solution),
    });
    cardHeader.append(cardAnchor);

    // Only shows the solutions after the button has been clicked.
    const cardContent = create({ tag: "div", classes: ["card-content"] });
    const showSolutionBtn = create({
      tag: "button",
      classes: ["button", "is-primary"],
      content: "Show solution",
    });
    showSolutionBtn.addEventListener(
      "click",
      calculateSolution.bind(null, solution, cardContent, showSolutionBtn)
    );

    cardContent.append(showSolutionBtn);
    card.append(cardHeader, cardContent);
    problem.append(card);
    columns.append(problem);
    problems.append(container);
  }
};

renderSolutions("problems");
