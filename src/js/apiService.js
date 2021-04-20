const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

function fetchImageByName(imageName) {
    return fetch(`${BASE_URL}${imageName}&page=номер_страницы&per_page=12&key=твой_ключ`)
        .then(response => {
            return response.json();
    })
}

export default { fetchImageByName };