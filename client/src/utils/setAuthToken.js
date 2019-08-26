import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['jwt'] = token;
  } else {
    delete axios.defaults.headers.common['jwt'];
  }
};

export default setAuthToken;