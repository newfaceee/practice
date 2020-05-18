const BubbleSort = (arr) => {
  for (let i = arr.length -1; i > 0; i--) {
    let wasSwaped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;

        wasSwaped = true;
      }
    }
     if (!wasSwaped) {
       break;
     }
  }
  return arr;
};  

console.log(BubbleSort([1,100,5,6,7]));