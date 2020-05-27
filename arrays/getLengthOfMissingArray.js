function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays.length);
  const sortedArray = Array.from(arrayOfArrays).sort((a, b) => a.length - b.length);
  let missingLength;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i].length !== i + 1) {
      return missingLength = i + 1;
    }
  }
}
// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([ ]))