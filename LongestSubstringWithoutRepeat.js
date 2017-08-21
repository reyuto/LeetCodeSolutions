var isValid = function(s) {
  var l = s.length;
  var start = 0;
  while (start < l) {
    if (s.indexOf(s[start], start+1) > -1) {
      return false;
    }
    start++;
  }
  return l;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var l = s.length;
  var cL = l;
  if (l <= 1) return l;
  do {
    var count = cL - l + 1;
    var start = 0;
    while (count--) {
      var subS = isValid(s.substr(start, l));
      if (subS) return subS;
      start += 1;
    }
  } while (l--);
};
