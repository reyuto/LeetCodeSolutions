/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let P = 0,
    R = nums[P],
    nR = R,
    nP = P,
    L = nums.length - 1; // 0-indexed to compare with range

  while (R < L) {
    let i = P + 1;
    // look through all ranges
    // within the array
    while (i <= P + R && i < L) {
      let r = nums[i];
      // clog(nums, i, r, P, R, nP, nR);
      if (i + r > P + R && i + r > nP + nR) {
        nR = r;
        nP = i;
        if (nP + nR >= L) {
          return true;
        }
      }
      i++;
    }

    // couldn't move forward, game end.
    if (P + R >= nP + nR) break;
    R = nR;
    P = nP;
  }

  return P + R >= L;
};

// testing
// const clog = console.log;
// clog(canJump([0]));
// clog(canJump([1]));
// clog(canJump([0, 0]));
// clog(canJump([1, 1, 1, 0]));
// clog(canJump([2, 3, 1, 1, 4]));
// clog(canJump([3, 2, 1, 0, 4]));
// clog(canJump([1, 1, 1, 1, 1]));
// clog(canJump([1, 2, 3, 4, 1]));
// clog(canJump([0, 0, 0, 0, 0]));
// clog(canJump([]));

/**
 * Solution 1.
 * - Check range on index 0, R
 * - If R is greater than length, return true
 * - Check range for each index between 0 and R, r
 * - If r is always less than equal to R, return false
 * - If r is greater than R, set R equal to r, go back to step 2
 */
