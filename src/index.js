import './styles.css';
import './js/apiService';
import PictureApiService from './js/apiService';
import picturesTpl from './templates/gallery.hbs';

// API.fetchImageByName('cat');

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryContainer: document.querySelector('.js-gallery-container'),
    loadMoreBtn:document.querySelector('[data-action="load-more"]'),
};

const pictureApiService = new PictureApiService();

refs.searchForm.addEventListener('submit', onSearchForm);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearchForm(e) {
    e.preventDefault();

    pictureApiService.query = e.currentTarget.elements.query.value;
    if (pictureApiService.query === '') {
        return;
    }
    
    pictureApiService.resetPage();

    pictureApiService.fetchPictures().then(hits => {
        clearGalleryContainer();
        appendGalleryMarkup(hits);
});
}

function onLoadMore() {
    pictureApiService.fetchPictures().then(appendGalleryMarkup);

}

function appendGalleryMarkup(hits) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', picturesTpl(hits));
}

function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
}