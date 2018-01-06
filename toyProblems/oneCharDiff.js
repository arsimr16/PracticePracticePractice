/*
Given a string and array of strings, find whether the array contains a string with one character difference from the given string. Array may contain string of different lengths. 

Ex: Given string


banana
and array is


[bana, apple, banaba, bonanza, banamf]
*/

var testArr = ['bana', 'apple', 'banaba', 'bonanza', 'banamf'];

// I: a string
// O: boolean - whether arr contains string with one char diff
// C: none
// E: only true if one char diff (false if same string); 

// iterate through arr
// check len of curr item (must be === str or +- 1)
// if len is valid
// compare each char to str
  // if lengths are equal 
    // check each letter, if any char is not equal
    // increment count of differences
    // if differences === 1 -> false 
  // if lengths are different
    // iterate through longer string
    // if longer string - curr char === shorter string
      // return true
    // if we reach end and nothing was equal
      // return false

const containsDiffStr = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === str.length) {
      let diff = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] !== str[j]) {
          diff += 1;
        }
      }
      if (diff === 1) {
        return true;
      } else {
        diff = 0;
      }
    } else if (arr[i].length === str.length - 1 || arr[i].length === str.length + 1) {
      const longer = arr[i].length > str.length ? arr[i] : str;
      const shorter = arr[i].length < str.length ? arr[i] : str;
      for (let k = 0; k < longer.length; k++) {
        let strWOCurr = longer.split('').splice(k, 1).join('');
        if (strWOCurr === shorter) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(containsDiffStr(testArr, 'banana')); // true
console.log(containsDiffStr(testArr, 'alex')); // false
console.log(containsDiffStr(testArr, 'apple')); // false

/*
Given a start string, end string and a set of strings, find if there exists a path between the start string and end string via the set of strings. 
A path exists if we can get from start string to end string by changing (no addition/removal) only one character at a time. The restriction is that the new string generated after changing one character has to be in the set. 
start: "cog" 
end: "bad" 
set: ["bag", "cag", "cat", "con", "rat", "sat", "fog"] 
one of the paths: "cog" -> “cag” -> "bag" -> "bad"

*/

let sampleSet = ["bag", "cag", "cat", "con", "rat", "sat", "fog"];

// I: start str, end str, set of strings
// O: boolean - whether one (any) path from start to end, where each step changes by only 1 char (if exists) (false otherwise)
// C: can only use words in the set
// E: use at least one word in set (e.g. if start === end)

// helper function to check 
// validStep
// I: arr, str
// O: which words are one char away from curr word
// C: 
// E:
// (use logic from above fn)
// filter words from set that are not same length as str
// pass in filtered list to above fn (with str)

// if there is a valid step from start to any word in set
  // iterate through valid next steps
    // if curr potential next step is one step away from end
      // return true
    // if no words are one step from end
      // try each next step and see what they are one step away from
        // test if those potential next steps are one step from end
        // etc. 
// else return false