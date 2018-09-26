/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

/*
  @param {FormEvent} evt
*/
let name;

function fetchCountryData() {
  event.preventDefault();
  const urlCountry = aspiUrlCountry();
  fetch(urlCountry).then(response => {
      if (response.ok)
        return response.json();
        consol.log(response);
      throw new Error("Error fetching data");
    }).then(date => {
      console.log(date);
      console.log(date[0]);
      name = date.name;
      nameUrl(name);
    })
    .catch(error => {
      console.error("Error: ", error);
    });
}

function nameUrl(nameUrl) {
  console.log(nameUrl);
  result.textContent = 'Country name:' + " " + nameUrl;
}

function aspiUrlCountry() {
  let queri = input.value;
  const apiUrlCountry = (apiUrl + `${queri}`);
  console.log(apiUrlCountry);
  // input.value = '';
  return apiUrlCountry;
}

// Задание 2

/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/
