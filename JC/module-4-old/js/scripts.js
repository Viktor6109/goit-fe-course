const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25,
};

let order = {
  // bread: 2,
  // milk: 2,
  // apples: 1,
  // cheese: 1
};

const Cashier = function(
  name,
  totalPrice = 0,
  customerMoney = 0,
  changeAmount = 0,
) {
  let keyOrder;
  this.name = name;
  this.productsDatabase = Object.assign({}, products);
  this.totalPrice = totalPrice;
  this.customerMoney = customerMoney;
  this.changeAmount = changeAmount;
  this.order = order;

  this.orderKey = function() {
    let amount;
    do {
      keyOrder = prompt('Вы покупаете');
      if (this.productsDatabase[keyOrder]) {
        do {
          amount = Number(prompt('Количество'));
          if (!Number.isNaN(amount)) {
            //при повторном вводе продукта количество не перезаписывает а пересчитывается
            if (order.hasOwnProperty(keyOrder)) {
              order[keyOrder] = order[keyOrder] + amount;
            } else {
              order[keyOrder] = amount;
            }
          }
        } while (Number.isNaN(amount));
      }
    } while (keyOrder !== null);
    return this.order;
  };

  this.countTotalPrice = function(productsDatabase, order) {
    let keyProducts;
    let keysOrder;
    for (keysOrder in this.order) {
      for (keyProducts in productsDatabase) {
        if (keysOrder === keyProducts) {
          this.totalPrice += products[keyProducts] * order[keysOrder];
        }
      }
    }
    return this.totalPrice;
  };

  this.getCustomerMoney = function() {
    do {
      this.customerMoney = prompt(`Ваша покупка на сумму ${this.totalPrice}`);
      if (this.totalPrice <= this.customerMoney) {
        break;
      } else if (this.customerMoney === null) {
        break;
      }
    } while (this.customerMoney < this.totalPrice);
    return this.customerMoney;
  };

  this.onSuccess = function() {
    if (this.changeAmount > 0) {
      return alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    } else {
      return alert(`Спасибо за покупку`);
    }
  };

  this.onError = function() {
    return alert('Очень жаль, вам не хватает денег на покупки');
  };

  this.onErrorOrder = function() {
    return alert('Вы ничего не купили');
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };

  this.reset = function(totalPrice = 0, customerMoney = 0, changeAmount = 0) {
    this.totalPrice = totalPrice;
    this.customerMoney = customerMoney;
    this.changeAmount = changeAmount;
  };

  this.serve = function(order) {
    this.orderKey();
    this.countTotalPrice(products, order);
    if (Object.keys(order).length !== 0) {
      this.getCustomerMoney(totalPrice);
    } else {
      //если пустой order
      return this.onErrorOrder();
    }
    this.countChange(customerMoney, totalPrice);
    if (this.customerMoney !== null) {
      this.onSuccess();
    } else this.onError();
    console.log(this.totalPrice);
    console.log(this.customerMoney);
    console.log(this.changeAmount);
    this.reset();
    console.log(this.totalPrice);
    console.log(this.customerMoney);
    console.log(this.changeAmount);
  };
};

const mango = new Cashier('Mango');

mango.serve(order);
// console.log(this.totalPrice);
// console.log(this.customerMoney);
// console.log(this.changeAmount);
