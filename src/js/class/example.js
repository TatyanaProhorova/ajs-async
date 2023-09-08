import read from '../mock/reader.js';
import json from '../mock/parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const r = await read();
    const j = await json(r);
    // throw new Error('TEXT');
    const testObject = new GameSaving(...Object.values(JSON.parse(j)));
    //console.log(testObject);
    return testObject;
  }
}
