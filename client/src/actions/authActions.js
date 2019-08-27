import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import history from '../history';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  const request = {"user": userData};  
  axios
    .post("api/users", request)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
const userUrl = 'http://localhost:3001/api/user_token'    

export const loginUser = userData =>  dispatch => {
  const requestLogin = {"auth": userData};
  axios
      .post(`${userUrl}.json`, requestLogin)
      .then(res => {
      // const { token } = res.data.jwt;
      localStorage.setItem("jwtToken", res.data.jwt);
      // Set token to Auth header
      setAuthToken(res.data.jwt);
      // Decode token to get user data
      const decoded = jwt_decode(res.data.jwt);
      // Set current user
      dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
    };




// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
