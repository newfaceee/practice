function duplicateEncode(word){
  return word.toLowerCase().split('').map((letter, _, arr) => {
    return arr.lastIndexOf(letter) === arr.indexOf(letter) ? '(' : ')';
  }).join('');
}

console.log(duplicateEncode("GcGu(GGIGGGGGJFGbGG"));
console.log(duplicateEncode("(( @"));
