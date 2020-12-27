import items from "./gallery-items.js";

console.log(items);


const galleryRef = document.querySelector(".js-gallery");
console.log(galleryRef);

const imagesRef = items.map(
  (elem) =>
    (elem = `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" data-source="${elem.original}"alt="${elem.description}"/></a></li>`)
);

 galleryRef.insertAdjacentHTML("afterbegin", imagesRef.join(""));