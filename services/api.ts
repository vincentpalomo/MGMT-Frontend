import axios from 'axios';

const api_client = axios.create({
  baseURL: 'https://mgmt-ymsn.onrender.com/api',
  timeout: 1000,
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api_client.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API fetch error', error);
    throw error;
  }
};

// get users
export const fetchUsers = async (endpoint: string) => {
  try {
    const users = await api_client.get(endpoint);
    return users.data;
  } catch (error) {
    console.error('Api fetch users error', error);
    throw error;
  }
};
