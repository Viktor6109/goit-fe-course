const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const minLogin = 4;
const maxLogin = 16;
let login;

login = prompt('Введите логин');
console.log(login);
console.log(addLogin(logins, login));

function checkLoginValidity(login) {
  if (minLogin <= login.length && login.length <= maxLogin) {
    return true;
  } else {
    return false;
  }
}

function checkIfLoginExists(logins, login) {
  if (logins.includes(login)) {
    return true;
  } else {
    return false;
  }
}

function addLogin(logins, login) {
  if (checkLoginValidity(login)) {
    if (checkIfLoginExists(logins, login)) {
      alert('Такой логин уже используется!');
    } else {
      logins.push(login);
      alert('Логин успешно добавлен!');
    }
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
}
