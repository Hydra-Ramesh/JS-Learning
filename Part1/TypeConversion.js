// Type Conversion in JavaScript

// Object
let num = 42;
let newNum = new Number(num);
console.log(typeof newNum);

let age = 21;
let ageInString = String(age);
console.log(typeof ageInString);

let isActive = false;
let isActiveInString = String(isActive);
console.log(isActiveInString);
console.log(typeof isActiveInString);

let score = 99;
let scoreInBoolean = Boolean(score);
console.log(scoreInBoolean);
console.log(typeof scoreInBoolean);

let emptyString = "";
let emptyStringInBoolean = Boolean(emptyString);
console.log(emptyStringInBoolean);
console.log(typeof emptyStringInBoolean);

let strNum = "123";
let strNumInNumber = Number(strNum);
console.log(typeof strNumInNumber);

let invalidStrNum = "123abc";
let invalidStrNumInNumber = Number(invalidStrNum);
console.log(typeof invalidStrNumInNumber);