// if
const isUserLoggedIn = true;
if (isUserLoggedIn) {
    console.log("Welcome back, user!");
}

const temperature = 30;
if (temperature === 30){
    console.log("It's a hot day!");
}


// if...else
const isRaining = false;
if (isRaining) {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Enjoy the sunshine!");
}

const bankBalance = 100;
if(bankBalance>50) console.log("Good"),console.log("Balance is sufficient");
else console.log("Low"),console.log("Please deposit funds");

// if...else if...else
// If any of one condition is true, the corresponding block will be executed and rest will be skipped.
const score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

const userPaymentStatus = "pending";
const isAccountActive = true;
const loggedInfromTrustedDevice = false;
if(userPaymentStatus==="paid" && isAccountActive && loggedInfromTrustedDevice){
    console.log("Access granted to premium features.");
}

if(userPaymentStatus==="pending" || !isAccountActive || loggedInfromTrustedDevice){
    console.log("Access denied. Please check your account status.");
}