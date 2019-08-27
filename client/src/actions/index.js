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
const token = "Bearer " + localStorage.getItem("jwtToken")




export const getArticles = () => {
  // debugger
  return (dispatch) => {
    return axios({method: 'get', url: '/api/articles', headers: {'Authorization': token }})
    .then(response => {
      dispatch({ type: RECEIVE_ARTICLES, payload: response.data})
    })
    .catch(error => { throw(error)})
  }
};

export const addArticle = ({ title, content }) => {
  return (dispatch) => {
    return axios({ method: 'post', url:`${apiUrl}.json`, headers: {'Authorization': token }, data: {title, content}})
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
    return axios({method: 'get', url: `/api/articles/${id}`, headers: {'Authorization': token }})
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
    return axios({ method:'delete', url:`${apiUrl}/${id}.json`, headers: {'Authorization': token}})
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
    return axios({ method:'patch', url:`${apiUrl}/${article.id}.json`, headers: {'Authorization': token }, data: {title: article.title, content: article.content}})
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

