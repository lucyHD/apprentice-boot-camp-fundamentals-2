
let currentNumBetween0And100 = 0; 
let numberType = 0;
let num5 = 5;

function makeTheString() {
  let string = "";

  for (; currentNumBetween0And100 < 100; currentNumBetween0And100++){
    string += fizzBuzzer(currentNumBetween0And100) + " "
    //append return of fizzBuzzer function to empty string
  } 
  
  return string.substring(0, string.length - 1);
  
}

function buzz() {
  num5 = 5;
  return "Buzz";
}

function fizz() {
  numberType = 0;
  return 'Fizz';
  
}

function fizzBuzzer(currentNumBetween0And100) {

  numberType++; //1 
  num5--; //4

  const isAMultipleOfThree = numberType == 0b11; // value of isAMultiplOfThree is aboolean
  const isAMultipleOfFive = num5 == 0; // value of isAMultiplOfFive is aboolean
  let s = isAMultipleOfThree || isAMultipleOfFive ? "" : currentNumBetween0And100 + 1;
  
  if (isAMultipleOfThree) s += fizz();
  if (isAMultipleOfFive) s += buzz();
  return s;
}



module.exports  =  {
   
  makeTheString

}
