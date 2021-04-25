import './styles.css';
import './js/apiService';
import PictureApiService from './js/apiService';
import picturesTpl from './templates/gallery.hbs';
import LoadMoreBtn from './js/load-more-btn';
import { showSuccess, showError, showNotice } from './js/show-notification';

// API.fetchImageByName('cat');

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryContainer: document.querySelector('.js-gallery-container'),
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden:true,
});
console.log(loadMoreBtn);

const pictureApiService = new PictureApiService();

refs.searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);


function onSearchForm(e) {
    e.preventDefault();

    pictureApiService.query = e.currentTarget.elements.query.value;
    if (pictureApiService.query === ''||pictureApiService.query === ' ') {
        showError();
        return;
    }
    
    loadMoreBtn.show();
    pictureApiService.resetPage();
    clearGalleryContainer();
    fetchArticles();
}

function fetchArticles() {
        loadMoreBtn.disable();
        pictureApiService.fetchPictures().then(hits => {
            appendGalleryMarkup(hits);
            showFetchNotice(hits);
        loadMoreBtn.enable();

        scrollToStart();
    });
}

function appendGalleryMarkup(hits) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', picturesTpl(hits));
}

function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
}

function scrollToStart() {
     window.scrollTo({
        top: 100,
        behavior: 'smooth'
        });
}


function showFetchNotice (hits) {
    if (hits.length > 1) {
        // console.log(hits.length);
        showSuccess();
    } else {
        showError();
    }
}