'use strict';

/*
// Challenge 1 Functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5,)); 

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log (scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win!!! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win!!! (${avgKoalas} vs. ${avgDolphins})`);    
  } else {
    console.log('No Team wins...')
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log (scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



// challenge 2. Arrays!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Ternary Function
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 :
  bill * 0.2;
}

// Arrow Function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 :
// bill * 0.2;

// Array~
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


// Challenge 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
 }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}


mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than
  ${john.fullName}'s BMI (${john.bmi}) `)
} else if(john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than
  ${mark.fullName}'s BMI (${mark.bmi}) `)
}


// Challenge #4

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 :
  bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// BONUS!!!!
const calcAverage = function (arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++ ) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/