function solution(str){
  let res = [];
  for (let i = 0; i < str.length; i += 2) {
    res.push(str[i] + (str[i + 1] || '_'));
  }
  return res;
} 

console.log(solution("abcde"));