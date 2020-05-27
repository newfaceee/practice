const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

function compose(...functions) {

  return function(a) {
    let item = a;

    for (let i = functions.length - 1; i >= 0; i--) {
      item = functions[i](item);
    }
    return item;
  }
}
compose(multTwo, addOne)(5); // 12
compose(addOne, multTwo, addOne, addOne)(2); // 9
compose(addOne)(3); // 4
compose()(10) // 10

function compose2(...functions) {
  return function(n) {
    console.log(functions.reduceRight((res, func) => {
      return func(res);
    }, n));
  }
}
compose2(multTwo, addOne)(5); // 12
compose2(addOne, multTwo, addOne, addOne)(2); // 9
compose2(addOne)(3); // 4
compose2()(10) // 10