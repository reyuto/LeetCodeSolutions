/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const mappedDigits = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let output = [];

  if (digits.length == 0) return [];
  let i = 0;
  output.unshift(...mappedDigits[digits[i]]);
  while (++i < digits.length) {
    const mapD = mappedDigits[digits[i]];
    let j = 0,
      nextOutput = [];
    while (j < mapD.length) {
      output.forEach((d) => nextOutput.push(d + mapD[j]));
      j++;
    }
    output = nextOutput;
  }

  return output;
};

// testing
// console.log(letterCombinations("23"));
// console.log(letterCombinations(""));
// console.log(letterCombinations("2"));
// console.log(letterCombinations("729"));

// solution
/**
 * 1. Array multiplication
 * - store char as array in a map "2": ["a", "b", "c"]
 * - set first digit's mapped array to output
 * - loop through each next digit and multiply to get next output array
 * - return final result
 */
