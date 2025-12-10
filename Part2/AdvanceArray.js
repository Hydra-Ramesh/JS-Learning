const marvelHeroes = ["Thor","Ironman","Spiderman","Captain America","Hulk"];
const dcHeroes = ["Batman","Superman","Flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[5][1]);
const allHeroes = [...marvelHeroes,...dcHeroes];
// console.log(allHeroes);

const anotherArray = [1,2,3, [4,5],6, [7,8,[9,10]]];
const real_anotherArray = anotherArray.flat(Infinity);
// console.log(real_anotherArray);

console.log(Array.isArray(real_anotherArray));
console.log(Array.from("Anik"));

console.log(Array.from({name:"Ramesh"}));


let day1 = "Monday";
let day2 = "Tuesday";
let day3 = "Wednesday";
console.log(Array.of(day1,day2,day3));