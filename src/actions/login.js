import { browserHistory } from 'react-router';
import { v4 } from 'node-uuid';

import * as Api from '../api/api';
import * as types from '../constants/actionTypes';
import { sendSnack } from './snacks';

const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
});

const receiveLoginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const receiveLoginError = payload => ({
  type: types.LOGIN_ERROR,
  payload,
});

export const loginUser = credentials => dispatch => {
  dispatch(requestLogin());

  const payload = {
    email: credentials.email,
    password: credentials.password,
    grant_type: 'password',
  };

  return Api.postAuthorizationCode(payload).then(
    response => {
      dispatch(
        sendSnack({
          id: v4(),
          type: 'success',
          duration: 5000,
          message: 'snacks.login.success',
          action: 'OK',
        }),
      );
      dispatch(receiveLoginSuccess(response));
      return browserHistory.push('/');
    },
    error => {
      dispatch(
        sendSnack({
          id: v4(),
          type: 'error',
          duration: 5000,
          message: 'snacks.login.error',
          action: 'OK',
        }),
      );
      return dispatch(receiveLoginError(error));
    },
  );
};
