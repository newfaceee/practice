Array.prototype.square = function() {
  return this.map(it => it **2);
}

Array.prototype.cube = function() {
  return this.map(it => it**3);
}

Array.prototype.average = function() {
  return this.length > 0 ?  this.reduce((acc, curr) => acc + curr) / this.length : NaN;
}

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr);
}

Array.prototype.even = function() {
  return this.filter(it => it % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter(it => it % 2 === 1);
}

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());