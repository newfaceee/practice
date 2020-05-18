// const insert = (arr, index, value) => {
//   return [...arr.slice(0, index), value, ...arr.slice(index)];
// }
// console.log(insert([1,2,3], 2, 42));

Array.prototype.insert = function (index, value) {
  for (let i = 0; i < value.length; i++) {
    return;
  }

  return [...this.slice(0, index), value, ...this.slice(index)];
}
const arr = [0];

console.log(arr.insert(0,0).insert(10, 2).insert(0, 10));