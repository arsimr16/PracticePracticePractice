// /*In the "Challenges" section on CodeFights a user can solve one of the existing challenges or submit their own. Each challenge has its own scoreboard organized by programming language. Solutions in these scoreboards are sorted according to their length. When the length of a solution is calculated, all comments and spaces are ignored. Your task is to implement a simplified version of this length calculator.

// Assume that there are only two types of comments:

// line-comment: starting with '//' and ending at the end of the line;
// block-comment: starting with '/*', and ending with the first occurrence of '*/'. It may span several lines.*/
// /*Each non-space character outside comments adds 1 to the total length.

// Note that all characters inside each comment are ignored, so they don't introduce nested comments. See the examples for more details.

// Also note that outside any other comment both '//' and '/*' start a new comment (i.e. in this task you don't have to consider the cases where '//', '/*' or '*/' appear inside a string literal).
// *//*
// Example

// For

// source = ["int a = 2;",
//           "int b = 47;/*37;*///41;",
//           "int c = 3/*4//5*/;",
//           "return a / b * c/*a /* b / c*/;"]
// the output should be shortestSolutionLength(source) = 34.

// In the 1st line there are 7 non-space characters;
// In the 2nd line there are 2 comments - /*37;*/ and //41;. Besides those there are only 8 non-space characters;
// The 3rd line contains 1 comment - /*4//5*/, and 7 non-space characters;
// The last line of code has 1 comment - /*a /* b / c*/, and 12 non-space characters;
// In summary, there are 7 + 8 + 7 + 12 = 34 countable characters.
// For

// source = ["var a = 2;",
//           "/*",
//           "var b = 2;",
//           "if (a === b) {",
//           "  b = a + 1;",
//           "  //b = a * 2 - 1;",
//           "}",
//           "*/",
//           "var b = 3;",
//           "return a * b;"]
// the output should be shortestSolutionLength(source) = 24.

// Here the code contains one block-comment that covers lines 2 to 8 (1-based). Other lines don't contain comments and have 7, 7, 10 symbols to count, respectively. So, the answer is 7 + 7 + 10 = 24.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.string source

// Guaranteed constraints:
// 1 ≤ source.length ≤ 10,
// 1 ≤ source[i].length ≤ 150.

// [output] integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }
// */

function shortestSolutionLength(source) {
  let charCount = 0;
  let insideComment = false;
  source.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      // if we aren't already inside a comment and the curr char is not ' ' or '/'
      if (item[i] !== ' ' && !insideComment && item[i] !== '/') {
        charCount++; 
      // check for edge case where 
      } else if (!insideComment && item[i] === '/' && item [i + 1] !== '/' && item[i + 1] !== '*') {
        charCount++;
      // if we aren't already inside a comment and we reach '//'
      } else if (item[i] === '/' && item[i + 1] === '/' && !insideComment) {
        // do not count rest of line
        i = item.length;
      // if we aren't already inside a comment and we reach '/*'
      } else if (item[i] === '/' && item[i + 1] === '*' && !insideComment) {
        // look for end of comment
        insideComment = true;
        i += 1;
      // if we are inside a comment and reach '*/'
      } else if (insideComment && item[i] === '*' && item[i + 1] === '/') {
        // we reached end of comment
        insideComment = false;
        i += 1;
      }
    }
  });
  return charCount;
}