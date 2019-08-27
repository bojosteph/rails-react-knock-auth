import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import articles from './articlesReducer';
import article from './articleReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  articles: articles,
  article: article,
});
