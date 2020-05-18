function min(arr, toReturn) {
  return arr.indexOf(Math.min(...arr));
}
console.log(min([1,2,3,4,5], 'index'));