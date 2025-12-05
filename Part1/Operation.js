let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
console.log("The sum is: " + sum);

let difference = num2 - num1;
console.log("The difference is: " + difference);

let product = num1 * num2;
console.log("The product is: " + product);

let quotient = num2 / num1;
console.log("The quotient is: " + quotient);

let remainder = num2 % num1;
console.log("The remainder is: " + remainder);

let exPonent = num1 ** num2;
console.log("The exponent is: " + exPonent);

// Pre and Post Increment/Decrement
let initNum = 5;
console.log("Initial Number: " + initNum);
initNum++;
console.log("After Post Increment: " + initNum);
++initNum;
console.log("After Pre Increment: " + initNum);
initNum--;
console.log("After Post Decrement: " + initNum);
--initNum;
console.log("After Pre Decrement: " + initNum);


// Comparison Operators
let herAge = 22;
let hisAge = 25;
console.log("Is her age equal to his age? " + (herAge == hisAge));
console.log("Is her age not equal to his age? " + (herAge != hisAge));
console.log("Is her age greater than his age? " + (herAge > hisAge));
console.log("Is her age less than his age? " + (herAge < hisAge));
console.log("Is her age greater than or equal to his age? " + (herAge >= hisAge));
console.log("Is her age less than or equal to his age? " + (herAge <= hisAge));


// Logical Operators
let isActive = true;
let isPaid = false;
console.log("Is valid" + (isActive && isPaid));
console.log("Is valid" + (isActive || isPaid));
console.log("Is not active: " + (!isActive));