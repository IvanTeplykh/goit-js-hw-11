//imports
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  markupGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { AxiosError } from 'axios';

//variables
const form = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');
const jsSearchQuery = document.querySelector('.js-search-query');
let query = '';
let totalImages = 0;
let perPage = 40;
let lightbox = null;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  clearGallery();
  showLoader();
  query = e.currentTarget.searchText.value.trim();
  jsSearchQuery.textContent = `Search query : "${query}"`;
  form.reset();
  getImagesByQuery(query)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      markupGallery(images.hits);
    })
    .catch(AxiosError => {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
