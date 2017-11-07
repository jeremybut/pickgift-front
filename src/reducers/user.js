import * as types from '../constants/actionTypes';

const initialState = {};

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default user;
