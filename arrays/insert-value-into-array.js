Array.prototype.insert = function (index, value) {
  for (let i = 0; i < value.length; i++) {
    return;
  }

  return [...this.slice(0, index), value, ...this.slice(index)];
}

console.log(arr.insert(0,0).insert(10, 2).insert(0, 10));
