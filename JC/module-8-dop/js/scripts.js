/*
// dop 1
const btn = document.querySelector('.button');
// let n;
btn.addEventListener('click', handleBtnClick);
let n = 0;
// if(n < 10){
//   let n = 0;
  function handleBtnClick() {
    if(n < 10){
    const a = 1;
    n = n + a;
    console.log(n);
    btn.textContent = n;
  }
} 
*/

// /*
// dop 2
//   Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
//   получите числа стоящие в инпутах и запишите их сумму в абзац.
// */

// const btn = document.querySelector('.calc > button');

// btn.addEventListener('click', handleBtnClick);
// const elem = document.querySelectorAll('.calc > input');
// console.log(elem);

// function handleBtnClick() {
//     const sum = elem.map(num => (0 += num.value));
//     // let sum = 0;
//     // for (let i = 0; i < elem.length; i++) {
//     //     sum += +elem[i].value;
//     // }
//     const result = document.querySelector('.result');
//     result.textContent = sum;
// }

/*

// dop 3
//   Дан спан и кнопки +1, -1, которые будут увеличивать 
//   и уменьшать на 1 значение спана. Сделайте так, чтобы 
//   это значение не могло стать меньше нуля.
// */
// const btnAdd = document.querySelector('.js-add');
// const btnSub = document.querySelector('.js-sub');

// btnAdd.addEventListener('click', handleBtnClickAdd);
// btnSub.addEventListener('click', handleBtnClickSub);

// function handleBtnClickAdd() {
//   const value = document.querySelector('.js-value');
//   let valueText = Number(value.textContent);
//   valueText += 1;
//   value.textContent = valueText;
// }

// function handleBtnClickSub() {
//   const value = document.querySelector('.js-value');
//   let valueText = Number(value.textContent);
//   if (valueText > 0) {
//     valueText -= 1;
//     value.textContent = valueText;
//     };
// }
