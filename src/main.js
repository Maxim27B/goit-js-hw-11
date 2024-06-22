import fetchImages from './js/pixabay-api';
import imagesTemplate from './js/render-function';
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    fetchImages(value)
        .then(data => {
            const markup = imagesTemplate(data);
            console.log(markup)
            gallery.insertAdjacentHTML('beforeend', markup);
        })
        .catch(error => { console.log(error) });
    form.reset();
});

