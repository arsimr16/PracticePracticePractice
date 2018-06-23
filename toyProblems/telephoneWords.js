// Leetcode 17 - passes all tests

var letterCombinations = function(digits) {
    if (digits === '') return [];
    const lookUp = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    
    const words = [];
    const lettersForDigits = (word, remainingDigits) => {
        if (remainingDigits.length === 0) {
            words.push(word);
            return;
        } else {
            for (let letter of lookUp[remainingDigits[0]]) {
                lettersForDigits(word + letter, remainingDigits.slice(1));
            }
        }
    };
    lettersForDigits('', digits);
    return words;
};