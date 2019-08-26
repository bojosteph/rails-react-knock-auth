import axios from 'axios';
import history from '../history';
import setAuthToken from '../utils/setAuthToken';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

const userUrl = 'http://localhost:3001/api/user_token'    


export const loadUser = () => {
  return (dispatch) => {
    if(localStorage.getItem('jwt')) {
      setAuthToken(localStorage.getItem('jwt'));
    } {
      return axios.get(`${userUrl}`)
      .then(response => {
        dispatch({
          type: USER_LOADED,
          payload: response.data
        });
      })
      .catch(error => {throw(error)})
     
    } 
  }
}



export const login = user => {
  return (dispatch) => {    
    const request = {"auth": user};  
    return axios.post(`${userUrl}.json`, request)
    .then(response => { 
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
      loadUser();
    })
    .then(()=> {
      history.push("/articles")
    })
    .catch(error => { throw(error)})
  }

}

// export const addArticle = ({ title, content }) => {
//   return (dispatch) => {
//     return axios({ method: 'post', url:`${apiUrl}.json`, headers: {'Authorization': token }, data: {title, content}})
//     .then(response => {
//       let data = response.data;
//       dispatch({
//         type: ADD_ARTICLE,
//         payload: {id: data.id, title: data.title, content: data.content}
//       })
//     })
//     .then(() => {
//       history.push("/articles")
//     })
//     .catch(error => { throw(error)});
//   };
// };