
let currentNumBetween0And100 = 0; 
let numberBetwen0And3 = 0; //loops over 0-3 
let numberBetween0And5 = 5; //loops over 0-5 



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

function fizz() { //if currentNum is a multiple of 3
  numberBetwen0And3 = 0; 
  return 'Fizz';
  
}

function buzz() { //if currentNum is a multiple of 5 
  numberBetween0And5 = 5; 
  return 'Buzz';
}



function fizzBuzzer(currentNumBetween0And100) { //2 

  numberBetwen0And3++; 
  numberBetween0And5--; 

  const isAMultipleOfThree = numberBetwen0And3 == 3;
  const isAMultipleOfFive = numberBetween0And5 == 0; 


  let fizzBuzzOrNum = isAMultipleOfThree || isAMultipleOfFive ? "" : currentNumBetween0And100 + 1;
  
  if (isAMultipleOfThree) fizzBuzzOrNum += fizz(); 
  if (isAMultipleOfFive) fizzBuzzOrNum += buzz();
  return fizzBuzzOrNum; // will return fizz, buzz, fizzbuzz or a number like 1,2,7,14.....

}



module.exports  =  {
   
  makeTheString

}
