import read from '../mock/reader';
import json from '../mock/parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read()
        .then(json)
        .then((result) => {
          let gameSaving = new GameSaving();
          gameSaving = { ...JSON.parse(result) };
          return gameSaving;
        }));
    });
  }
}
