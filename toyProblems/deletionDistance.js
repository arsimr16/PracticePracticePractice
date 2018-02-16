/* The deletion distance between two strings is the minimum sum of ASCII 
values of characters that you need to delete in the two strings in order 
to have the same string. The deletion distance between cat and at is 99, 
because you can just delete the first character of cat and the ASCII value 
of 'c' is 99. The deletion distance between cat and bat is 98 + 99, because 
you need to delete the first character of both words. Of course, the deletion 
distance between two strings can't be greater than the sum of their total 
ASCII values, because you can always just delete both of the strings entirely. 
Implement an efficient function to find the deletion distance between two strings. 
You can refer to the Wikipedia article on the algorithm for edit distance 
if you want to. The algorithm there is not quite the same as the algorithm 
required here, but it's similar.
*/

// edge cases: strings are completely dissimilar -> deletion distance is sum of all chars in both strs
// 'ab', 'ba' -> minimum could be deleting a or deleting b, both end up with a str length of 1, 
// I don't think we necessarily need to calculate which has the lower ascii value, I think if we should be
// able to delete either and there are two valid answers.  I assume order matters, otherwise we could
// just see which letters do not occur in both strings
const getDeletionDistance = (str1, str2) => {
	let distance = 0;
	
	return distance;
};
