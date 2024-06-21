import { preview } from 'vite';
import fetchImages from './js/pixabay-api';
import imagesTemplate from './js/render-function';
const form = document.querySelector('form');
const list = document.querySelector('gallery');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    fetchImages(value)
        .then(data => {
            
        })
        .catch(error => { console.log(error) });
    form.reset();
});

