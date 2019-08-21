import { RECEIVE_ARTICLE, UPDATE_ARTICLE} from '../actions/types';

export default function articleReducer ( state = {}, action) {
  switch(action.type) {
    case RECEIVE_ARTICLE:
      return action.payload
    case UPDATE_ARTICLE:
      return {
        id: action.id,
        title: action.payload.title,
        content: action.payload.content
      }
    default:
      return state;
  }
}