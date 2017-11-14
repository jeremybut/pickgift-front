import { v4 } from 'node-uuid';
import { browserHistory } from 'react-router';
import * as Api from '../api/api';
import * as types from '../constants/actionTypes';
import { sendSnack } from './snacks';

// SHOW
const requestVillage = () => ({
  type: types.VILLAGE_REQUEST,
});

const receiveVillage = payload => ({
  type: types.VILLAGE_SUCCESS,
  payload
});

const failVillage = payload => ({
  type: types.VILLAGE_ERROR,
  payload,
  error: true,
});

export const fetchVillage = id => (dispatch) => {
  dispatch(requestVillage(id));

  Api.get(`villages/${id}`)
    .then(
      response => dispatch(receiveVillage(response)),
      error => dispatch(failVillage(error)),
    );
};

const requestCreateVillage = () => ({
  type: types.CREATE_VILLAGE_REQUEST,
});

const createVillageError = () => ({
  type: types.CREATE_VILLAGE_ERROR,
});

const createVillageSuccess = payload => ({
  type: types.CREATE_VILLAGE_SUCCESS,
  payload,
});

export const createVillage = village => (dispatch) => {
  dispatch(requestCreateVillage());

  return Api.post('/villages', { village })
    .then(
      (response) => {
        dispatch(sendSnack({
          id: v4(),
          type: 'success',
          duration: 5000,
          message: 'snacks.create_village.success',
          action: 'OK',
        }));
        dispatch(createVillageSuccess(response));
        return browserHistory.push('/villages/');
      },
      (error) => {
        dispatch(sendSnack({
          id: v4(),
          type: 'error',
          duration: 5000,
          message: 'snacks.create.error',
          action: 'OK',
        }));
        return dispatch(createVillageError(error));
      },
    );
};
