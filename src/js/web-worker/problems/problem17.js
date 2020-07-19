const ones = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

const tens = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const hundreds = "hundred";
const thousands = "thousand";

const teenEdgeCase = (index) => {
  const teens = "teen";

  if (index === 3) return "thir" + teens;
  if (index === 5) return "fif" + teens;
  if (index === 8) return ones[index].slice(0, -1) + teens;

  return ones[index] + teens;
};

const index = (n, type) => {
  if (type === "one") return n % 10;
  if (type === "ten") return n > 19 && n < 100 ? ~~(n / 10) : ~~(n / 10) % 10;
  if (type === "hundred") return ~~(n / 100) % 10;
};

const problem17 = (max = 1000) => {
  let word = "";
  let letters = 0;

  for (let num = 1; num <= max; num++) {
    const one = index(num, "one");
    const ten = index(num, "ten");
    const hundred = index(num, "hundred");

    if (num < 13) word = ones[num];
    if (num > 12 && num < 20) word = teenEdgeCase(one);
    if (num > 19 && num < 100) word = tens[ten] + ones[one];

    if (num > 99 && num < 1000) {
      if (ten < 1) {
        if (one < 1) word = ones[hundred] + hundreds;
        else word = ones[hundred] + hundreds + "and" + ones[one];
      } else if (ten > 0 && ten < 2) {
        if (one < 3) word = ones[hundred] + hundreds + "and" + ones[one + 10];
        else word = ones[hundred] + hundreds + "and" + teenEdgeCase(one);
      } else {
        word = ones[hundred] + hundreds + "and" + tens[ten] + ones[one];
      }
    }

    if (num === 1000) word = ones[num / 1000] + thousands;

    letters += word.length;
  }

  return letters;
};
