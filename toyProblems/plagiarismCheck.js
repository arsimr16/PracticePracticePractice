/*Ever so often on Codefights, a user tries to submit a duplicate solution they copied from someone else. Generally these are pretty easy to detect and block. However, it gets trickier when you have a duplicate solution with some variables renamed to avoid getting caught.

The cheating usually happens as follows: in a text editor the "Find and replace" function is applied to all occurrences of some variable name A that consists of letters, digits, underscores, and starts with a non-digit character (since it's a variable name), to change it to some other variable name B that fulfills the same constraints.

It would appear that after applying this "Find and replace" procedure multiple times it would be impossible to detect duplicates, but this isn't the case. Your goal is to implement an algorithm that compares two code snippets and determines whether one of them could be produced from the other using the above-described approach.

Note. Here is a formal definition of how "Find and replace" function works. When searching for string A to replace all of its occurrences in string S with string B, it first finds the leftmost occurrence of A in S. Then it replaces this occurrence of A with B. Then it repeats the above procedure for the suffix of S which starts immediately after the last character of the inserted copy of B. The process repeats until the remaining suffix contains no occurrences of A.

Example

For

code1 = ["def is_even_sum(a, b):",
         "    return (a + b) % 2 == 0"]
and

code2 = ["def is_even_sum(summand_1, summand_2):",
         "    return (summand_1 + summand_2) % 2 == 0"]
the output should be plagiarismCheck(code1, code2) = true.

All occurrences of a are replaced with summand_1, and all occurrences of b are replaced with summand_2.

For

code1 = ["function is_even_sum(a, b) {",
         "  return (a + b) % 2 === 0;",
         "}"]
and

code2 = ["function is_even_sum(a, b) {",
         "  return (a + b) % 2 !== 1;",
         "}"]
the output should be plagiarismCheck(code1, code2) = false.

Input/Output

[time limit] 4000ms (js)
[input] array.string code1

Guaranteed constraints:
1 ≤ code1.length ≤ 60,
0 ≤ code1[i].length ≤ 100.

[input] array.string code2

Guaranteed constraints:
1 ≤ code2.length ≤ 60,
0 ≤ code2[i].length ≤ 100.

[output] boolean

true if code2 can be obtained from code1 using zero or more "Find and replace" operations, false otherwise.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/

function plagiarismCheck(code1, code2) {
    // get arguments for both code snippets
    const code1Args = getArgsList(code1);
    const code2Args = getArgsList(code2);
    // stringify code snippets
    code1 = JSON.stringify(code1);
    code2 = JSON.stringify(code2);
    // replace args in each snippet
    code1 = replaceArgs(code1, code1Args);
    code2 = replaceArgs(code2, code2Args);
    // if new strings are equal, there is plagiarism
    console.log(code1);
    console.log(code2);
    return code1 === code2;
}

function replaceArgs(code, args) {
    let i = 0;
    args.forEach(arg => {
        const re = new RegExp(arg, 'g');
        code = code.replace(re, `argument${i}`);
        i++;
    });
    return code;
}

function getArgsList(code) {
    const start = code[0].indexOf('(');
    const end = code[0].indexOf(')');
    let codeArgs = code[0].slice(start + 1, end);
    codeArgs = codeArgs.replace(/ /g, '').split(',');
    return codeArgs;
}


/* current implementation does not work for the following examples:

code1: ["def return_first(f, s):", 
 "  t = f", 
 "  return f"]
code2: ["def return_first(f, s):", 
 "  f = f", 
 "  return f"]



code1: ["def return_smth(a, b):", 
 "  return a + a"]
code2: ["def return_smth(b, a):", 
 "  return b + b"]



code1: ["def f(a,b)", 
 "    return a + b"]
code2: ["def f(b,a)", 
 "    return b + a"]

 */
 