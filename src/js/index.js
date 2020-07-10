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

// Solve the problem with Web Workers to not block the main thread.
const calculateSolution = (solution, content, btn) => {
  if (window.Worker) {
    const calculationWorker = new Worker("./src/js/web-worker/worker.js");
    calculationWorker.postMessage(solution);
    calculationWorker.addEventListener("message", ({ data }) => {
      content.prepend(...formatResult(data));
      btn.removeEventListener("click", calculateSolution);
      btn.remove();
    });
  }
};

// Render all solutions to the solved problems.
const renderSolutions = (id) => {
  const url = "https://projecteuler.net";
  const problems = document.getElementById(id);
  const container = document.createElement("div");
  container.className = "container";
  const columns = document.createElement("div");
  columns.className = "columns is-multiline";
  container.append(columns);

  for (let i in solutions) {
    const solution = solutions[i];
    const problem = document.createElement("div");
    problem.className = "column is-one-quarter";
    const card = document.createElement("div");
    card.className = "card";
    const cardHeader = document.createElement("header");
    cardHeader.className = "card-header";
    const cardAnchor = document.createElement("a");
    cardAnchor.className = "card-header-title";
    cardAnchor.href = `${url}/problem=${getProblemNumber(solution)}`;
    cardAnchor.textContent = formatName(solution);
    cardHeader.append(cardAnchor);

    // Only shows the solutions after the button has been clicked.
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    const showSolutionBtn = document.createElement("button");
    showSolutionBtn.className = "button is-primary";
    showSolutionBtn.textContent = "Show solution";
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
