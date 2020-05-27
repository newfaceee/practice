function firstDuplicate1(a) {
  let duplicates = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length ; j++) {
      if (a[i] === a[j]) {
        duplicates.push(j);
      }
    }
  }
  return duplicates.length > 0 ? a[Math.min(...duplicates)] : -1;
} 
// firstDuplicate1([2, 1, 3, 5, 3, 2]);

function firstDuplicate2(a) {
  const numbers = {};
  let duplicates = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] in numbers) {
      duplicates.push(i);
    } else {
      numbers[a[i]] = 1;
    }
  }
  return duplicates.length > 0 ? a[Math.min(...duplicates)] : -1;
}
// firstDuplicate2([2, 1, 3, 5, 3, 2]);
firstDuplicate2([2, 2]);