function once(fn) {
  let wasCalledFirstTime = true;
  if (wasCalledFirstTime) {
    wasCalledFirstTime = false;
    return fn.apply(this, arguments);
  }
}

const sum = (a,b) => {
  return 'lol';
}
once(sum);
once(sum);
once(sum);
