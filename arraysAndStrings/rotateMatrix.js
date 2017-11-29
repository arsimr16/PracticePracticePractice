// given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees.  Can you do this in place?

// 1 byte = 8 bits (e.g. 00101110)
// 1 byte = 1 char (e.g. 'a', 'B', '$', '8');
// 4 bytes = 4 characters

// I: an image represented by an NxN matrix
// O: the image rotated 90 degrees (the problem does not specify in which direction)
// C: can you do this in place?
// E: empty image?

/*
[[0, 1],
 [2, 3]]

 becomes

[[2, 0],
 [3, 1]]
*/

/*
[[0, 1, 2],
 [3, 4, 5],
 [6, 7, 8]]
 
 becomes 

[[6, 3, 0],
 [7, 4, 1],
 [8, 5, 2]]
*/

/*
[[0,  1,  2,  3],
 [4,  5,  6,  7],
 [8,  9,  10, 11],
 [12, 13, 14, 15]]

  becomes

 [[12, 8,  4, 0],
  [13, 9,  5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3]]
*/
const rotateMatrix = () => {

};

