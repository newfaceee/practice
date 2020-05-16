function removeDuplicateWords (s) {
  const res = [];
  const words = s.split(' ');
  words.forEach((word) => {
    if (!res.includes(word)) {
      res.push(word);
    }
  });
  return res;
}
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
