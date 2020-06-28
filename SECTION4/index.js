// let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4,
// }
// console.log(movies);

// console.log("Ex for CREATE");
// let input = prompt("What do you want to update");
// if (input == null || input == undefined) {
//     alert("'" +input+ "'" + " does not exist our data, we will add new");
//     let newInput = prompt("Enter the new data");
//     console.log(movies);
// } else {
//     alert(movies);
// }

// console.log("EX for Update");
// movies.rate = 8.7;
// console.log(movies);
// movies.rate = movies.rate + 0.5;
// console.log(movies);

// console.log("Ex for READ");
// console.log("Cách 1");
// console.log("Title: " + movies.title);
// console.log("The year: " + movies.year);
// console.log("The rate: " + movies.rate);
// console.log("Cách 2");
// console.log("Title: " + movies["title"]);
// console.log("The year: " + movies["year"]);
// console.log("The rate: " + movies["rate"]);

// console.log("The director " + movies.director);
// console.log("The result when Log an non-existent property of the movie is undefined");

// let favorites = {
//         firstFavorites: "Sport",
//         secondFavorites: "LoL",
//         thirdFavorites: "itzy",
//         fourthFavorites: "Film",
// };

// console.log(favorites);
// console.log(favorites.firstFavorites.toUpperCase());
// console.log(favorites.thirdFavorites.toUpperCase());
// console.log(favorites.fourthFavorites.toUpperCase());

// let object1 = {
//     title: "Attack on titants",
// };
// let x = prompt("What you want to know?");
// if (x == null || x == undefined) {
//     alert("'" +x+ "'" + " does not exist our data");
// } else {
//     alert(object1.title);
// }

// console.log("Ex for Object in Array");
// let movies = [];
// let movie1 = {
//   title: "Phim1",
//   year: 2000,
//   rate: 5,
// };
// let movie2 = {
//     title: "Phim2",
//     year: 2002,
//     rate: 6,
// };
// let movie3 = {
//     title: "Phim3",
//     year: 2003,
//     rate: 7,
// };
// movies.push(movie1);
// movies.push(movie2);
// movies.push(movie3);
// console.log(movies[0]);
// console.log(movies[2].title);
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i]);
// }
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i].title);
//     console.log("Year: " + movies[i].year);
//     console.log("Rate: " + movies[i].rate);
//     console.log("-----------------------------");
// }

// let increaseRate = movie3.rate + 0.7;
// movie3.rate = increaseRate;
// console.log(movie3);

// console.log("Ex for Array in Object");
// let movie = {
//     title: "Movie ABC",
//     year: 3030,
//     rate: 10,
//     character: ["AB", "AC", "BC"],
// }

// console.log(movie.title);
// console.log("Year: " + movie.year);
// console.log("Rate: " + movie.rate);
// console.log("Cast: " + movie.character[0] + " " + movie.character[1] + " " + movie.character[2])
// movie.character.push("ABC");
// console.log("Cast: " + movie.character[0] + " " + movie.character[1] + " " + movie.character[2] + " " + movie.character[3])

// let movie1 = {title: "phim1", year: 2000, rate:9, character: "ABC"};
// let movie2 = {title: "phim2", year: 2001, rate:8, character: "AEBC"};
// let movie3 = {title: "phim3", year: 2300, rate:7, character: "ABFC"};
// let moviesArr = [movie1, movie2, movie3];
// for(let i = 0; i < moviesArr.length; i++) {
//     console.log(moviesArr[i].title);
//     console.log("Year: " + moviesArr[i].year);
//     console.log("Rate: " + moviesArr[i].rate);
//     console.log("Casts: " + moviesArr[i].character);
//     console.log("==================")
// }
//Lý Thuyết
// let person = ["Nam", 19, "HaNoi", 25, false];
// console.log(person);

// let person = {};
// console.log(person);

// let person = {
//     name: "Nam",
// };
// console.log(person);

