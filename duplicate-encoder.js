function duplicateEncode(word){
  const letters = {};
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i].toLowerCase();
    if (letters.hasOwnProperty(currentLetter)) {
      letters[currentLetter] += 1;
    } else {
      letters[currentLetter] = 1;
    }
  }
  console.log(letters);
  return word.split('').map((letter) => {
    return letters[letter.toLowerCase()] > 1 ? ')' : '('; 
  }).join('');
}

console.log(duplicateEncode("GcGu(GGIGGGGGJFGbGG"));
console.log(duplicateEncode("(( @"));
