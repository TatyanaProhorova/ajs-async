import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {resolve(read().then(json))
      },);
    }
  }

// Вам нужно переписать метод load так, чтобы он возвращал Promise 
// с данными (см. формат ниже).

// Спецификации объекта типа GameSaving:

// {
//   "id": <number>, // id сохранения
//   "created": <timestamp>, // timestamp создания
//   "userInfo": {
//     "id": <number>, // user id
//     "name": <string>, // user name
//     "level": <number>, // user level
//     "points": <number> // user points
//   }
// }
