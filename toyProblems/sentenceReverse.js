/*
Sentence Reverse

You are given an array of characters arr that consists of sequences of 
characters separated by space characters. Each space-delimited sequence 
of characters defines a word.

Implement a function reverseWords that reverses the order of the words 
in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

// I: an arr of chars (words separated by spaces)
// O: an arr of chars separated by spaces (with words in reverse order)
// C: none (try to get linear time and constant space)
// E: empty arr, arr of only spaces, many spaces in a row, only one word
function reverseWords(arr) {
  // reverse all chars (to get words in correct order)
  mirrorReverse(arr, 0, arr.length - 1);
  // reverse chars in each word
  let wordStart = null;
  for (let i = 0; i < arr.length; i++) {
    // if we reach a space
    if (arr[i] === ' ') {
      // and already started tracking a word
      if (wordStart !== null) {
        // the word is over, reverse the chars
        mirrorReverse(arr, wordStart, i - 1);
        // reset wordStart to null;
        wordStart = null;
      }
    // if we reach the end of the arr
    } else if (i === arr.length - 1) {
      // and already started tracking a word
      if (wordStart !== null) {
        // reverse the final word
        mirrorReverse(arr, wordStart, i)
      }
    // if the curr char is not a space or the last char
    } else {
      // and we are not currently tracking a word
      if (wordStart === null) {
        // start tracking a new word
        wordStart = i;
      }
    }
  }
  return arr;
}
// time complexity: O(n)
// space complexity: O(1)

// I: an array, start and end indicies
// O: the same arr with the chars btw start and end (incl.) reversed
// C: none
// E: if start >= end nothing will happen
function mirrorReverse(arr, start, end) {
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
// time complexity: O(n) where n = length of word being reversed (end - start)
// space complexity: O(1)
