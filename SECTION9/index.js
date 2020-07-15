// async function getUsers() {
//     const response = await fetch('https://reqres.in/https://pokeapi.co/api/v2/pokemon/pikachu//users');

//     console.log(await response.json());
// } 

// getUsers();

// const result = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
// console.log(result);

async function load() {
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    const data = conn.json();
    //console.log(data);
    return data;
}
// let a = load();
console.log(load());
