import GameSavingLoader from "./mock/example.js";
import GameSaving from "./class/GameSaving.js";

// let gameSavingLoader = new GameSavingLoader;
// let g = gameSavingLoader.load().then(result => {
// let gameSaving = new GameSaving;
// gameSaving = {...JSON.parse(result)};     
// return gameSaving;
// });
// setTimeout(() => console.log("output", g), 6000);                                
let gameSavingLoader = new GameSavingLoader;
let g = gameSavingLoader.load()
.then(
  result => {
    let gameSaving = new GameSaving;
    gameSaving = {...JSON.parse(result)};
    return gameSaving;
  },
  error => {
    return error.message} 
);
//.catch(error => console.log("error   " + error.message));

setTimeout(() => console.log("output", g), 3500);

// // promise.then навешивает обработчики на успешный результат или ошибку
// promise
//   .then(
//     result => {
//       // первая функция-обработчик - запустится при вызове resolve
//       alert("Fulfilled: " + result); // result - аргумент resolve
//     },
//     error => {
//       // вторая функция - запустится при вызове reject
//       alert("Rejected: " + error); // error - аргумент reject
//     }
//   );