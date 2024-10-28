/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const output = [];
  const input = nums.sort((a, b) => a - b);
  // let counter = 0;
  let p1 = 0,
    p2 = 1,
    l = input.length;
  let p3 = l - 1;
  while (p1 + 2 < l) {
    // counter++;
    if (p1 >= p2 || p2 >= p3) {
      p1++;
      p2 = p1 + 1;
      p3 = l - 1;
      continue;
    }

    const sum = input[p1] + input[p2] + input[p3];
    if (sum === 0) {
      output.push([input[p1], input[p2], input[p3]]);
      p2++;
      p3--;
      continue;
    } else if (sum < 0) {
      // increase p2 if sum is smaller that 0
      p2++;
      continue;
    } else {
      // decrease p3 if sum is greater than 0
      p3--;
      continue;
    }
  }
  // console.log("loops run: ", counter);
  return removeDuplicates(output);
};

const removeDuplicates = (arr) => {
  // console.log("in remove duplicates ", arr);
  const l = arr.length;
  if (l == 0) return arr;
  let o = [];
  const resultsHash = {};
  for (let i = 0; i < l; i++) {
    const a = arr[i];
    const hash = a[0] + "$" + a[1] + "$" + a[2];
    if (!resultsHash[hash]) {
      o.push(a);
      resultsHash[hash] = true;
      // console.log(hash, o, a, resultsHash[hash], resultsHash);
    }
  }

  return o;
};

// tests
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
