export const problem4 = () => {
  let palindromes = [];

  // Find largest palindrome made from the product of two 3-digit numbers.
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      const product = i * j;
      const reversedProduct = +product.toString().split("").reverse().join("");

      // Found palindrome.
      if (product === reversedProduct) {
        palindromes.push(product);
      }
    }
  }

  // Return largest palindrome.
  return Math.max(...palindromes);
};
