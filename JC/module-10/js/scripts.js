/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const url = 'https://test-users-api.herokuapp.com/users';

const refs = {
  textUrl: document.querySelector('.js-textUrl'),
  getAllUserBtn: document.querySelector('.js-getAllUser'),
  getIdUserBtn: document.querySelector('.js-getIdUser'),
  addUserBtn: document.querySelector('.js-addUser'),
  updateUser: document.querySelector('.js-updateUser'),
  deleteBtn: document.querySelector('.js-removeUser'),
  olUser: document.querySelector('.js-olUsers'),
};

refs.getAllUserBtn.addEventListener('click', handleGetAllUser);
refs.getIdUserBtn.addEventListener('click', handleGetIdUser);
refs.addUserBtn.addEventListener('click', handleAddUser);
refs.updateUser.addEventListener('click', handleUpdateUser);
refs.deleteBtn.addEventListener('click', handleDeleteBtn);

refs.textUrl.textContent = url;

function handleGetAllUser(e) {
  fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then(date => {
      const dataUser = date.data.forEach(element => {
        const name = element.name;
        const age = element.age;
        const id = element.id;
        appendUl(createLiUser(name, age, id));
      });
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}

function handleGetIdUser() {
  const idUser = urlId();
  fetch(idUser)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then(date => {
      const name = date.data.name;
      const age = date.data.age;
      const id = date.data.id;
      appendUl(createLiUser(name, age, id));
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}

function handleAddUser() {
  const addUser = newUser();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(addUser),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

function handleUpdateUser() {
  const urlUpdate = urlId();
  const updateUser = newUser();
  fetch(urlUpdate, {
    method: 'PUT',
    body: JSON.stringify(updateUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}

function handleDeleteBtn() {
  const idUser = urlId();
  fetch(idUser, {
    method: 'DELETE',
  });
}

function newUser() {
  const newUser = {
    name: prompt('Введите имя'),
    age: prompt('Введите возрост'),
  };
  return newUser;
}

function urlId() {
  idUser = prompt('Введите ID');
  idUsers = url + '/' + idUser;
  console.log(idUsers);
  return idUsers;
}

function printTest(name, age, id) {
  console.log(name, age, id);
}

function createUser(text) {
  const pUser = document.createElement('p');
  pUser.textContent = text;
  return pUser;
}

function createLiUser(name, age, id) {
  const liUser = document.createElement('li');
  liUser.classList.add('liUser');
  const nameUser = createUser(name);
  const ageUser = createUser(age);
  const idUser = createUser(id);
  liUser.append(nameUser, ageUser, idUser);
  return liUser;
}

function appendUl(data) {
  refs.olUser.prepend(data);
}
