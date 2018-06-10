const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const minLogin = 4; 
const maxLogin = 16;

checkLoginValidity('ssfgkk');
// console.log(checkLoginValidity('ss'));
function checkLoginValidity(login) {
//   console.log(login.length);
  if (minLogin <= login.length && login.length <= maxLogin) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkIfLoginExists(logins, 'Pollll'))
function checkIfLoginExists(logins, login) {
  if (logins.includes(login)) {
    return true;
  } else {
    return false;
  }
}

function addLogin(logins, login){
    if(checkLoginValidity(login)){
        if(checkIfLoginExists(logins, login)){
            return 'Такой логин уже используется!';
        } else{
            logins.push(login);
            return 'Логин успешно добавлен!';
        }
    }else{
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
}
console.log(addLogin(logins, "Pollhl"));
// console.log(logins);
console.log(addLogin(logins, "Pollhl"));