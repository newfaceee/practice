function anagrams(word, words) {

  return words.filter((w) => {
    const lettersCount = {};
    if (w.length !== word.length) {
      return false;
    }
    for (let i = 0; i < words.length; i++) {
      const a = word[i];
      const b = w[i];
      lettersCount[a] = (lettersCount[a] || 0) + 1;
      lettersCount[b] = (lettersCount[b] || 0) - 1;
    }
    console.log(lettersCount);
    for (const value of Object.values(lettersCount)) {
      console.log(value);
      if (value !== 0) {
        return false;
      }
    }
    return true;
  });
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));