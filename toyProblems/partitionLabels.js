/*
LEETCODE #763 Partition Labels

A string S of lowercase letters is given. We want to partition this string into 
as many parts as possible so that each letter appears in at most one part, 
and return a list of integers representing the size of these parts.

Example 1:
    Input: S = "ababcbacadefegdehijhklij"
Output: 
    [9,7,8]
Explanation:
    The partition is "ababcbaca", "defegde", "hijhklij".
    This is a partition so that each letter appears in at most one part.
    A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:
    S will have length in range [1, 500].
    S will consist of lowercase letters ('a' to 'z') only.
*/

const partitionLabels = S => {
    charsStartAndEnd = getFirstAndLastIndices(S);
    const ranges = [{ start: charsStartAndEnd[0].first, end: charsStartAndEnd[0].last }];
    for (let i = 1; i < charsStartAndEnd.length; i++) {
        const currRange = ranges[ranges.length - 1];
        const currChar = charsStartAndEnd[i];
        if (currChar.first < currRange.end) {
            currRange.end = Math.max(currRange.end, currChar.last);
        } else {
            ranges.push({ start: currChar.first, end: currChar.last });
        }
    }
    return ranges.map(range => range.end + 1 - range.start);
};

const getFirstAndLastIndices = S => {
    const uniqChars = new Set(S.split(''));
    const result = [];
    uniqChars.forEach(char => { 
        result.push({ 
            char, 
            first: S.indexOf(char), 
            last: S.lastIndexOf(char)
        });
    });
    return result;
};

// above code passes all tests on LeetCode