import GameSavingLoader from '../class/example';


test('запуск Promise', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const data = await GameSavingLoader.load();
  expect(data).toEqual(expected);
  // done();
});

// test('etsting error', async () => {
//   expect.assertions(1);
//   try {
//     const data = await GameSavingLoader.prototype.load();
//   }
//   catch(e) {
//     expect(e.name).toEqual('SyntaxError');
//   }
// })
