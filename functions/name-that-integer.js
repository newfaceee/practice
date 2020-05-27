function detectInt(...args) {
  let i = 1;
  while (!args.every(it => it(i))) {
    i++;
  }
  return i;
}
