export const BASE_URL = process.env.REACT_APP_BACKEND_URL;
// export const BEARER_TOKEN = localStorage.getItem('Token');
export const HEADERS = () => {
  const Token = localStorage.getItem('Token');
  return {
    Accept: 'application/json',
    Authorization: `Bearer ${Token}`,
    'Content-Type': 'application/json',
  };
};
