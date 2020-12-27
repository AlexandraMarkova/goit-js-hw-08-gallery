import items from "./gallery-items.js";

console.log(items);


const galleryRef = document.querySelector(".js-gallery");
console.log(galleryRef);

const imagesRef = items.map(
  (elem) =>
    (elem = `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" data-source="${elem.original}"alt="${elem.description}"/></a></li>`)
);

galleryRef.insertAdjacentHTML("afterbegin", imagesRef.join(""));
 
galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) { 
    event.preventDefault();

    console.log(event.target)

    if (event.target.nodeName !== 'IMG') { 
        return;
    }
    console.log('картинка');

    const imageRef = event.target;

    const largeImageURL = imageRef.dataset.source
}