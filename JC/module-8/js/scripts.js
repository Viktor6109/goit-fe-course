const galleryItems = [{
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: "alt text 1"
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: "alt text 2"
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: "alt text 3"
  },
  {
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: "alt text 4"
  },
  {
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: "alt text 5"
  },
  {
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: "alt text 6"
  },
];
const createFullview = () => {
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');
  const imgsDiv = imgDiv();
  fullview.append(imgsDiv);
  return fullview;
}

function imgDiv(text) {
  const imgDiv = document.createElement('img');
  imgDiv.setAttribute('src', '');
  imgDiv.setAttribute('alt', '');
  return imgDiv;
}

const createImgLi = ({
  preview,
  fullview,
  alt
}) => {
  const li = document.createElement('li')
  const imgLi = document.createElement('img');
  imgLi.setAttribute('src', preview);
  imgLi.setAttribute('data-fullview', fullview);
  imgLi.setAttribute('alt', alt);
  li.append(imgLi);
  return li;
}

const galleryLi = (arr) => {
  const element = arr.map(cart => createImgLi(cart));
  return element;
}

const createli = () => {
  const li = document.createElement('li');
  const galleryCard = galleryLi(galleryItems);
  li.append(...galleryCard);
  return li;
}

const createPreview = () => {
  const preview = document.createElement('ul');
  preview.classList.add('preview');
  const galleryCard = galleryLi(galleryItems);
  preview.append(...galleryCard);
  return preview;
}
const createJsImaeGallery = () => {
  const jsImageGallery = document.querySelector('.js-image-gallery');
  const fullview = createFullview();
  const preview = createPreview();
  jsImageGallery.append(fullview, preview);
  return jsImageGallery;
}

createJsImaeGallery();

// const jsImageGallery = document.querySelector('.js-image-gallery');
const fullview = document.querySelector('.fullview');
const fullviewImg = fullview.firstElementChild;
const preview = document.querySelector('.preview')
// const oneImgPreview = preview.firstElementChild;
const oneImgPreview = preview.querySelector('img');
console.log(oneImgPreview);
const text = oneImgPreview.dataset.fullview;
fullviewImg.setAttribute('src', text);

preview.addEventListener('click', handlePreviewClick);

function handlePreviewClick(preview) {
  const srcFullview = preview.target.dataset.fullview;
  fullviewImg.setAttribute('src', srcFullview);
}
