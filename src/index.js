import solutions from "./problems/problems.js";

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

// Render all solutions to the solved problems.
const renderSolutions = (id) => {
  const url = "https://projecteuler.net";
  const problems = document.getElementById(id);
  const header = document.createElement("h1");
  header.textContent = "Project Euler Solutions";
  problems.append(header);

  for (let i in solutions) {
    const problem = document.createElement("div");
    const problemHeader = document.createElement("h2");
    const problemAnchor = document.createElement("a");
    problemAnchor.href = `${url}/problem=${getProblemNumber(i)}`;
    problemAnchor.textContent = formatName(i);
    problemHeader.append(problemAnchor);

    // The solution is only calculated the first time the button is clicked.
    const calculateSolution = () => {
      problemPara.textContent = `Solution: ${solutions[i]()}`;
      showSolutionBtn.removeEventListener("click", calculateSolution);
    };

    // Only show the solutions after the button is clicked, because the page will
    // take forever to load if there's many problems.
    const problemPara = document.createElement("p");
    const showSolutionBtn = document.createElement("button");
    showSolutionBtn.textContent = "Show solution";
    showSolutionBtn.addEventListener("click", calculateSolution);

    problem.append(problemHeader, problemPara, showSolutionBtn);
    problems.append(problem);
  }
};

renderSolutions("problems");
