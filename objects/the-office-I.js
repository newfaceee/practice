function outed(meet, boss){
  const score = [];
  for ([key, value] of Object.entries(meet)) {
    key === boss ? score.push(value * 2) : score.push(value);
  }
  return score.reduce((acc, curr) => acc + curr) / Object.values(meet).length <= 5 ? 'Get Out Now!' :  'Nice Work Champ!';
}
console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'));