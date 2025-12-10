const user1 = {
    name: "Ramesh",
    age: 21,
    address: "India",
    email: "ramesh.das@iitg.ac.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday", "Sunday"],
    myOrder:{
        amount: 5000,
        productName: "Laptop",
        productQuantity: 1
    },
    //deliveryAddress: "Guwahati, Assam"
    // greeting: function(){
    //     console.log(`Hello, ${this.name}! Welcome back.`);
    // }
    secondGreeting(){
        console.log(`Hey there, ${this.name}! Good to see you again.`);
    }
}

// console.log(user1);

// // Accessing object properties
// console.log("Name:", user1.name);
// console.log("Email:", user1.email);
// console.log("Last Login Days:", user1.lastLoginDays);
// console.log("Order Details:", user1.myOrder.amount);

// Adding new property to the object
user1.deliveryAddress = "Guwahati, Assam";
// console.log(user1)

// Modifying object properties
user1.isLoggedIn = true;
// console.log("Is Logged In:", user1.isLoggedIn);

// Freezing a specific property (note: this does not prevent changes to the property itself)
Object.freeze(user1.email);
// Freezing the entire object
// Object.freeze(user1);
// console.log(user1);
// console.log(user1);

user1.greeting = function(){
    console.log(`Hello, ${this.name}! Welcome back.`);
}
console.log(user1);
// Invoking methods
user1.secondGreeting();
