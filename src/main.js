import fetchImages from './js/pixabay-api';
import imagesTemplate from './js/render-function';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    gallery.innerHTML = '';
    const value = e.target.elements.search.value.trim();
    if (value === ''){
        iziToast.warning({
            title: 'Warning',
            message: 'Search query is empty. Please, enter a word',
            position: 'topCenter',
            backgroundColor: 'orange',
            theme: 'dark',
            messageColor: 'white',
        })
        return
    }
    fetchImages(value)
        .then(data => {
            const markup = imagesTemplate(data);
            console.log(markup)
            gallery.insertAdjacentHTML('beforeend', markup);
        })
        .catch(error => { console.log(error) });
    form.reset();
});

const lightbox = new SimpleLightbox('.gallery li', { captionsData: 'alt', captionDelay: 250 });