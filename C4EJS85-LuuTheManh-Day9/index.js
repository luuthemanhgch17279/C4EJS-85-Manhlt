// console.log("Ex1 - 1.1: Read");
// console.log("Ex1 - 1.2: Promise");
//1.2.1 
// const p = new Promise(
//     function (resolve, reject) {
//         setTimeout(() => resolve(console.log("Promise is da best")), 5000)
//     }
// )
// Promise;

//1.2.2
// const p = new Promise(
//     async function (resolve, reject) {
//         await setTimeout(() => resolve(console.log("Promise is da best")), 5000)
//     }
// )
// Promise;

//1.2.3
// const p = new Promise(
//     async function (resolve, reject) {
//         await setTimeout(() => resolve("Promise is da best"), 5000)
//     }
// );

// p.then(
//     result => alert(result),
//     error => alert(error),
// );
// Promise;

//console.log('Ex2 - Using fetch() to load data from an API,');
// Using fetch() to load data from an API
// async function load() {
//     const fetchPromise = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//     const data = fetchPromise.json();
//     return data;
//     fetchPromise.then(connection => {
//         console.log('Connected');
//         console.log(connection);
//     });
// }
// console.log(load());
//get data by handling the Promise returned by json() function
// const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
// fetchPromise.then(connection => {
//     console.log('connected');
//     console.log(connection);
//     const jsonPromise = connection.json();
//     console.log(jsonPromise);
// });

// console.log('Ex3 - Free API');

// console.log('Ex4 - Random number');
// function randomNumber() {
//     let number = Math.floor(Math.random() * 20)-3;
//     return number;
// }
// const x = randomNumber();
// console.log(x);
// if (x < 0) {
// console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
// console.log('Failed: the number is bigger than 10');
// } else {
// console.log('Passed, bravo');
// }

// console.log('Ex5 - Random number from a to b')
// function randomNumber(a, b) {
//     let number = Math.floor(Math.random() * b+1)+a-10;
//     return number;
// }
// const x = randomNumber(4, 16);
// console.log(x);
// if (x < 4) {
//     console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
//     console.log('Failed: the number is bigger than 16');
// } else {
//     console.log('Passed, bravo');
// }

// console.log('Ex6 - Write a function to calculate the distance between 2 points');
// function calculateFunction(x1, y1, x2, y2){
//     let result = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
//     return result;
// }
// const x = calculateFunction(3, 10, 0, 6);
// console.log(x);
// if (x !== 5) {
// console.log('Failed: the calculation is wrong');
// } else {
// console.log('Passed, bravo');
// }