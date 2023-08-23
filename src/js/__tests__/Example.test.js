import GameSavingLoader from '../class/example';

jest.setTimeout(6000);

test('запуск Promise', async (done) => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const data = await GameSavingLoader.load();
  expect(data).toEqual(expected);
  done();
  // expect(GameSavingLoader.load()).toBe({})
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
