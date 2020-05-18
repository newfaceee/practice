// method for 2 arguments

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    }
  }
};

function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);
console.log(curriedSum(3)(4));

// method for n arguments 

function curry2(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function extendedSum(a, b, c) {
  return a + b + c;
}

const curriedExtendedSum = curry2(extendedSum);
console.log(curriedExtendedSum(1)(2)(3));
