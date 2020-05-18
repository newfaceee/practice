function sort(initialArray, sortingArray) {
  const res = [];
  for (let i = 0; i < initialArray.length; i++) {
    res[sortingArray[i]] = initialArray[i];
  }
  return res;
}
console.log(sort([1, 2, 3, 4, 5], [0, 1,2, 3, 4]));