const posts = [{
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];


const createPosteImage = (img) => {
  const posteImage = document.createElement('img');
  posteImage.classList.add("post__image");
  posteImage.setAttribute('src', img);
  posteImage.setAttribute('alt', 'post image');
  return posteImage;
};

//   const createPosteTitle = (title) => {
//   const posteTitle = document.createElement('h2');
//   posteTitle.classList.add("poste__title");
//   posteTitle.textContent = title;
//   return posteTitle;
// };

// const createPosteText = (text) => {
//   const posteText = document.createElement("p");
//   posteText.classList.add("poste__text");
//   posteText.textContent = text;
//   return posteText;
// };

//правка Гены
const createPosteTitle = (tag, clas, titles) => {
  const posteTitle = document.createElement(tag);
  posteTitle.classList.add(clas);
  posteTitle.textContent = titles;
  return posteTitle;
};

const createButton = () => {
  const button = document.createElement("a");
  button.classList.add("button");
  button.href = "#";
  button.textContent = "Read more";
  return button;
}

const createPostCard = ({
  img,
  title,
  text
}) => {
  const post = document.createElement('div');
  post.classList.add('post');

  const posteImage = createPosteImage(img);
  const posteTitle = createPosteTitle('h2', "poste__title", title);
  const posteText = createPosteTitle('p', "poste__text", text);
  // const posteTitle = createPosteTitle(title);
  // const posteText = createPosteText(text);
  const button = createButton();

  post.append(posteImage, posteTitle, posteText, button);
  // post.append(posteImage, posteTitle, posteTitles, button);
  return post;
};

const createCards = (arr) => {
  const element = arr.map(cart => createPostCard(cart));
  return element;
}

const cart = document.querySelector('.cart');
const cards = createCards(posts);
cart.append(...cards);
