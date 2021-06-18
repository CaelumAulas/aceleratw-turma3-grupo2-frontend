export const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const BEARER_TOKEN = localStorage.getItem('Token');
export const HEADERS = {
  Accept: 'application/json',
  Authorization: `Bearer ${BEARER_TOKEN}`,
};
