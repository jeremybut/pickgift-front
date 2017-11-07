import { browserHistory } from 'react-router';
import { v4 } from 'node-uuid';

import * as Api from '../api/api';
import * as types from '../constants/actionTypes';
import { sendSnack } from './snacks';
import { decamelizeKeys } from 'humps';

const requestSignup = () => ({
  type: types.SIGNUP_REQUEST,
});

const receiveSignupSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

const receiveSignupError = payload => ({
  type: types.SIGNUP_ERROR,
  payload,
});

export const signup = payload => dispatch => {
  dispatch(requestSignup());
  const user = decamelizeKeys(payload);

  Api.post('/v1/signup', { user })
    .then(
      response => {
        dispatch(sendSnack({
          id: v4(),
          type: 'success',
          duration: 5000,
          message: 'snacks.signup.success',
          action: 'OK',
        }));
        dispatch(receiveSignupSuccess(response));
        return browserHistory.push('/');
      },
      e => {
        dispatch(sendSnack({
          id: v4(),
          type: 'error',
          duration: 5000,
          message: e.error.message,
          action: 'OK',
        }));
        dispatch(receiveSignupError(e));
      },
    );
};
