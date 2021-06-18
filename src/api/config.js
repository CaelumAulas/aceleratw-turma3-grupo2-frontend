export const BASE_URL = 'https://g2-acelera-api.herokuapp.com';
export const BEARER_TOKEN = localStorage.getItem('Token');
export const HEADERS = {
  Accept: 'application/json',
  Authorization: `Bearer ${BEARER_TOKEN}`,
};
