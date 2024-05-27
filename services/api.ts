import axios from 'axios';

const api_client = axios.create({
  baseURL: 'https://mgmt-ymsn.onrender.com/api',
  // timeout: 1000,
});

// local
// const api_client = axios.create({
//   baseURL: 'http://localhost:4000/api',
//   // timeout: 1000,
// });

// multiple fetch data requests
export const fetchData = async (endpoint: string) => {
  try {
    const response = await api_client.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API fetch error', error);
    throw error;
  }
};

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

// create job
export const fetchCreateJob = async (
  endpoint: string,
  title: string,
  company_name: string,
  jobURL: string,
  location: string,
  date_applied: string,
  application_status: string,
  interview_date: string | null,
  interview_type: string | null,
  salary: string,
  follow_up: string | [],
  notes: string,
  user_id: number
) => {
  try {
    let jobData = {
      title: title,
      company_name: company_name,
      jobURL: jobURL,
      location: location,
      date_applied: date_applied,
      application_status: application_status,
      interview_date: interview_date,
      interview_type: interview_type,
      salary: salary,
      follow_up: follow_up,
      notes: notes,
      user_id: user_id,
    };

    console.log(endpoint, jobData);

    // if (jobData.interview_date == '' && jobData.interview_type == '') {
    //   jobData.interview_date = null;
    //   jobData.interview_type = null;
    // }

    // if (jobData.follow_up == '') return (jobData.follow_up = []);

    const newJob = await api_client.post(endpoint, jobData);

    console.log(newJob);

    return newJob.data;
  } catch (error) {
    console.error('API fetch error for create job', error);
    throw error;
  }
};

// update job
export const fetchUpdateJob = async (
  endpoint: string,
  title: string,
  company_name: string,
  jobURL: string,
  location: string,
  date_applied: string,
  application_status: string,
  interview_date: string | null,
  interview_type: string | null,
  salary: string,
  follow_up: string | [],
  notes: string,
  user_id: string,
  job_id: string
) => {
  try {
    let jobData = {
      title: title,
      company_name: company_name,
      jobURL: jobURL,
      location: location,
      date_applied: date_applied,
      application_status: application_status,
      interview_date: interview_date,
      interview_type: interview_type,
      salary: salary,
      follow_up: follow_up,
      notes: notes,
      user_id: user_id,
      job_id: job_id,
    };

    // console.log('API FETCH', jobData.job_id, endpoint);
    // console.log('job date', jobData.date_applied);

    // const date = new Date(jobData.date_applied);
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const day = String(date.getDate()).padStart(2, '0');

    // jobData.date_applied = `${year}-${month}-${day}`;

    // console.log('job date update', jobData.date_applied);

    const editJob = await api_client.patch(endpoint, jobData);
    console.log(editJob);

    return editJob.data;
  } catch (error) {
    console.error('API fetch error for update job', error);
    throw error;
  }
};

// fetchJobById
export const fetchJobById = async (endpoint: string, username: string, post_id: string) => {
  try {
    const params = { username: username, post_id: post_id };
    const job = await api_client.get(endpoint, { params: params });

    return job.data;
  } catch (error) {
    console.log('API fetch error for getting job by id', error);
    throw error;
  }
};
