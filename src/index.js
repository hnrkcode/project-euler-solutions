import solutions from "./solvedProblems.js";
import { formatResult } from "./utils/timer.js";

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

// Dynamically imports and calculates the solution to the problem.
const calculateSolution = (solution, para, btn) => {
  import("./problems/" + solution + ".js").then((data) => {
    para.innerHTML = formatResult(data[solution]);
    btn.removeEventListener("click", calculateSolution);
    btn.remove();
  });
};

// Render all solutions to the solved problems.
const renderSolutions = (id) => {
  const url = "https://projecteuler.net";
  const problems = document.getElementById(id);
  const header = document.createElement("h1");
  header.textContent = "Project Euler Solutions";
  problems.append(header);

  for (let i in solutions) {
    const solution = solutions[i];
    const problem = document.createElement("div");
    const problemHeader = document.createElement("h2");
    const problemAnchor = document.createElement("a");
    problemAnchor.href = `${url}/problem=${getProblemNumber(solution)}`;
    problemAnchor.textContent = formatName(solution);
    problemHeader.append(problemAnchor);

    // Only shows the solutions after the button has been clicked.
    const problemPara = document.createElement("p");
    const showSolutionBtn = document.createElement("button");
    showSolutionBtn.textContent = "Show solution";
    showSolutionBtn.addEventListener(
      "click",
      calculateSolution.bind(null, solution, problemPara, showSolutionBtn)
    );

    problem.append(problemHeader, problemPara, showSolutionBtn);
    problems.append(problem);
  }
};

renderSolutions("problems");
