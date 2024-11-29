import axios from 'axios';

const apiClient = axios.create({
  baseURL:'http://localhost:3000' ||  process.env.REACT_APP_API_URL ,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
