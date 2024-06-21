import fetchImages from "./pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const list = document.querySelector('gallery');

function imagesTemplate(data) {
  // const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = data.hits;

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
      return `<a class="gallery-item" href="${image.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags} " />
          <div class="image-info">
               <p>LIKES: ${image.likes}</p>
                    <p>VIEWS: ${image.views}</p>
                    <p>COMMENTS: ${image.comments}</p>
                    <p>DOWNLOADS: ${image.downloads}</p>
                </div>
            </a>
        `;
    })
        .join('');
      list.innerHTML = markup;
  }
}
 
export default imagesTemplate;