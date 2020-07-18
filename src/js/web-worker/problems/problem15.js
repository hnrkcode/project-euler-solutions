importScripts("../web-worker/utils/helper.js");

const problem15 = (size = 20) => {
  const n = size * 2;
  const k = size;
  const routes = factorial(n) / (factorial(k) * factorial(n - k));

  return routes;
};
