// This is what I was able to get done in 45 mins during a technical phone screen:

// Given a string of equation, and the value of one variable x, 
// calculate the value of another variable y. The equation may contain x, y, 
// +(plus sign), -(minus sign), =(equal sign), 0-9, and spaces.
// For example:
// "x + 1 + 2y = 0", x = 1 => y = -1
// "x - y = y - 1", x = 1 => y = 1

// substitute x's with passed in value
// isolate y to one side
// simplify everything as much as possible
// return value for y 

// parse input string into math expression
    // iterate through string, separate values based on spaces and look for special chars

// assume that x and y are always in string
// think about multiple xs or ys

// [x, +, 1, 2y, = 0]
// [2, +, 1, [2 * y], =, 0]
// 3 + [2 * y] = 0 + 0
// '2 + 1 + (2 * y) = 0'
// [y = -3/2]

// left = 3
// right = 0

const arrToExpression = (arr) => {
    let result = '';
    let left = 0;
    let right = 0;
    let seenEquals = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '=') {
            seenEquals = true;
            result += '=';
        }
        if (arr[i] !== '+' && arr[i] !== '-') {
            let subtract = arr[i - 1] === '-';
            const num = // turn string into num
            if (subtract) {
                num = -num;
            }
            if (!seenEquals) {
                // add num to left
            } else {
                // add num to right
            }
        } else if (arr[i] === 'y') {
            result += 'y';
        } else {
            result += `+ ${arr[i]}`;
        }
    }
    return `${left} + ${result} + ${right}`;
    
};

const parseString = (str) => {
    str = str.split(' ');
    return str.map(item => {
        if ((item.indexOf('x') !== -1) && item.length > 1) {
            item = str.replace(/x/, '');
            return [item * x];
        } else if ((item.indexOf('y') !== -1) && item.length > 1) {
            item = str.replace(/y/, '');
            return [item * y];
        }
    });
};

const substitueX = (arr, x) => {
    arr = JSON.stringify(arr);
    arr.replace(/x/, x);
    return JSON.parse(arr);
};

const solveForY = (str, x) => {
    let arr = parseString(str);
    arr = substitueX(arr, x);
};
