import { 
  USER_LOADED,
  LOGIN_SUCCESS, 
  LOGIN_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('jwt'),
  isAuthenticated: null,
  loading: true,
  cuunretUser: {},
  error: null,
  user: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      }
    case LOGIN_SUCCESS:
       localStorage.setItem('jwt', action.payload.jwt);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
              
      };
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