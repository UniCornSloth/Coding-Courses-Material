// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM!
/* We work for a company building a smart home
thermometer. Our most recent task is this: "Given an array of temps of one day, calculate the
temp amplitude. Keep in mind that sometimes
there might be a sensor error"
*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer- It is the difference between the highest and lowest temps in the array.
// - How to compute the max and min temps?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2
// Function should now recieve to arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge the two arrays.

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',

//     // C) Fix
//     // value: Number(prompt('Degress celsius')),
//     value: 10,
//   };

//   //B) Find Bug
//   console.table(measurement);

//   // console.log(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) Identify
// console.log(measureKelvin());

// // Using A debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// console.log(amplitudeBug);

// Coding Challenge

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}deg ... ${data1[1]}deg ... ${data1[2]}deg ...`);

// const printForcast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}deg in ${i + 1} days... `;
//   }
//   console.log('...' + str);
// };
// printForcast(data1);
