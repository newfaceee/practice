function returns1 () { return 1; }
// spy.returned(1);
// spy.wasCalledWith('hello');
function spyOn (func) {
  let counter = 0;
  let allArgs = [];
  let val;
  const spy = function (...args) {
    counter++;
    allArgs.push(args);
    val = func(...args);
  }
  spy.callCount = function () {
    return counter;
  }
  spy.returned = function (value) {
    return value === val;
  }
  spy.wasCalledWith(value) {
    return allArgs.some(it => it === value);
  }
  return spy;
}

const spy = spyOn(returns1);
spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');
// spyOn.callCount = () => callCount;
console.log(spy.callCount());