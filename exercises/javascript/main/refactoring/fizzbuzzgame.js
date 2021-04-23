
let currentNumBetween0And100 = 0; 
let numberType = 0;
let num5 = 5;



function makeTheString() {
  let string = "";

  for (; currentNumBetween0And100 < 100; currentNumBetween0And100++){
    string += fizzBuzzer(currentNumBetween0And100) + ' '
    //append return of fizzBuzzer function to empty string and add a space
  } 
  console.log(string)
  // return string.substring(0, string.length - 1); //only removes last bit of whitespace
  return(string.trim())
  
}

function fizz() {
  numberType = 0;
  return 'Fizz';
  
}

function buzz() {
  num5 = 5;
  return 'Buzz';
}



function fizzBuzzer(currentNumBetween0And100) {

  numberType++; //0 becomes 1 
  num5--; //5 becomes 4 

  const isAMultipleOfThree = numberType == 3; // value of isAMultiplOfThree is aboolean - is number type == 3 - true or false?
  

  const isAMultipleOfFive = num5 == 0; // value of isAMultiplOfFive is aboolean - is num5 == 0 - true or false?
  let s = isAMultipleOfThree || isAMultipleOfFive ? "" : currentNumBetween0And100 + 1;
  
  if (isAMultipleOfThree) s += fizz(); 
  if (isAMultipleOfFive) s += buzz();
  return s; // will return fizz, buzz, fizzbuzz or a number like 1 

}



module.exports  =  {
   
  makeTheString

}
