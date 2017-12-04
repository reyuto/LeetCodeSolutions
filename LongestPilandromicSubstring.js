/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    var l = s.length;
    var res = s;
    while (l--) {
        for (var i=0; i<(s.length - l); i++) {
            res = s.substr(i, l+1);
            if (res === res.split('').slice().reverse().join('')) return res;
        }
    }
};
