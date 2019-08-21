import { combineReducers } from 'redux';
import articles from './articlesReducer';
import article from './articleReducer';
import user from './authReducer';

export default combineReducers({
  articles: articles,
  article: article,
  user: user,
})