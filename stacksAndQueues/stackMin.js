// how would you design a stack which, in addition to push and pop, 
// has a function min which returns the minimum element?
// Push, pop, and min, should all operate in O(1) time

// I will assume we only have numeric values in the stack
// if there were non-numeric values, they would have to be converted to something numeric
// to determine what counts as the min.  This could be done by comparing
// string length, unicode values, true and false would become 1 and 0, etc.

// What happens in the case of a tie?  I will assume since this is a stack,
// that the most recently added of the tied items would be returned first

// if I keep a reference to the current minimum value,
// and update it if anything smaller is added, this would work well as 
// elements are added, but not when elements are removed.
// I would have to recalculate the min because I do not have a reference to 
// the previous min value and this would not be O(1) time

// if I kept another array or linked list with values sorted by min,
// this adding, and removing values would not be O(1) time

// having O(1) time for the min method, requires a little extra storage, but it is a good tradeoff

// as I build the stack, I store the current min at that point
// then when values are added and removed, I have the min at each point for all values below the current
// value in the stack

// when the stack is empty, there is no min value
// when the stack has one item, that item is the min
// for each subsequent item,
// compare the current value with the previous min value
// if it is less than the previous min, store the current value as the new min
// else store the previous min as the min for the stack including the new item

// the stack can either be implemented as an array or an object of tuples, 
// where the first value is the item, and the second value is the min
// (see both implementations in stack.js in the dataStructures directory)
