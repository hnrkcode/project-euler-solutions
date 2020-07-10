const problem9 = (arg = 1000) => {
  for (let a = 1; a < arg / 3; a++) {
    for (let b = a, c = 0; b < arg / 2; b++) {
      c = arg - a - b;
      // Found the Pythagorean triplet where a + b + c is same as "arg".
      if (a ** 2 + b ** 2 === c ** 2) return a * b * c;
    }
  }
};
