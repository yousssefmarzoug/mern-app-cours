import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // URL dynamique
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
