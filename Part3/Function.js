function sayName(){
    console.log('R');
    console.log('A');
    console.log('M');
    console.log('E');
    console.log('S');
    console.log('H');
}

sayName();

function anyOneName(name){
    console.log(name);
}
let anotherName = "Anik";
anyOneName("Ramesh");
anyOneName(anotherName);

function createFullName(firstName, lastName){
    return firstName + " " + lastName;
}

let fullName = createFullName("Ramesh", "Das");
console.log(fullName);

function generateUserId(x="user",y){
    return x + y;
}
let userId = generateUserId("1234");
console.log(userId);


function printUserName(userName="Guest"){
    console.log("User Name is: " + userName);
}
printUserName();

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
let sum = addTwoNumbers(10, 20);
console.log("Sum is: " + sum);

// Spread Operator Example
function sumOfNumbers(val1, val2, ...nums){
    return nums
}
let res = sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);

function printUser(user){
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
}

user1 = {
    name: "Ramesh",
    age: 21,
    city: "Kolkata",
}
printUser(user1);

