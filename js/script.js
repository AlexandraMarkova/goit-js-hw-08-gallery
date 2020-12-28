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

console.log(imageRef.src);
    imageRef.src = largeImageURL;
    console.log(imageRef.src);
}



 const openModalImg = document.querySelector(".lightbox");

 galleryRef.addEventListener("click", () => {
   openModalImg.classList.add("is-open");
 });


// galleryRef.addEventListener('click', openModal);

// function openModal(event) { 
//   event.target;  
// } 

