function firstNotRepeatingCharacter(s) {
  const letters = s.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])) {
      return letters[i];
    }
  }
  return '_';
}
console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));