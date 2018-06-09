'use strict'
// ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let userPassword;
let testPassword;

do {
  userPassword = prompt("Введите пароль");
  //при нажатии Cancel
  if (userPassword === null) {
    testPassword = null;
    break;
  }
  //если пароль совпадает
  else if (passwords.includes(userPassword) === true) {
    testPassword = true;
    break;
  }
  //если не совпадает вводим attempts раз
  else {
    attempts -= 1;
    testPassword = false;
    if (attempts === 1) {
      alert("Неверный пароль, у вас осталaсь " + attempts + " попытка");
    } else {
      alert("Неверный пароль, у вас осталось " + attempts + " попытки");
    }
  }
}
//результат провеверки пароля
while (attempts > 0);
if (testPassword === true) {
  alert("Добро пожаловать!");
} else if (testPassword === false) {
  alert("У вас закончились попытки, аккаунт заблокирован!");
}


//СУММА ЧИСЕЛ
let userInput;
let numUser = 2;
const numbers = [];
let total = 0;

do {
  do {
    userInput = prompt("Введите число");
    numUser = Number(userInput);
    //Проверка на число
    if (Number.isNaN(numUser)) {
      alert("Было введено не число, попробуйте еще раз");
    }
  } while (Number.isNaN(numUser));
  if (userInput !== null) {
    numbers.push(numUser);
    console.log(numbers);
  }
} while (userInput !== null);
console.log(numbers.length);
if (numbers.length > 0) {
  //Цикл для вычисления суммы
  for (let a = 0; a < numbers.length; a += 1) {
    total += +numbers[a];
  }
  alert(total);
} else {
  alert("Массив пустой");
}