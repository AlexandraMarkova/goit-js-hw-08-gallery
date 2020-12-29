import items from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const openModalImg = document.querySelector(".lightbox");
const changeImageUrl = document.querySelector(".lightbox__image");
const closeModalImg = document.querySelector('button[data-action="close-lightbox"]');
const overlayRef = document.querySelector(".lightbox__overlay");



const imagesRef = items.map(
  (elem) => `
<li class="gallery__item">
<a class="gallery__link" href="${elem.original}">
<img
class="gallery__image"
src="${elem.preview}"
data-source="${elem.original}"
alt="${elem.description}"
/>
</a>
</li>
`
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
  changeImageUrl.src = largeImageURL;
  
  window.addEventListener('keydown', onPressEscape);
  openModalImg.classList.add("is-open");
  
}

closeModalImg.addEventListener("click", closeModal);
overlayRef.addEventListener("click", closeModal);

function closeModal() { 
   window.removeEventListener("keydown", onPressEscape);
  openModalImg.classList.remove("is-open");
  changeImageUrl.src = "";
}

function onPressEscape(event) { 
 if (event.code === 'Escape') { 
   closeModal();
   console.log('нужно закрыть')
    }
}


