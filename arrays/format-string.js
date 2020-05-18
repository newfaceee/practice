function list(names){
  let res = '';
  for (let i = 0; i < names.length; i++) {
    const {name} = names[i];
    if (i === names.length - 1) {
      res += name;
    } else {
      res += name;
      if ((i === names.length - 2 && names.length >= 3) || names.length === 2) {
        res += ' & ';
      } else {
        res += ', ';
      }
    }
  }
  return res;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));