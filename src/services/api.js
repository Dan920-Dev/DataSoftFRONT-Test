// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/BOOKSTORE'; 

const api = axios.create({
  baseURL: API_URL,
});

export default api;
