import axios from 'axios'


export const fetchMenuData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/menuAllData');
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const loginApi = async (Data) => {
  console.log('====================================');
  console.log("api called");
  console.log('====================================');
  let config = {
    method: 'post',
    url: 'http://localhost:4000/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"login api");
    return response.data;
  } catch (error) {
    // Handle error
    console.log(error,"login api");
    console.log('Error fetching data:', error);
    
  }
};


export const singupApi = async (Data) => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/signup',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"signup api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};



export const getUserListApi = async () => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/getUserList',
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  try {
    const response = await axios(config);
    console.log(response,"getUserList api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const updateUserApi = async (Data) => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/updateUser',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"updateUser api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const deleteUserApi = async (Data) => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/deleteUser',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"deleteUser api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const getDoctorsListApi = async () => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/getDoctorsList',
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  try {
    const response = await axios(config);
    console.log(response,"getDoctorsList api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const setBookingApi = async (Data) => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/setBooking',
    headers: { 
      'Content-Type': 'application/json'
    },  data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"getDoctorsList api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }



};



export const getBookingListApi = async () => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/getBookingList',
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  try {
    const response = await axios(config);
    console.log(response,"getBookingList api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const deleteBookingApi = async (Data) => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/deleteBooking',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"delete booking api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const updateDateApi = async (Data) => {
  let config = {
    method: 'post',
    url: 'http://localhost:4000/updateBooking',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : Data
  };
  try {
    const response = await axios(config);
    console.log(response,"updateBooking  api");
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};