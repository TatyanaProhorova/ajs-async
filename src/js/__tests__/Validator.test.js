import Validator from '../class/Validator';

test('Проверка соответствия только буквы, цифры, подчеркивание', () => {
  expect((new Validator()).validateUsername('Tony')).toBe(true);
});

test('Плохие символы', () => {
  expect((new Validator()).validateUsername('Tony_')).toBe(false);
});
