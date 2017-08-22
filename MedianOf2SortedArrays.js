/**
 * Considered to be a hard problem by LeetCode
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var l = nums1.length + nums2.length;
  var arr = [];
  var isOdd = !!(l % 2);
  var max = isOdd ? (l+1)/2 : l/2 + 1; // Math.floor is costly

  for(var i=0,j=0,k=0; (k < max && i < nums1.length && j < nums2.length); k++) {
    arr.push(nums1[i] >= nums2[j] ? nums2[j++] : nums1[i++]);
  }
  
  if (k < max) {
    arr = arr.concat(i < nums1.length ? nums1.slice(i, i + max - k) : nums2.slice(j, j + max - k));
  }

  l = arr.length - 1;
  return isOdd ? arr[l] : (arr[l] + arr[l-1])/2;
};
