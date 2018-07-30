/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/
function Account(login, email, friendsCount) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
}

Account.prototype.getAccountInfo = function () {
  console.log(`Login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`)
}

const viktor = new Account('Viktor', 'viktor@seznam.cz', 'Mango');
const mango = new Account('Mango', 'mango@seznam.cz', 'Viktor');
console.log(viktor);

viktor.getAccountInfo();
mango.getAccountInfo();

/*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/

function StringBuilder(string = '') {
  this.value = string;
}

StringBuilder.prototype.showValue = function () {
  value = this.value;
  console.log(value);
};

StringBuilder.prototype.append = function (str) {
  // console.log(this.value);
  this.value = `${this.value}${str}`;
};

StringBuilder.prototype.prepend = function (str) {
  // console.log(this.value);
  this.value = `${str}${this.value}`;
};

StringBuilder.prototype.pad = function (str) {
  // console.log(this.value);
  this.value = `${str}${this.value}${str}`;
};

// StringBuilder.prototype.showValue = function(){
//   value = this.value;
//     console.log(value);
// }

const myString = new StringBuilder('.');

myString.append('^');
myString.showValue(); // '.^'

myString.prepend('^');
myString.showValue(); // '^.^'

myString.pad('=');
myString.showValue(); // '=^.^='



/*
  Создайте класс Car с указанными полями и методами.
*/

class Car {
  constructor(maxSpeed = 0) {
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */
    this.sped = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    // console.log(this.distance);
    // console.log(this.maxSpeed);
    console.log(this);
    console.log(Car);
  }

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (sped < maxSpeed) {
      this.sped = spd;
    }
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (0 < sped && sped < maxSpeed) {
      this.sped = spd;
    }
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (this.running) {
      this.distance = hours * this.maxSpeed;
    }
  }

  static getSpecs(Car) {
    // Car.turnOn();
    // Car.drive();
    console.log(Car);
    console.log(
      `maxSpeed: ${Car.maxSpeed}, running: ${Car.running}, distance: ${
        Car.distance
      }`,
    );
  }
}

const someCar = new Car(100);
someCar.turnOn();
// someCar.turnOff();
someCar.drive(2);

Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

