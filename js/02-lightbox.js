import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
function createGalleryItems(galleryItems) {
	return galleryItems.map((galleryItems) => {
		return `
		<a class="gallery__item" href = "${galleryItems.original}" >
				<img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>`
			;
	}).join('');

}


let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	gallery.options.captionsData = 'alt';
	gallery.options.captionDelay = 250;
});

