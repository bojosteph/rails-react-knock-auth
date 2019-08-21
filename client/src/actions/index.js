import axios from 'axios';
import history from '../history';
import {
  RECEIVE_ARTICLES,
  ADD_ARTICLE,
  RECEIVE_ARTICLE,
  REMOVE_ARTICLE,
  UPDATE_ARTICLE,
  REPLACE_ARTICLE

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

export const getArticle = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}.json`)
      .then(response => {
        dispatch({ type: RECEIVE_ARTICLE, payload: response.data });
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}.json`)
    .then(response => {
      dispatch({ type: REMOVE_ARTICLE, payload: {id}})
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const updateArticle = (article) => {
  const articleId = article.id;
  return (dispatch) => {
    return axios.patch(`${apiUrl}/${article.id}.json`, {title: article.title, content: article.content})
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_ARTICLE, payload: {id: data.id, title: data.title, content: data.content}})
        dispatch({ type: REPLACE_ARTICLE, payload: {id: data.id, title: data.title, content: data.content}})
      })
      .then(() => {
        history.push(`/articles/${articleId}`)
      })
      .catch(error => { throw(error)});
  }
}

