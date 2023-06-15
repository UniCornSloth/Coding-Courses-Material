/*
// Javascript is a HIGH-LEVEL, OBJECT-ORIENTED, NULTI-PARADIGM programming alnguage!!!!!!!!!!!!!!!!!!!!!!!!!!!

let js = 'amazing';          
console.log (40+8+23-10);

// Values and Variables!!!!!!!!!!!
console.log ("Jonas");
console.log ("23");

// What is a Variable. A variable is in a sense a box where You can store a value!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
i.e.
let (variable) ="(value)"
let firstName = "Jonas"

// Use Camelcase
let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Accepted variable names!!!!!!!!!

let jonas_matilda = "JM";
let $function = 27;

// Never start variable names with upper case
let person = 'Jonas';
let PI = 3.1415;

// Alway try and describe variable names!!!!!!!!!!!!!!!!!!!!!!!!!!!
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// Don't use these!!!!!!!!!!!!!!!!!!!!!!!
let job1 = 'programmer';
let job2 = 'teacher';

console.log (myFirstJob);

// a Value is either and object or primitive
 OBJECT:
 i.e.
let me = {
  name: 'Jonas'
}
PRIMITIVE:
i.e
let firstName = 'Jonas';
let age = 30; 


PRIMITIVE DATA TYPES!!!!!
1. Number ====> Used for decimals and integers ===> let age = 23;
2. String ====> Used for text ====> let firstName = 'Jonas';
3. Boolean ====> Used for taking decisions, can only be true or false ====> let fullAge = true;
4. Undefined ====> let chhildren (empty value);
5. Null ====> empty value
6. Symbol ====> Value that is unique and con not be changed.
7. BigInt ====> Larger integers than the Number type can hold


// A Boolean value can only be true or false!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let javascriptIsFun = true;
console.log (javascriptIsFun);

console.log(typeof true); ====> boolean
console.log (typeof javascriptIsFun); ====> boolean
console.log(typeof 23); ====> Number
console.log(typeof 'Jonas'); ====> string

// changed value that is in the variable!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Undefined Variables is both value and variable!!!!!!!!!!!!!!!!!!!!!!!
let year;
console.log (year);
console.log (typeof year); Un declared variables and values will show as Undefined in console

reasigning values not needed for declare i.e let
year = 1992;
console.log (typeof year);

// NULL Error or bug
// console.log (typeof null);


// let, const and var TYPES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let age = 30;
age = 31;

// Const creates a variable that can not be reassigned or changed and cannot declare empty const variables!!!!!!!!!!!!!!!!!!!!!!!
const birthYear = 1991;
// birthYear =1990;

var job = 'programmer';
job  = 'teacher';

lastName = 'Schmedtmann';
console.log (lastName);


// Types of operators!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Always use descriptive variable names!
// 01 Mathematical Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2*2*2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' '+ lastName);

/* 02 typeof Operator!!!!!!!
console.log(typeof true);
console.log (typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');


// 03 Assignment Operators
let x = 10+5; // 15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x - 1 = 99
x --; 
console.log(x);


//Comparison operators
// >, <, >=, <= 
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log (now - 1991 > now - 2018);


// Precedence of operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log (now - 1991 > now - 2018);

console.log (25 - 10 - 5);

let x, y; 
x = y = 25 -10 -5;// x = y = 10, x = 10 
console.log (x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log (ageJonas, ageSarah, averageAge);


// Template Literals !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' +  (year - birthYear) + ' year old ' + job + '!';
console.log (jonas);

// Template String!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log (jonasNew);

console.log (`Just a regular string...`);

// Multiline String!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log ('String with \n\
multiple \n\
lines');

console.log(`String
multiple 
lines`);


// Desicions implimentation
// If the statement is true it can be executed via console.log
// If the statement is false consol.log will not execute statement
// Example 1
// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//   console.log('Sarah can start driving license 🚗');
// }

// Example 2
// Control Structure!!!!!!!!!!!!!!!!
const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to Young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Types: Conversions and Coercion
// Conversion, manually convert from one type to another
// Coercion, is when javascript automatically convert types 

// Type conversion!!!!!!!!!!!
// const inputYear = '1991';
// console.log (Number(inputYear), inputYear);
// console.log (Number(inputYear) + 18);

// console.log(Number('Jonas'));
// // console.log(typeof NaN); = Invalid number

// console.log(String(23));

// // Type Coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// n = n -1;
// console.log(n); 


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined!');
} else {
  console.log('Height is UNDEFINED');
}


// Equality operators!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (Strict)');
// if (age == 18) console.log('You just became an adult :D (Loose)');

// const fave = prompt("What's your fave number?");
// console.log(fave);
// console.log(typeof fave);

// if (fave == 23) { //'23' == 23
//   console.log('Cool 23 is a good number!')
// }

// console.log(fave);
// console.log(typeof fave);

const fave = Number (prompt("What's your fave number?"));
console.log(fave);
console.log(typeof fave);

if (fave === 23) { //23 === 23
  console.log('Cool 23 is a good number!')
} else if (fave === 7) {
  console.log('7 is also a cool number')
} else if (fave === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (fave !== 23) {
  console.log ('Why not the 23?');
}


// LOGICAL OPERATORS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive..');
// }

const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive..');
}



// SWITCH STATEMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const day = 'monday';

switch (day) {
    case 'monday': // day === monady
    console.log('Plan course');
    console.log('Go to coding meet');
      break;

    case 'tuesday':
    console.log('Prepare theory videos');
      break;

    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;

    case 'friday':
      console.log('Record Videos');
      break;   

    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend!');
      break;

    default:
        console.log('Not a valid day');
}


if (day === 'monday') {
  console.log('Plan course');
  console.log('Go to coding meet');
} 

else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} 

else if (day === 'wednesday' || day === 'thursday'){
  console.log('Write code examples');
} 

else if (day === 'friday') {
  console.log('Record Videos');
}

else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!');
}

else {
  console.log('Not a valid day');
}


// Expretions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
3 + 4
1991
true && false && !false

// STATEMENTS!!!!!!!!!!!!!!!!!!!!!!!!!!
if (23 > 10 ) {
  const str = '23 is bigger';
}

const me = 'Jonas'
console.log (`I'm ${2037 - 1991 } years old ${me}`);
*/
// Conditional Operator!!!!!!!!!!!!!!!!!!!!!!!

// const age = 23;
// // age >= 18 ? console.log ('I like to drink wine!') : 
// // console.log ('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }

// console.log(drink2);

// console.log (`I like to drink ${age >= 18 ? 'wine' : 'water'}`);




