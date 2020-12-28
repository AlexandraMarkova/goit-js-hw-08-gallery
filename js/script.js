import items from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const openModalImg = document.querySelector(".lightbox");
const changeImageUrl = document.querySelector(".lightbox__image");
const closeModalImg = document.querySelector('button[data-action="close-lightbox"]');



const imagesRef = items.map(
  (elem) =>
    (elem = `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" data-source="${elem.original}"alt="${elem.description}"/></a></li>`)
);

galleryRef.insertAdjacentHTML("afterbegin", imagesRef.join(""));

 
galleryRef.addEventListener('click', onGalleryClick);
function onGalleryClick(event) { 
    event.preventDefault();

    const imageRef = event.target;
    if (imageRef.nodeName !== 'IMG') { 
        return;
    }

    const largeImageURL = imageRef.dataset.source;
    setLargeImageSrc(largeImageURL);
    
    openModalImg.classList.add("is-open");  
}

function setLargeImageSrc(url) { 
    changeImageUrl.src = url;
}

closeModalImg.addEventListener("click", () => {
  openModalImg.classList.remove("is-open");
    changeImageUrl.src = "";
});

