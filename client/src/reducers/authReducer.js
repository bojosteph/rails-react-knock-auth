import { 
  LOGIN_SUCCESS, 
  LOGIN_FAIL
} from '../actions/types';

const initialState = {
  jwt: localStorage.getItem('jwt'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.payload.jwt);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user
      }
    case LOGIN_FAIL:
      localStorage.removeItem('jwt')
      return {
        ...state,
        jwt: null,
        isAuthenticated: false,
        loading: false,
        user: null
        
      }

    default: 
      return state;

  }

}