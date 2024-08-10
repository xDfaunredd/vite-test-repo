import axios from 'axios';

const URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = URL;

const receiveDataFromServer = async ({ q = '', perPage = 15, page = 1 }) => {
  const searchParams = new URLSearchParams({
    key: '45132355-1a938d4dc3b6908ed12965e8f',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  });

  const response = await axios.get(`?${searchParams}`);

  return response.data;
};

export default receiveDataFromServer;
