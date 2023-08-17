import GameSavingLoader from "../mock/example";

test('запуск Promise',() => {
  console.log(GameSavingLoader.load())  
  // expect(GameSavingLoader.load()).toBe({})  
});
