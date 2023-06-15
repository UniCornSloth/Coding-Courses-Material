'use strict';

// Lecture: Functions!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function fruitProcessor (apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// } 

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// const country = 'finland';
// const population = 6;
// const capitalCity = 'Helsinki';

// function describeCountry (country, population, capitalCity) {
//   return  `${country} has ${population} million people and its capital city is ${capitalCity}.`
// }

// const countryFinland = describeCountry ('Finland', 6, 'Helsinki');
// const countrySouthAfrica = describeCountry ('South Africa', 9, 'Johannesburg');
// const countryEngland = describeCountry ('England', 2, 'London');

// console.log(countryFinland);
// console.log(countrySouthAfrica);
// console.log(countryEngland);

// Lecture: Fucntion Declarations vs Expressions
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear 
// }
// const age2 =calcAge2(1991);
// console.log(age1, age2);

// function percentageOfWorld(population) {
// return (population / 7900) * 100
// }

// const percentageChina = percentageOfWorld(1441);
// console.log(percentageChina);

// function percentageOfWorld1 (population) {
//   return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// }

// const percPortugal1 = percentageOfWorld1(10);
// console.log(percPortugal1);
// const percChina1 = percentageOfWorld1(1441);
// console.log(percChina1);
// const percUSA1 = percentageOfWorld1(332);
// console.log(percUSA1);

// Arrow Function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;  
// }

// Arrow Function!!!!!!!!!

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return rettirement;
//   return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1992, 'Herling'));


// const  percentageOfWorld3 = population  => (population / 7900) * 100;

// const percChina = percentageOfWorld3(1441);
// const percPortugal = percentageOfWorld3(10)
// console.log(percChina, percPortugal);

// Functions calling other functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function cutFruitPieces(fruit) {
//   return fruit * 6;
// };

// function fruitProcessor(apples, oranges) {

//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} pieces orange.`;
//   return juice;
// } 

// console.log(fruitProcessor(2, 4));

// Lecture Calling other functions!!!!!!!!!!!!!!!!!

// function percentageOfWorld1 (population) {
//   return (population / 7900) * 100;
// }

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1 (population);
//   const description = `${country} has ${population} million people, wich is about ${percentage}% of the world.`;
//   console.log(description); 
// }

// describePopulation('Portugal', 10);
// describePopulation('China', 1441);
// describePopulation('USA', 332);


// // Introduction to arrays!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const populations = [10, 1441, 332, 83];
// console.log(populations.length ===4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);



// const neigbours = ['Botswana','Namibia', 'Mozam',];

// Push method!!!!!!!!!!!! Adds element or argument to end of array!!!

// Unshift method adds element to start of array!!!!!!!!!!!
// POP method removes last element of array!!!!!!!!!!!!
// SHIFT method rmoves first element of array!!!!!!!!
// INDEXOF shows details of element in array!!!!!!!!!!
// // INCLUDES shows if element is in array!!!!!!!!!!
// neigbours.push('Germany');
// neigbours.push('Utopia');
// neigbours.unshift('South Africa');

// console.log(neigbours);

// neigbours.pop();
// console.log(neigbours);

// if(!neigbours.includes('Germany')) {
//   console.log('Probably not a central European country.');
// } else if (neigbours.includes('Germany')) {
//   console.log('Germany is a European country.');
// }

// neigbours[neigbours.indexOf('Namibia')] = 'Republic of Namibia';
// console.log(neigbours);

// // Objects..
// const myCountry1 = ['South Africa', 'Cape Town', 'English', 10, neigbours]
// console.log(myCountry1);

// Lecture Object
// const myCountry = {
//   country: 'South Africa',
//   capital: 'Cape Town',
//   language: 'English',
//   population: 10,
//   neighbours: ['Botswana', 'Namibia', 'Mozam']
// };
// console.log(myCountry);

// Dot vs Bracket notation!!!!!!!!!!!!!!!!!!!!!!!
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmed',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// // Dot notation
// console.log(jonas.lastName);

// // Bracket Notation
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt ('What do You want to know about Jonas? Choose between firstName, lastName, age, job and friends');
//  if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
//  } else {
//   console.log('Wrong Rewuaest!!! Choose between firstName, lastName, age, job and friends');
//  };
// // Lecture Dot vs Bracket notation
// console.log(`${myCountry.country} has ${myCountry.population} million people, ${neigbours.length} countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);


// Object Methods
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calaAge: function() {
  this.age = 2037 - this.birthYear
  return this.age;
  },

  getSummary: function () {
  return `${this.firstName} is a ${this.calaAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.getSummary());

// Object Methods Lecture!!!!!!!!!!!!!!!!!

const myCountry = {
  country: 'South Africa',
  capital: 'Cape Town',
  language: 'English',
  population: 10,
  neigbours: ['Botswana', 'Namibia', 'Mozam'],

describe: function () {
  console.log(
    `${this.country} has ${this.population} million
     ${this.language}-speaking people,
     ${this.neigbours.length} neighbouring countries and a 
     capital called ${this.capital}`
  );
},

checkIsland: function () {
  this.isIsland  = this.neigbours.length === 0 ? true : false;
 }
};

myCountry.describe();
myCountry.checkIsland();

// Iteration of fore loops!!!!!

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights rep ${rep}`); 
// }

// for (let voters = 1; voters <= 50 ; voters++) {
//   console.log(`Voter number ${voters} is currently voting.`);  
// }

// Lecture: Looping Arrays, Breaking and continuing!!!!!!!!!!!!!!!!
function percentageOfWorld1 (population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

// Lecture: Looping Backwards and loops in loops!!!!!!!!!!!!!!!
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i <listOfNeighbours.length; i++) 
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbours: ${listOfNeighbours[i][y]}`);

// Lecture: The while loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);