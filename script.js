//DOM elements

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

//put all the functions below into an object

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// generate event listener elements

generateEl.addEventListener("click", () => {
  //this gives a number as a string adding the + converts it to a number
  const length = +lengthEl.value;
  //checking whether the others are checked or not
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// compare password to clipboard

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

//generate password function

function generatePassword(lower, upper, number, symbol, length) {
  //1. initialize a password variable
  //2. filter out unchecked types
  //3. loop over the length, call a generator function for each type
  //4. Add the final password to the password variable and return it

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // console.log("typesArr: ", typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];

      // console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
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
