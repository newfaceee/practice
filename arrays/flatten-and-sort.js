"use strict";

function flattenAndSort(array) {
  const copiedArray = Array.from(array);
  const flattenArray = [];
  while(copiedArray.length > 0) {
    const first = copiedArray.shift();
    if (Array.isArray(first)) {
      copiedArray.unshift(...first);
    } else {
      flattenArray.push(first);
    }
  }
  return flattenArray.sort((a, b) => a - b);
}
console.log(flattenAndSort([]));
console.log(flattenAndSort([[3, 2, 1], [7, 105, 8], [6, 4, 5]]));