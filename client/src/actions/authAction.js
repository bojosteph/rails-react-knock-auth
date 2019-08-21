import axios from 'axios';
import history from '../history';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

const userUrl = 'http://localhost:3001/api/user_token'    



const login = (request) => {
  axios.post(`${userUrl}`, request)
    .then(response => {
      dispatchEvent({
        type: LOGIN_SUCCESS, payload: response.data
      })
    }).catch(error => { throw(error)})

}