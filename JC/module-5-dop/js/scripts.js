// /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

// /*
//   Функция findGreaterThan получает два аргумента - число и массив.
//   Возвращает новый массив, содержащий элементы которые больше числа.
// */
// const findGreaterThen = (num, arr) => {
//   // const result = [];

//   // for (let i = 0, max = arr.length; i < max; i += 1) {
//   //   if (arr[i] > num) {
//   //     result.push(arr[i]);
//   //   }
//   // }
//   return arr.filter(nums => nums > num);

//   return result;
// };

// console.log(findGreaterThen(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
// console.log(findGreaterThen(3, [1, 2, 3, 4, 5])); // [4, 5,]
// console.log(findGreaterThen(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]

// /*
//   Функция multiplyBy принимает два аргумента - число и массив.
//   Возвращает массив все значения которого умножены на число.
// */
// const multiplyBy = (num, arr) => {
//   // let result = [];

//   // for (let i = 0, max = arr.length; i < max; i += 1) {
//   //   result.push(arr[i] * num);
//   // }
// const result = arr.map(numbers => numbers * num);
//   return result;
// };
// numbers = [1, 2, 3, 4, 5];
// console.log( multiplyBy(2, numbers) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, numbers) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, numbers) ); // [4, 8, 12, 16, 20]

// /*
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//   // let accumulator = 0;

//   // for (let i = 0, max = args.length; i < max; i += 1) {
//   //   accumulator += args[i];
//   // }
//   const accumulator = args.reduce((acc, value) => acc + value, 0);

//   return accumulator;
// }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

// /*
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => {
//   // for (let i = 0, max = arr.length; i < max; i += 1) {
//   //   if (arr[i] < num) {
//   //     return false;
//   //   }
//   // }
//   // arr.forEach() >= num;
//   // const fnEvery => ()
//   return arr.every(elem => elem >= num);

//   // return true;
// };
// // console.log([5, 6, 7, 8, 9].every(elem => elem > 6));
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

//

/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];

// const setGuestState = function(guests, period){
//   // console.log(period);
//   // console.log(guests);
//   return guests.map(guest => ({...guest, isActive: guest.inactiveDays < period}));
//   // console.log(users);
// }
// setGuestState(guests, 10)
// // Вызовы функции для проверки
// console.log(
//   setGuestState(guests, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//   setGuestState(guests, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(guests, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// const getActiveGuests = guests  => guests.filter(guests => guests.isActive === true)
// const getActiveGuests = function(guests){
//   return guests.filter(guests => guests.isActive === true)
// }

// Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];
// const getGuestsOlderThan = (guest, age) => guest.filter(guest => guest.age > age)
// // function getGuestsOlderThan(guest, age) {
// //   return guest.filter(guest => guest.age > age)
// // }

// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []


/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];
// const getGuestById = (guest, id) => guest.find(x => x.id === id ) 

// // Вызовы функции для проверки
// console.log(
//   getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}

// console.log(
//   getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}

// console.log(
//   getGuestById(guests, 5)
// ); // undefined


/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40
// };
// const value = Object.values(order);
// console.log(value.reduce((acc, value) => acc + value, 0));



/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3
};
console.log(products.key);
function getTotalPrice(products, order){
const productsArs = Object.entries(products);
console.log(productsArs);
const orderArs = Object.entries(order);
console.log(orderArs);
// const orderBArs = Object.entries(orderB);
// console.log(orderArs[0][0]);
// for (const entry of orderArs){
//   console.log(entry[0]);
// }
// const totalPrice = orderArs.map((productsArs,) => orderArs[0] === productsArs[0][0] ? orderArs[1] * productsArs[1] : '')
// console.log(orderArs[0]);
const ddd = productsArs.map(productsArs => productsArs[0]);
const adb = orderArs.map(orderArs => orderArs[0]);
console.log(ddd);
console.log(adb);
const dda = 'milk'
const prod = adb.find(ccc => (ccc === ddd));
console.log(prod);
}


// Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130
