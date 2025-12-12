// for loop
for (let i = 0; i < 5; i++) {
    console.log(`For Loop Iteration: ${i}`);
}

// Nested for loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`Nested Loop Iteration: i=${i}, j=${j}`);
    }
}

let myArray = ['apple', 'banana', 'cherry'];
for(let index = 0; index < myArray.length; index++) {
    console.log(`Array Element at index ${index}: ${myArray[index]}`);
}

// Break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking the loop at i=5');
        break;
    }
}

// Continue statement
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Skipping even number: ${i}`);
        continue;
    }
    console.log(`Odd number: ${i}`);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(`While Loop Count: ${count}`);
    count++;
}

// Do-while loop
// Worthless Loop Ever That I Have Ever Seen
let doCount = 0;
do {
    console.log(`Do-While Loop Count: ${doCount}`);
    doCount++;
} while (doCount < 5);