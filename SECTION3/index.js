// let menu = [];
// console.log(menu);

// let menu = ["chao ga"];
// console.log(menu);

//Excercise array:
// let movies = ['Phim1', 'Phim2', 'Phim3', 'Phim4'];
// console.log(movies);


// Create
// let newMovie = prompt("Enter your movie you want to add:");
// movies.push(newMovie);
// console.log(movies);

// let i = prompt("Enter Your number of movies");
// console.log(movies[i]);

//Update
// let movieTitle = prompt("Enter your movie you want update");
// movies [1]= movieTitle;
// let movieTitle = prompt("Enter your movie you want update");
// let i = "Enter your number of movies you want update";
// movies[i]= movieTitle;

//Delete
// let i = prompt("Enter position i you want to delete");
// movies.splice(i,1);
// console.log(movies);

// let i = prompt("Enter position i you want to delete");
// let nItem = prompt("Enter number of irtem you want to delete");
// movies.splice(i,nItem);
// console.log(movies);

// Read or log all of items in movies array into console
// let moviesList = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
// for(let i = 0; i < moviesList.length; i++){
//     console.log(i + 1 + ". " + moviesList[i]);
// }
// console.log("============================");
//Read or log only first half items in movies array into console
// for( let i = 0; i < moviesList.length/2; i++){
//     console.log(i + 1 + ". " + moviesList[i]);
// }
// console.log("============================");
//Read or log all of items in movies array into console with the item position
// let positionArray = prompt("Enter position of items in array");
// for(let i = positionArray; i < moviesList.length; i++){
//     console.log(moviesList[i]);
// }

//Change all items of movies array into lowercase
let moviesList = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
for(let i = 0; i < moviesList.length; i++){
    moviesList[i] = moviesList[i].toLowerCase();
}
console.log(moviesList);
//Excercise array:


let menu = ['Chao', 'Com', 'Burger'];
console.log(menu);

for(let i = 0; i < menu.length; i++){
    menu[i] = menu[i].toLocaleUpperCase();
}
console.log(menu);


