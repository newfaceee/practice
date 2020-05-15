const flat = (arr) => {
  const copiedArr = Array.from(arr);
  const result = [];
  while(copiedArr.length > 0) {
    const first = copiedArr.shift();
    if (Array.isArray(first)) {
      copiedArr.unshift(...first);
    } else {
      result.push(first);
    }
  }
  return result;
};
console.log(flat([1,2,3,4,5,[6,7,[8,9]],10]));

