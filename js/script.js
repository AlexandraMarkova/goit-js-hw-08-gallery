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

    const imageRef = event.target;
    console.log(event.target);
    if (imageRef.nodeName !== 'IMG') { 
        return;
    }

    const largeImageURL = imageRef.dataset.source;
    console.log(largeImageURL);

 setLargeImageSrc(largeImageURL);
}

const changeImageUrl = document.querySelector(".lightbox__image");

function setLargeImageSrc(url) { 
    changeImageUrl.src = url;
    console.log(changeImageUrl.src);
}


const openModalImg = document.querySelector(".lightbox");
const closeModalImg = document.querySelector('button[data-action="close-lightbox"]');

 galleryRef.addEventListener("click", () => {
     openModalImg.classList.add("is-open");
     
 });

closeModalImg.addEventListener("click", () => {
  openModalImg.classList.remove("is-open");  
});

