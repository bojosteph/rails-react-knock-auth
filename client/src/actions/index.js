import axios from 'axios';
import history from '../history';
import {
  RECEIVE_ARTICLES,
  ADD_ARTICLE

} from './types';


const apiUrl = 'http://localhost:3001/api/articles';

export const getArticles = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}.json`)
    .then(response => {
      dispatch({ type: RECEIVE_ARTICLES, payload: response.data})
    })
    .catch(error => { throw(error)})
  }
};

export const addArticle = ({ title, content }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}.json`, {title, content})
    .then(response => {
      let data = response.data;
      dispatch({
        type: ADD_ARTICLE,
        payload: {id: data.id, title: data.title, content: data.content}
      })
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(error => { throw(error)});
  };
};