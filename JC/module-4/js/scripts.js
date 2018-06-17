 let totalPrice = 0;
 let customerMoney = 0;
 let changeAmount = 0;
 let keyProducts;
 let keyOrder;
 let keysOrder;
 let keys;
 
 const products = {
   bread: 10,
   milk: 15,
   apples: 20,
   chicken: 50,
   pork: 80,
   cheese: 60,
   tea: 20,
   candy: 25
 };

 let order = {
   // bread: 2,
   // milk: 2,
   // apples: 1,
   // cheese: 1
 };
 const productsDatabase = Object.assign({}, products);

 const Cashier = function (name, productsDatabase) {
   this.name = name;
   this.productsDatabase = productsDatabase;
   this.totalPrice = totalPrice;
   this.customerMoney = customerMoney;
   this.changeAmount = changeAmount;

   function getName(name) {
     return name;
   }

   const orderKey = function (keyOrder) {
     do {
       keyOrder = prompt('Вы покупаете');
       let keysProducts = Object.keys(products);
       for (let i = 0; i < keysProducts.length; i++) {
         if (keyOrder === keysProducts[i]) {
           keys = keyOrder;
           order[keys] = prompt('Количество');
           break;
         }
       }
     }
     while (keyOrder !== null);
     return order = {
       keys: order[keys]
     }
   }

   const countTotalPrice = function(order, products) {
     for (keysOrder in order) {
       for (keyProducts in products) {
         if (keysOrder === keyProducts) {
           totalPrice += products[keyProducts] * order[keysOrder];
         }
       }
     }
     return totalPrice;
   }

   const getCustomerMoney = function(totalPrice) {
     do {
       customerMoney = prompt(`Ваша покупка на сумму ${totalPrice}`)
       if (totalPrice <= customerMoney) {
         break;
       } else if (customerMoney === null) {
         break
       }
     } while (customerMoney < totalPrice);
     return customerMoney;
   }

   const countChange = function(customerMoney, totalPrice) {
     console.log(customerMoney);
     changeAmount = customerMoney - totalPrice;
     if (customerMoney === null) {
       return alert('Очень жаль, что-то пошло не так, приходите еще');
     } else if (0 <= changeAmount) {
       return alert(`Спасибо за покупку, ваша сдача ${changeAmount}`);
     } else {
       return alert('Очень жаль, что-то пошло не так, приходите еще');
     }
   }

   const reset = function() {
     totalPrice = 0;
     customerMoney = 0;
     changeAmount = 0;
     return reset;
   }

   this.serve = function (order) {
     orderKey(keyOrder);
     countTotalPrice(products, order);
     getCustomerMoney(totalPrice);
     countChange(customerMoney, totalPrice);
     reset(totalPrice, customerMoney, changeAmount);
   }
 }
 
  const viktor = new Cashier('Viktor', productsDatabase)

 viktor.serve(order);
//  console.log(viktor);
 