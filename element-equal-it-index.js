function indexEqualsValue(a) {
  let start = 0;
  let end = a.length - 1;
  let res = -1;
  while(start <= end) {
    const i = Math.floor((start + end) / 2);
    if (a[i] > i) {
      end = i;
    } else if (a[i] < i) {
      start = i + 1;
    } else {
      res = i;
      end = i;
    }
  }
  return res;
}
console.log(indexEqualsValue([-8,0,2,5])); // 2
console.log(indexEqualsValue([-1,0,3,6])); // - 1
console.log(indexEqualsValue([-3,0,1,3,10])); // 3
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15])); // 1
console.log(indexEqualsValue([9,10,11,12,13,14])); // -1
console.log(indexEqualsValue([0])); //0