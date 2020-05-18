Array.prototype.insert = function (index, value) {
  return [...this.slice(0, index), value, ...this.slice(index)];
}


console.log(['1', 2, 4].insert(1, 's'));