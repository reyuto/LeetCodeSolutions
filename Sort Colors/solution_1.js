/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0,
    p0 = 0,
    p2 = nums.length - 1;

  while (i >= p0 && i <= p2 && p0 < p2) {
    if (nums[i] === 0 && p0 < i) {
      swap(nums, i, p0);
      p0++;
    } else if (nums[i] === 2 && i < p2) {
      swap(nums, i, p2);
      p2--;
    } else {
      i++;
    }
  }

  return nums;
};

const swap = (arr, i, j) => {
  let mid = arr[i];
  arr[i] = arr[j];
  arr[j] = mid;
};

// testing
// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([2, 0, 1]));
// console.log(sortColors([]));
// console.log(sortColors([2, 1]));
// console.log(sortColors([2, 0]));
// console.log(sortColors([1, 0]));
// console.log(sortColors([0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(sortColors([1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(sortColors([2, 2, 2, 2, 2, 2, 2, 2]));
// console.log(sortColors([0, 0, 0, 1, 1, 1, 2, 2, 2]));
// console.log(sortColors([1, 0, 2]));
// console.log(sortColors([1, 2, 0]));

/**
 * Solution 1
 * - Try in place sort
 * - Assume state is [0,0,0,1,2,0,2,1,2,2,2,2]
 * - p0 tracks the digit after last zero from the left p0=3
 * - p2 tracks the digit before first 2 from the right p2=7
 * - if all 0 and 2 are put in place, 1 will be left in the middle
 * - i=0, p0=0, p2=N
 * Step 1: arr[p0]==0 p0++, arr[p2]==2 p2--
 * i=p0+1
 */
