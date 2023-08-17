export default class Validator {
  constructor() {
    this.validity = Object; // чтобы не было ошибки линтера
  // проверяет userName9(строка):
  // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
  // Имя не должно содержать подряд более трёх цифр,
  // а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
  }

  validateUsername(userName) {
    const re = /^[-\w]*$/;
    const reTest = re.test(userName);
    const reNot = /^[-_\d]|\d{3}|[-_\d]$/;
    this.validity = (((reTest) && !((userName).match(reNot))));
    return this.validity;
  }
}
