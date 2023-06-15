'use strict';
/*
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) 
// console.log('I can drive');
// Dont't use these words for values!!!!!!!!
// const interface = 'Audio';
// const private = 532;
// const if = 23;

// FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function logger () {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();
// // Use functions over and over don't repeat yourself
// function fruitProcessor (appels, oranges) {
//   // console.log(appels, oranges);
//   const juice = `juice with ${appels} appels and ${oranges} oranges.`;
//   return juice;
// }

// const appeljuice = fruitProcessor(5, 0);
// console.log (appeljuice);
// // console.log (fruitProcessor (5,0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const Number = ('23');

function vinylPrinter (vinyl, ink) {
  const shirt = `Print shirts with ${vinyl} vinyl and ${ink} ink to make a shirt!`;
  return shirt;
}

const clothes = vinylPrinter(2, 6);
console.log(vinylPrinter(2, 6));



//function declaration!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function calcAge1(birthYear) {
  return 2037 - birthYear;
} 
const age1 = calcAge1(1991);


//function expression!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



//arrow function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3 (1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 -age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log (yearsUntilRetirement(1991, 'Jonas'));
console.log (yearsUntilRetirement(1980, 'Bob'));


// Calling functions from other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor (apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


// Functions Review!!!!!!!!!!!!!!!!!!!!!

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
 }

console.log (yearsUntilRetirement(1991, 'Jonas'));
console.log (yearsUntilRetirement(1950, 'Mike'));


// Arays!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven','Peter'];
console.log (friends);

const year = new Array(1991, 1984, 2008, 2022);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1 ]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'jonas'
const jonas = [firstName, 'schmd', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Excercise!!!!!!!!!!!!!!!!!!!!!!
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
  console.log(ages);


const friends = ['Micheal', 'Steven','Peter'];

// Add elements at end of array
const newLength = friends.push('Jay');
console.log(friends)
console.log(newLength);

adds elements to the start of an array
friends.unshift('John');
console.log(friends);

// Remove last elements of an array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);


//Removes first element of an array
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

Includes: Return true or false
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


// Objects!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Recap Array
const jonasArray = [
  'Jonas',
  'Schmed',
  2037 -1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas', 
  lastName: 'Schmed',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


// How to retrieve data from objects!!!!!!
const jonas = {
  firstName: 'Jonas', 
  lastName: 'Schmed',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas)

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do You want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else { 
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



const jonas = {
  firstName: 'Jonas', 
  lastName: 'Schmed',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job}, 
    and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a drivers license"
console.log(jonas.getSummary());


// For Loop

// console.log('Weight Repitition 1');
// console.log('Weight Repitition 2');
// console.log('Weight Repitition 3');
// console.log('Weight Repitition 4');
// console.log('Weight Repitition 5');
// console.log('Weight Repitition 6');
// console.log('Weight Repitition 7');
// console.log('Weight Repitition 8');
// console.log('Weight Repitition 9');
// console.log('Weight Repitition 10');

//  For loop keeps running while condition is TRUE!!!
// for(let rep = 1; rep <= 30; rep ++) {
//   console.log(`Weight Repitition  ${rep}`);
// }

// for loop using arrays!!!!!!!
const jonas = [
  'Jonas',
  'Schmed',
  2037 -1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// console.log(jonas[2])
// ...
// console.log(jonas[4])
// jona[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from Jonas array
  console.log(jonas[i], typeof jonas[i]);
//  Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break statements
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {  
  if(typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}


console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {  
  if(typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


// Looping backwards and loops in loops

const jonas = [
  'Jonas',
  'Schmed',
  2037 -1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);  
}

// Loop inside a loop
for(let excercise = 1; excercise < 4; excercise++) {
  console.log(`------------Starting Excersize ${excercise}`);

  for (let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${excercise} Lifting weight repetition ${rep}`)
  };
}
*/

// The while Loop!!!!!!!!!!!!
// for(let rep = 1; rep <= 10; rep ++) {
//  console.log(`Weight Repitition  ${rep}`);
// }
// The while loop

let rep = 1; 
while (rep <= 10) {
  // console.log(`WHILE!! Weight Repitition  ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice = 6) 
  console.log('Loop is about to end...');
}