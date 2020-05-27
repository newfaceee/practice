function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j].sort((a, b) => a - b);
      }
    } 
  }
}
console.log(twoSum([1,2,3], 4));