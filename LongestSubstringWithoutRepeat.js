function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    var sMap = {};
    var max = 0;
    for (let i=0, j=0; i<s.length; ++i) {
        if (sMap[s[i]]) {
            j = Math.max(j, sMap[s[i]] + 1);
        }
        sMap[s[i]] = i;
        max = Math.max(max, i - j + 1);
    }
    return max;
}
