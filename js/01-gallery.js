

import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
function createGalleryItems(galleryItems) {
	return galleryItems.map((galleryItems) => {
		return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItems.original}">
    <img
      class="gallery__image"
      src="${galleryItems.preview}"
      data-source="${galleryItems.original}"
      alt="${galleryItems.description}"
    />
  </a>
</div>`;
	}).join('');

}
galleryEl.addEventListener('click', onClickGallery);

function onClickGallery(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) { return; }
	const instance = basicLightbox.create(`
    <img src="${e.target.getAttribute('data-source')}" width="100%" height="100%">
`);

	function onCloseEscape(event) {
		if (event.code === 'Escape') {
			instance.close();
			document.removeEventListener('keydown', onCloseEscape);
		}

	}
	instance.show();
	if (instance.show()) {
		document.addEventListener('keydown', onCloseEscape);
	}




}