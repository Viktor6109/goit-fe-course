const roomsTaba = 6;
const roomsSharm = 15;
const roomsHurgada = 25;

let freeRoomsTaba = roomsTaba;
let freeRoomsSharm = roomsSharm;
let freeRoomsHurgada = roomsHurgada;

const needNumbers = Number(prompt('Введите число необходимых мест:'));
//проверка является ли введенные данные целым положительным числом
if (Number.isInteger(needNumbers) && needNumbers > 0) {
  if (needNumbers <= freeRoomsTaba) {//сравнение с Taba
    if (confirm("Есть места в группе Taba. Согласны быть в этой группе?")) {
      freeRoomsTaba = freeRoomsTaba - needNumbers;
      alert("Приятного путешествия в группе Taba");
    } else if (needNumbers <= freeRoomsSharm) { //если отказ от Taba
      if (confirm("Есть места в группе Sharm. Согласны быть в этой группе?")) {
        freeRoomsSharm = freeRoomsSharm - needNumbers;
        alert("Приятного путешествия в группе Sharm");
      } else if (needNumbers <= freeRoomsHurgada) {//если отказ от Taba и Sharm
        if (
          confirm("Есть места в группе Hurgada. Согласны быть в этой группе?")
        ) {
          freeRoomsHurgada = freeRoomsHurgada - needNumbers;
          alert("Приятного путешествия в группе Hurgada");
        } else {
          alert("Нам очень жаль, приходите еще!");
        }
      }
    }
  } else if (needNumbers <= freeRoomsSharm) {// проверка для Sharm
    if (confirm("Есть места в группе Sharm. Согласны быть в этой группе?")) {
      freeRoomsSharm = freeRoomsSharm - needNumbers;
      alert("Приятного путешествия в группе Sharm");
    } else if (needNumbers <= freeRoomsHurgada) {//если отказ от Sharm
      if (
        confirm("Есть места в группе Hurgada. Согласны быть в этой группе?")
      ) {
        freeRoomsHurgada = freeRoomsHurgada - needNumbers;
        alert("Приятного путешествия в группе Hurgada");
      } else {
        alert("Нам очень жаль, приходите еще!");
      }
    }
  } else if (needNumbers <= freeRoomsHurgada) {// проверка для Hurgada
    if (confirm("Есть места в группе Hurgada. Согласны быть в этой группе?")) {
      freeRoomsHurgada = freeRoomsHurgada - needNumbers;
      alert("Приятного путешествия в группе Hurgada");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else {
    alert("Извините, мест нет.");
  }
} else {
  alert('"Ошибка ввода"');
}
