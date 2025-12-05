let toDay = new Date();
console.log(toDay);
let toDayString = toDay.toDateString();
console.log(toDayString);
let toDayTimeString = toDay.toTimeString();
console.log(toDayTimeString);
let toDayLocaleString = toDay.toLocaleString();
console.log(toDayLocaleString);

let specificDate = new Date(2023, 0, 15, 10, 30, 0); // January 15, 2023 10:30:00
console.log(specificDate);

console.log("Year:", specificDate.getFullYear());
console.log("Month:", specificDate.getMonth() + 1); // Months are zero-based
console.log("Date:", specificDate.getDate());
console.log("Hours:", specificDate.getHours());
console.log("Minutes:", specificDate.getMinutes());
console.log("Seconds:", specificDate.getSeconds());