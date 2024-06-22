import fetchImages from "./pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const list = document.querySelector('gallery');

function imagesTemplate(data) {
  const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = data.hits;

    if (data.hits === '[]') {
        iziToast.error({
         title: 'Error',
         message: 'Please choose a date in the future',
         position: 'topCenter',
         backgroundColor: 'red',
         theme: 'dark',
         messageColor: 'white',
        })
  }
    else {
      const markup = data.hits
        .map(image => {
          const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
          return `<a class="gallery-item" href="${largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags} " />
          <div class="image-info">
               <p>LIKES: ${likes}</p>
                    <p>VIEWS: ${views}</p>
                    <p>COMMENTS: ${comments}</p>
                    <p>DOWNLOADS: ${downloads}</p>
                </div>
            </a>
        `;
        })
        .join('');
      return markup
  }
}

export default imagesTemplate;