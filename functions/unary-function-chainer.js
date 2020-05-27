function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }

function chained(functions) {
  return function (number) {
    return functions.reduce((res, curr) => curr(res), number);
  }
}
chained([f1,f2,f3])(0);
chained([f1,f2,f3])(2);
chained([f3,f2,f1])(2);

chained([f4,f5,f6])("lorem ipsum");