import GameSavingLoader from "../mock/example";

test('запуск Promise',(done) => {
  console.log(GameSavingLoader.load())  
  // expect(GameSavingLoader.load()).toBe({})  
});
