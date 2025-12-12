// let a = 10;
// // Global scope
// if(true){
//     // Block scope
//     let a = 20;
//     const b = 30;
//     console.log("INNER :" + a);
// }
// console.log(a);
// // console.log(b);


// function one(){
//     const username = "ramesh";
//     function two(){
//         // Nested Block scope
//         const website = "codeandcoffee.com";
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }
// one();


// Interesting
// It is called hoisting

console.log(addOne(5));
function addOne(num){
    return num + 1;
}

addTwo(5);

// It is called anonymous function
// We got error here because addTwo is not hoisted
const addTwo = function(num){
    return num + 2;
}