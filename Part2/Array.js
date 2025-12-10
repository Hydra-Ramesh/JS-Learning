const arr = [1, 2, 3, 4, 5];
const users = ["ramesh", "anik", "anulipi"];
console.log(arr);
console.log(users);


// Array Methods
arr.push(6); // adds 6 at the end
console.log(arr);
arr.pop(); // removes last element
console.log(arr);

const newUser = ["rakesh"];
const newArr = users.concat(newUser); // merges two arrays
console.log(newArr);

console.log(users.includes("anik"))
console.log(users.indexOf("anik"))

const partialUsers = users.slice(1, 3);
console.log(partialUsers);