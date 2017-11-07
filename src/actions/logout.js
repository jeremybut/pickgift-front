import * as types from '../constants/actionTypes';
import { v4 } from 'node-uuid';

import { sendSnack } from './snacks';

const requestLogout = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logout = () => dispatch => {
  dispatch(requestLogout());

  dispatch(
    sendSnack({
      id: v4(),
      type: 'success',
      duration: 5000,
      message: 'snacks.logout.success',
      action: 'OK',
    }),
  );
};
