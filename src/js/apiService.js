// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
// const API_KEY = '21271136-bb8fcb5deeeca7c55db92c216';

// function fetchImageByName(imageName) {
//     return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${imageName}&page=номер_страницы&per_page=12&key=${API_KEY}`)
//         .then(response => {
//             return response.json();
//     })
// }

// export default { fetchImageByName };

const API_KEY = '21271136-bb8fcb5deeeca7c55db92c216';

export default class PictureApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    // fetchPictures() {
    //     // console.log('Before request',this);
    //     return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
    //     .then(response => response.json())
    //         .then(({hits}) => {
    //               this.incrementPage();
    //             return hits;
    //             //  console.log(data);
    //             // console.log('After request if OK',this)
    //     });
    // }

    async fetchPictures() {
       const response=await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
        const { hits } = await response.json()
        this.incrementPage();
        return hits;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}







    