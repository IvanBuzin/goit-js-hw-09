import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
 
const gallery = document.querySelector(".gallery");

gallery.innerHTML = images.reduce(
  (html, image) =>
    html +
    `<li class="gallery-item">
      <a class="gallery-link" href="${image.original}">
        <img
            class="gallery-image"
            src="${image.preview}"
            alt="${image.description}"
            width="360"
            height="200"
            />
      </a>
    </li>`,
  ""
);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});

