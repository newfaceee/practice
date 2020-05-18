function alphabetized(s) {
  const arr = s.split('').filter((it) => {
    return (it.toLowerCase().charCodeAt(0) >= 97 && it.toLowerCase().charCodeAt(0) <= 122);
  });
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {

      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        let swap = arr[j+1];
        arr[j + 1] = arr[j];
        arr[j] = swap; 
      }
    }
  }
  return arr.join('');
}
console.log(alphabetized('The Holy Bible'))
console.log(alphabetized('!#$%&()*+,-=@^_`'))
