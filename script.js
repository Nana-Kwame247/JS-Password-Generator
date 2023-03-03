//put all the functions below into an object

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//generator functions - http://www.net-comber.com/charset.html

//lower case function generator
function getRandomLower() {
  //String.fromCharCode this string object helps us convert from char code to alphabets

  //lower case is from 97 to 122

  return String.fromCharCode(Math.floor(Math.random() * 25) + 97);
}

//upper case function generator

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 65);
}

//random number generator between 0 to 9

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}

//random symbol

function getRandomSymbol() {
  const symbols = "@#$%^&*(){}[]=<>?/.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
