'use strict'
// ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
const attempts = 3;
let userAttempts = attempts - 1;
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
    // attempts -= 1;
    testPassword = false;
    if (userAttempts === 1) {
      alert("Неверный пароль, у вас осталaсь " + userAttempts + " попытка");
    }else if(userAttempts === 0){
      break;
    }
     else {
      alert("Неверный пароль, у вас осталось " + userAttempts + " попытки");
    }
    userAttempts -= 1;
  }
}
//результат провеверки пароля
while (userAttempts >= 0);
if (testPassword === true) {
  alert("Добро пожаловать!");
} else if (testPassword === false) {
  alert("У вас закончились попытки, аккаунт заблокирован!");
}


//СУММА ЧИСЕЛ
let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число");
  //Проверка на число
  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number(userInput));
     }
  if (userInput === null) {
    numbers.pop();
    console.log(numbers);
  }
} while (userInput !== null);
console.log(numbers.length);
if (numbers.length > 0) {
  //Цикл для вычисления суммы
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  alert(total);
} else {
  alert("Массив пустой");
}
