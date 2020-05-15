function zeroPlentiful(arr){
  const res = [];
  let str = '';
  for (let i = 0; i < arr.length; i++) {
      while (arr[i] === 0) {
        str += '0';
        i++;
      }
      if (str.length < 4 && str.length > 0) {
        return 0;
      } else if (str.length >= 4) {
        res.push(str);
        str = '';
      }
  }
  return res.length;
}
console.log(zeroPlentiful([1,1,0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]));