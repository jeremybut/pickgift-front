import * as Api from '../api/api';
import * as types from '../constants/actionTypes';

// INDEX
const requestVillages = () => ({
  type: types.VILLAGES_REQUEST,
});

const receiveVillages = payload => ({
  type: types.VILLAGES_SUCCESS,
  payload,
});

const failVillages = payload => ({
  type: types.VILLAGES_ERROR,
  payload,
  error: true,
});

export const fetchVillages = () => (dispatch) => {
  dispatch(requestVillages());

  Api.get('users/me/villages')
    .then(
      response => dispatch(receiveVillages(response)),
      error => dispatch(failVillages(error)),
    );
};
