const Array = [15, 17, 18, 19, 20];

let luwiArray = [];
let kentiArray = [];

for (let i = 0; i < Array.length; i++) {
  let numbers = Array[i];

  if (numbers % 2 == 0) {
    luwiArray.push(numbers);
  } else {
    kentiArray.push(numbers);
  }
}

console.log("Even => ", luwiArray);
console.log("Odd => ", kentiArray);

let SashualoNumbers = [15, 19, 20];
let gamyofi = 0;

for (let i = 0; i < SashualoNumbers.length; i++) {
  gamyofi += SashualoNumbers[i];
}
var Shedegi = gamyofi / SashualoNumbers.length;

console.log("Sashualo Aritmetikuli =>", Shedegi);
