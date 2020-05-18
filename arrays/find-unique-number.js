function findUnique(numbers) {
  const numbersCount = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbersCount.hasOwnProperty(numbers[i])) {
      numbersCount[numbers[i]] += 1;
    } else {
      numbersCount[numbers[i]] = 1;
    }
  }
  for (number in numbersCount) {
    if (numbersCount[number] === 1) {
      return numbersCount[number];
    }
  }
}
