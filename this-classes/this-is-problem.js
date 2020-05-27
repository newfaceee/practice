class NameMe {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get name() {
    return this._firstName + ' ' + this._lastName;
  }
}
const n = new NameMe('John', 'Doe');
console.log(n.firstName);
console.log(n.lastName);

function sum (a) {
  return function (b) {
    return a + b;
  }
}