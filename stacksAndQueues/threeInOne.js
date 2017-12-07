// describe how you could use a single array to implement three stacks


// The particular implementation for this problem would depend on 
// what the stacks are being used for.

// Does one stack fill up, then the next stack starts, and finally the third stack?
// If so, this isn't really 3 stacks, it's more like 1.

// Are all the stacks fixed in size?  What happens when a stack is full?
// Either you can't add to a stack that is already full, or adding something
// removes an item from the bottom of the stack

// Are all the stacks equal in size?  Depending on what they will be used for,
// some stacks might need to be larger than others.

// What kind of support (i.e. what methods) do the stacks need?  Which methods will 
// be used most frequently?  Should we optimize for a certian method or methods?

// is the array used to store the three stacks fixed in size, or does it grow?
// does each stack grow as needed, only the final one, or none?


// if the stacks have fixed size (even or uneven doesn't matter) and
// cannot accept more values if full:

// populate array with null values
// store start indices for each stack

// to insert to a stack:
// iterate from start to end (start of next - 1 or arr.length for final stack)
// when you get to a null value, replace it with the new value
// if the stack is full, return null

// to remove from stack:
// iterate from end to start
// when you get to a non-null value, return that value and update the array at that index to equal null


// if the stacks are not fixed in size and can continue to grow until the array is full:

// start with assumption that all stacks will be equal in size
// when one stack fills up, shift items in other stacks to accomodate growth
// treat the array as circular, i.e. if items at the end need to be shifted, they get moved to the front
// keep track of the start indices for each stack and update as needed
