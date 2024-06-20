import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Example of a GET request to fetch user data
export const getUserData = async userId => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Example of a POST request to create a new user
export const createUser = async userData => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Add more API methods as needed
