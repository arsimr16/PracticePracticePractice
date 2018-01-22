function arrayOfArrayProducts(arr) {
  // if there is only one num in arr, return empty arr
  if (arr.length === 1) {
    return [];
  }
  // store curr left and right products at each index
  const left = [];
  const right = [];
  let currLeftProduct = 1;
  let currRightProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    left.push(currLeftProduct);
    currLeftProduct *= arr[i];
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    right[j] = currRightProduct;
    currRightProduct *= arr[j];
  }
  const result = [];
  // product at curr position = left product * right product
  for (let k = 0; k < left.length; k++) {
    result.push(left[k] * right[k]);
  }
  return result;
}

// time complexity: O(n)
// space complexity: O(n)