// let person = {
//     name: "Nam",
//     age: 18,
// };
//READ///============================
// let person = {
//     name: "Nam",
//     age: 18,
// };
// console.log(person);
// console.log(person.age);

// let prop = "age";
// console.log(person.prop);
// console.log(person["name"]);
//Update////=====================
// person.name = "Nguyễn Phương Nam";
// console.log(person.name);

// person['age'] = 19;
// console.log(person.age);

// console.log(person);

// person.location = "HaNoi";
// console.log(person);

//DELETE//=============================
// delete person.age;
// console.log(person);

//Object and Array
// let person1 = {
//     name: "Ryujin",
//     age: 20,
// };
// let person2 = {
//     name: "Yuna",
//     age: 18,
// };

// let personArr = [];
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);

// // console.log(personArr[0].name);
// for(let i = 0; i< personArr.length; i++){
//     let t = personArr[i];
//     console.log(t);
//     console.log(t.name);
// }

// let person = {
//     name: "Ryujin",
//     age: 20,
//     favs: ["Music", "Games", "Books"],
// };
// // console.log(person.favs[0]);
// let favs = person.favs;
// console.log(favs);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const movie1 = {
  popularity: 512.119,
  vote_count: 460,
  video: false,
  poster_path:
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  id: 475557,
  adult: false,
  backdrop_path:
    "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
  original_language: "en",
  original_title: "Joker",
  genres: [80, 18, 53],
  title: "Joker",
  vote_average: 8.8,
  overview:
    "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
  release_date: "2019-10-04",
};
const movie2 = {
  popularity: 241.402,
  vote_count: 598,
  video: false,
  poster_path:
    "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
  id: 429203,
  adult: false,
  backdrop_path:
    "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
  original_language: "en",
  original_title: "The Old Man & the Gun",
  genres: [35, 80, 18],
  title: "The Old Man & the Gun",
  vote_average: 6.3,
  overview:
    "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
  release_date: "2018-09-28",
};
const movie3 = {
  popularity: 233.735,
  vote_count: 4139,
  video: false,
  poster_path:
    "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
  id: 429617,
  adult: false,
  backdrop_path:
    "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
  original_language: "en",
  original_title: "Spider-Man: Far from Home",
  genres: [28, 12, 878],
  title: "Spider-Man: Far from Home",
  vote_average: 7.6,
  overview:
    "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
  release_date: "2019-07-02",
};
const movie4 = {
  popularity: 158.333,
  vote_count: 323,
  video: false,
  poster_path:
    "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
  id: 522938,
  adult: false,
  backdrop_path:
    "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
  original_language: "en",
  original_title: "Rambo: Last Blood",
  genres: [28, 53],
  title: "Rambo: Last Blood",
  vote_average: 6.1,
  overview:
    "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
  release_date: "2019-09-20",
};
let moviesArray = [movie1, movie2, movie3, movie4];
console.log(moviesArray);
// console.log("Print or log the movie count in there");
// console.log("The movie count: " + moviesArray.length);

// console.log("Print or log out the data of the first movie");
// console.log(moviesArray[0]);
// console.log("Title:" + moviesArray[0].title);
// console.log("vote_average: " + moviesArray[0].vote_average);
// console.log("genres: " + moviesArray[0].genres);
// console.log("========================");
// for (let i = 0; i < moviesArray.length; i++) {
//   console.log("Title:" + moviesArray[i].title);
//   console.log("vote_average: " + moviesArray[i].vote_average);
//   console.log("genres: " + moviesArray[i].genres);
//   console.log("========================");
// }

//Error======================
// let userChoice = Number(prompt("Enter genre you like: "));
// for(let i = 0; i < moviesArray.length; i++){
//     if(userChoice == moviesArray[i].genres){
//         console.log("Title:" + moviesArray[i].title);
//     }
// }
//Error========================

// let userChoice = Number(prompt("The minimum rate: "));
// for(let i = 0; i < moviesArray.length; i++){
//     if(userChoice < moviesArray[i].vote_average){
//         console.log("Title:" + moviesArray[i].title);
//     }
// }