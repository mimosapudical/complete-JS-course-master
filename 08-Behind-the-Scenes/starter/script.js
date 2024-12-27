'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(me);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);
/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
*/
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    //const self = this;
    //const isMillenial = function () {
    //console.log(self));
    //console.log(self.year >= 1981 && self.year <= 1996);
    //}

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (...args) => {
  console.log(args); // Logs: [2, 5, 8]
  return args[0] + args[1];
};
addArrow(2, 5, 8); // Output: 7
//the original code with error
const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');
marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica1 };
jessicaCopy.LastName = 'Davis';

console.log(jessica1, jessicaCopy);
//jessicaCopy.familiy.push('John');

console.log('Before:', jessica1);
console.log('After:', jessicaCopy);

const jessicaClone = structuredClone(jessica1);
//jessicaClone.family.push('John');

console.log('Original:', jessica1);
console.log('Clone:', jessicaClone);
