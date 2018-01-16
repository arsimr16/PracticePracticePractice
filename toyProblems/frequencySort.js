// leetcode #451

// passes all tests
var frequencySort = function(s) {
    var chars = {};
    var charsArr = [];
    for (var i = 0; i < s.length; i++) {
        if (chars[s[i]]) {
            chars[s[i]]++;
        } else {
            chars[s[i]] = 1;
        }
    }
    for (var char in chars) {
        charsArr.push([char, chars[char]]);
    }
    charsArr.sort((a, b) => {
        return b[1] - a[1];
    });
    var result = '';
    for (var j = 0; j < charsArr.length; j++) {
        while(charsArr[j][1] > 0) {
            result += charsArr[j][0];
            charsArr[j][1]--;
        }
    }
    return result;
};
