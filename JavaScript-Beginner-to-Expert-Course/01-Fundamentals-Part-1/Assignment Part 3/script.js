// //Doolphins Average Score
// const scoreDolphinsOne = 96;
// const scoreDolphinsTwo = 108;
// const scoreDolphinsThree = 89;

// const averageScoreDolphins = (scoreDolphinsOne + scoreDolphinsTwo + scoreDolphinsThree) / 3;
// console.log(averageScoreDolphins);


// // Koalas Average Score
// const scoreKoalasOne = 88;
// const scoreKoalasTwo = 91;
// const scoreKoalasThree = 110;

// const averageScoreKoalas = ( scoreKoalasOne + scoreKoalasTwo + scoreKoalasThree) / 3;
// console.log(averageScoreKoalas);

// // Winner by average score
// const winner = averageScoreDolphins;
// const loser = averageScoreKoalas;

// if (winner > loser) {
//   console.log("Dolphins Win!!!!!");
// }
//  else if (loser > winner) {
//   console.log('Koalas Lose!!');
// }
//   else if (winner === loser) {
//   console.log('Both win the trophy');
//   }

// Test Video!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log (scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log ('Both win the trophy');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log (scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
  } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
  } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log ('Both win the trophy');
  } else {
    console.log('No one wins the trophy!')
  }

