import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL ||'http://localhost:3000', // URL dynamique
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
