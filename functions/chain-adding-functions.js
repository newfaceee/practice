function add(n) {
  const fn = function(x) {
    return n + add(x);
  }
  fn.valueOf = function() {
    return n;
  }
  return fn;
}
// console.log(typeof add(4));
console.log(add(4)(3));