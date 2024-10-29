function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    var sMap = {};
    var max = 0;
    for (let i=0, j=0; i<s.length; ++i) {
        j = sMap[s[i]] ? Math.max(j, sMap[s[i]]) : j;
        sMap[s[i]] = i + 1;
        max = Math.max(max, i - j + 1);
    }
    return max;
}
