// design a method to find the frequency of occurrences of any given work in a book.  
// What if we were running this algorithm multiple times?

/*

If this algorithm is going to be run many times, then it would be valuable to index the entire book.
Then you would have a concordance of the word counts for all unique words.  Ideally this would be
built as the book is written.  Once the book was indexed, word count lookups would be O(1);

If the book isn't already indexed and the algorithm wouldn't be run enough times for indexing to be useful,
we need another approach.

The slowest brute force method would be to iterate though all the words in the entire book and keep track of 
the current count of a particular word.  We need to look at each word anyway, but this would not help future 
invocations of this function.

We could add a cache so that at least we wouldn't have to iterate through the whole book again for
the same word twice.

For this problem, it would probably make sense to make our index case-insensitive
We might want to index punctuation also.  Either way we would need to be careful about how we are
splitting the text and counting words.

*/
