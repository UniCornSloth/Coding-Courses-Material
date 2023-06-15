// // Lecture: Variable and Values!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let country = "South Africa";
// let continent = 'Africa'
// let population = 25;

// console.log(country);
// console.log(continent);
// console.log(population);

// // Lecture: Data Types!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const isIsland = false;
// let language;

// console.log(typeof "isIsland");
// console.log(typeof "population");
// console.log(typeof "country");
// console.log(typeof "language");

// Lecture: let, const and var!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// language = 'afrikaans';
// const country = 'South Africa';
// const continent = 'Africa';
// const isIsland = false;
// isIsland = true;

// Basic Operators
// const population = 25 / 2;

// const populationSA = (25 + 1) / 2;
// console.log(populationSA);

// let finlandPop = 6;
// console.log(populationSA > finlandPop);
// let averagePop = 33;
// console.log(populationSA < averagePop);

// const description = "Portugal is in Europe, and it's 11 million poeple speak portuguese!"
// console.log(description); 

// // Assignment Basic Operators lecture answer!!!!!!!!!!!!!!!!
// populationSA = 25
// console.log(populationSA / 2);
// populationSA++;
// console.log(populationSA);
// console.log(populationSA > 6);
// console.log(populationSA < 33);
// const description = country + ' ' + 'is in' + ' ' + continent + ', and its ' + populationSA + ' ' + 'million people speak ' + language;  
// console.log(description);

// // Strings and Templates Literals!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const description1 = `${country} is in ${continent}, and it's ${populationSA} millin people speak ${language}`
// console.log(description1);

// // Taking Decisions: if else Statements
// if (populationSA > 33) {
//   console.log(`${country}'s population is above average.`)
// } else if (populationSA < 33) {
//   console.log(`${country}'s population is ${33 - populationSA} below average.`)
// }

// Type conversion and Coercion!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const  inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// // Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');

//Lecture Type conversion and Coercion!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// // Lecture Equality Operators == vs. ===   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const age = 18
// if (age === 18) 
// console.log('You are 18 years old');

// if (age == 18) 
// console.log('You are 18 years old');

// const favorite = Number (prompt("what's Your number"));
// console.log(favorite);

// if (favorite === 23) {
//   console.log( 'Cool number bro')
// } else if(favorite === 7) {
//   console.log('7 is also a number');
// } else {
//   console.log('Number is not 23 or 7')
// }

// if (favorite !== 23) 
// console.log('Why not 23?')

// Lecture assignment!!!!!!!!!!!!

// const numNeighbours = Number (prompt('How many neigbour country have?')) 

// if (numNeighbours === 1) {
// console.log('Only 1 border!')
// }

//  else if (numNeighbours > 1) {
//  console.log('More than 1 border')
//  }

//  else console.log('No Borders!');
 
// Lecture Logical Operators!!!!!!!!!!!
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision ||
//   isTired);

//   if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
//   } else {
//     console.log('Someone else should drive...');
//   }
//  const language = 'afrikaans';
//  const country = 'South Africa';
//  const continent = 'Africa';
//  const isIsland = false;

// if (language === 'english' && population < 50 && !isIsland) {
//   console.log(`You should live ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }
 
// const language = 'Afrikaans';

// switch (language) {
// case 'Chinese':
// case 'Mandarin':
//   console.log(`Most number of native speakers!`);
//   break;

//   case 'Spanish':
//     console.log(`2nd place in number of native speakers`);
//     break;

//     case 'English':
//       console.log(`3rd place.`);
//       break;

//       case 'Hindi':
//       console.log(`Number 4`);
//       break;

//       case 'Arabic':
//         console.log(`5th most spoken language`);
//         break;

//         default:
//           console.log(`Great langauge too`);        
// }

// Lecture: The conditional (Ternary) Operator

const population = 33;
const avePop = population >= 33 ? console.log(`Portugal's population is above average`) :
console.log(`Portugal's population is below average`);

const country = 'Portugal'
console.log(`${country}'s population is ${population >= 33 ? 'above' : 'below'} average`);


