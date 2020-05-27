import axios from 'axios';

const api = axios.create({
  baseURL: 'https://8d30fafe6062.eu.ngrok.io',
});

export default api;
