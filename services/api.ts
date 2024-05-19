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

// // get users
// export const fetchUsers = async (endpoint: string) => {
//   try {
//     const users = await api_client.get(endpoint);
//     return users.data;
//   } catch (error) {
//     console.error('Api fetch users error', error);
//     throw error;
//   }
// };

// register user
export const fetchCreateUser = async (
  endpoint: string,
  username: string,
  password: string,
  email: string,
  avatar: string
) => {
  try {
    const userData = {
      username: username,
      password: password,
      email: email,
      avatar: avatar || 'no image',
    };
    const newUser = await api_client.post(endpoint, userData);
    return newUser.data;
  } catch (error) {
    console.error('API fetch error for creating new user', error);
    throw error;
  }
};

// login user
export const fetchLoginUser = async (endpoint: string, username: string, password: string) => {
  try {
    const userData = { username: username, password: password };
    const loginUser = await api_client.post(endpoint, userData);

    return loginUser.data;
  } catch (error) {
    console.error('API fetch error for login user', error);
    throw error;
  }
};
