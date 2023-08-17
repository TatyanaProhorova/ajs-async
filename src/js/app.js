import GameSavingLoader from "./mock/example.js";
import GameSaving from "./class/GameSaving.js";

let gameSavingLoader = new GameSavingLoader;
gameSavingLoader.load().then(result => {
let gameSaving = new GameSaving;
gameSaving = {...JSON.parse(result)};     
return gameSaving;
});
// setTimeout(() => console.log("output", g), 6000);
