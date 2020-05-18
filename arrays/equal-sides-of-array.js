const findEvenIndex = (arr) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0,i).reduce((acc,curr) => acc + curr, 0);
    const right = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
    if (left === right) {
      index = i;
    }
  }
  return index;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));