function cake(x, y){
  const total = y.split('').map((l, i) => {
    return i % 2 === 1 ? l.charCodeAt(l) - 97 : l.charCodeAt(l)
  
  }).reduce((acc, curr) => acc + curr);
  console.log(total);
  console.log(x * 0.7);
  return total > x * 0.7 ? 'Fire!' : 'That was close!';
};

console.log(cake(149, 'cl'));
console.log(cake(680, 'mvvxbfvm'));