/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const history = {};
  while (!history[n]) {
    const next = getSquared(String(n));
    if (next === 1) return true;
    history[n] = next;
    n = next;
  }
  return false;
};

const getSquared = (n) => {
  let i = 0,
    sum = 0,
    l = n.length;

  while (i < l) {
    sum = sum + Math.pow(Number(n[i]), 2);
    i++;
  }

  return sum;
};

// testing
// console.log(isHappy(19));
// console.log(isHappy(2));
// console.log(isHappy(220202020));
