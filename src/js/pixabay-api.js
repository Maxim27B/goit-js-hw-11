function fetchImages(value) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44460867-9f013743ec0c5b2ec6c0f5088',
    q: value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  })
  const url = `${BASE_URL}${END_POINT}?${params}`
  console.log(url)
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

 fetchImages('cat');
export default fetchImages;