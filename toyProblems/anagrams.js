// toy problem from Hack Reactor:

/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = (string) => {
  // store anagrams in object to ensure all values are unique
  const unique = {};
  // inner recursive function starts with empty string and passed in string
  const anagram = (ana, str) => {
    // if str is empty, there are no more letters left, add the new anagram to unique obj
    if (str === '') {
      unique[ana] = true;
    }
    // recursively call anagram
    // the first argument is the current anagram + each letter from the remaining string
    // the second argument is the leftover letters that have not been used yet
    for (let i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  }
  anagram('', string);
  return Object.keys(unique);
};

// this implementation passes all of their tests
