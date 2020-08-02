function isBeautifulString(inputString) {
  const uniqueLetters = Array.from(new Set(inputString.split("")));
  const allLetters = inputString.split("");
  const letters = {};
  for (let i = 0; i < allLetters.length; i++) {
    letters[allLetters[i]] = letters[allLetters[i]]
      ? letters[allLetters[i]] + 1
      : 1;
  }
  for (const letter of uniqueLetters) {
    const previousLetterCode = String.fromCharCode(
      letter.charCodeAt(0) - 1 < 97 ? 97 : letter.charCodeAt(0) - 1
    );
    if (!letters[previousLetterCode]) {
      return false;
    }
    if (letters[letter] > letters[previousLetterCode]) {
      return false;
    }
  }
  return true;
}

isBeautifulString('bbbaacdafe') // true
isBeautifulString('aabbb') // false
isBeautifulString('bbc') // false
