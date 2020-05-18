function solve(arr){  
  return arr.map((it) => {
    return it.toLowerCase().split('').filter((letter, index) => letter.charCodeAt(0) - 97 === index).length;
  });
};

console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));
