const user = {
    username: "Ramesh",
    price: 5000,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        console.log(this);
    }
}

user.welcomeMessage(); // This is One Raplica
user.username = "Arindam";
user.welcomeMessage(); // This is Second Raplica


// Arrow Function and Annonymous Function
const coffee = () => {
    let coffeeName = "Cappuccino";
    console.log(`My favorite coffee is ${coffeeName}`);
}
coffee();


const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNumbers(5, 10));