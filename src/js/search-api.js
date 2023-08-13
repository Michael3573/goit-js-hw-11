import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '38801861-b7baeaf74cb7f3511b259df46';
const PER_PAGE = 40;

async function fetchImages(page = 1, value) {
  axios.defaults.params = {
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  };
  // return await axios.get(BASE_URL);
  const response = await axios.get(BASE_URL);
  return response.data;
}

export { fetchImages, PER_PAGE, BASE_URL, API_KEY };
