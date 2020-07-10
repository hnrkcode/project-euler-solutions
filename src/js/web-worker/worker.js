importScripts("./utils/timer.js");

self.addEventListener("message", ({ data }) => {
  importScripts("./problems/" + data + ".js");

  const func = eval(data);
  const solutionData = timeFunc(func);

  self.postMessage(solutionData);
});
