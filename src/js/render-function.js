import fetchImages from "./pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function render(images) {
    if (images == undefined) {
        iziToast.error({
         title: 'Error',
         message: 'Please choose a date in the future',
         position: 'topCenter',
         backgroundColor: 'red',
         theme: 'dark',
         messageColor: 'white',
       })}
}

export default render;