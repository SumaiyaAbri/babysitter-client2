import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../actions/authActions';
  
  const initialState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: '',
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          user: action.payload,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  