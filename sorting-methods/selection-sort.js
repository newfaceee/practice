function selectionSort(arr) {
  const copiedArr = Array.from(arr);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const minElement = Math.min(...copiedArr);
    res.push(minElement);
    copiedArr.splice(copiedArr.indexOf(minElement), 1);
  };
  return res;
}
console.log(selectionSort([13,5,1,23,3,2]));
