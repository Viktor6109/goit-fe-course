/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

let filterArray = {
  size: [],
  color: [],
  release_date: []
}

const laptopGrid = document.querySelector('.laptop-grid');
const source = document.querySelector('#laptop').innerHTML.trim();

const refs = {
  submitBtn: document.querySelector('.js-submitBtn'),
  refsetBtn: document.querySelector('.js-refsetBtn'),
  chbInput: document.querySelectorAll('input'),
}

refs.submitBtn.addEventListener('click', handleSubmitBtn);
refs.refsetBtn.addEventListener('click', handleRefsetBtn)

const laptops = [{
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: '17',
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

allLaptop();

function handleSubmitBtn(e) {
  e.preventDefault();
  filterArray = {
    size: [],
    color: [],
    release_date: []
  };
  deleteListLaptop();
  filter();
  listLaptopFilter();
  const template = Handlebars.compile(source);
  const addLaptop = laptopsFilters.reduce((acc, elemnt) => acc + template(elemnt), '');
  laptopGrid.insertAdjacentHTML('afterbegin', addLaptop);
};

function handleRefsetBtn() {
  deleteListLaptop()
  allLaptop()
};

function allLaptop() {
  const template = Handlebars.compile(source);
  const addLaptop = laptops.reduce((acc, elemnt) => acc + template(elemnt), '');
  laptopGrid.insertAdjacentHTML('afterbegin', addLaptop);
};

function filter() {
  refs.chbInput.forEach((input) => {
    if (input.checked) {
      if (input.name === "color") {
        filterArray.color.push(input.value);
      }
      if (input.name === "size") {
        filterArray.size.push(input.value);
      }
      if (input.name === "release_date") {
        filterArray.release_date.push(input.value);
      }
    }
  })
  if (filterArray.color.length === 0) {
    refs.chbInput.forEach((input) => {
      if (input.name === "color") {
        filterArray.color.push(input.value);
      }
    })
  }
  if (filterArray.size.length === 0) {
    refs.chbInput.forEach((input) => {
      if (input.name === "size") {
        filterArray.size.push(input.value);
      }
    })
  }
  if (filterArray.release_date.length === 0) {
    refs.chbInput.forEach((input) => {
      if (input.name === "release_date") {
        filterArray.release_date.push(input.value);
      }
    })
  }
}

function listLaptopFilter() {
  laptopsFilters = laptops
    .filter(element => filterArray.color.includes(String(element.color)))
    .filter(element => filterArray.release_date.includes(String(element.release_date)))
    .filter(element => filterArray.size.includes(String(element.size)))
};

function deleteListLaptop() {
  const myNode = document.querySelector(".laptop-grid");
  if (myNode === null) return;
  myNode.innerHTML = '';
};
