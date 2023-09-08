import GameSavingLoader from './class/example.js';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
   // console.log('e', e);
    return e;
  } 
})();
