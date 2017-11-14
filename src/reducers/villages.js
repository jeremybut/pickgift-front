import * as types from '../constants/actionTypes';

const initialState = {
  villageById: {},
  villagesIds: [],
};

const villages = (state = initialState, action) => {
  let villageById = {};
  const { payload, type } = action;

  switch (type) {
    case types.VILLAGE_SUCCESS:
      return {
        ...state,
        villageById: {
          ...state.villageById,
          [action.payload.id]: {
            ...state.villageById[action.payload.id],
            ...payload,
          },
        },
      };
    case types.VILLAGES_SUCCESS:
      for (const village of payload) {
        villageById = {
          ...villageById,
          [village.id]: village,
        };
      }
      return {
        ...state,
        villageById,
        villagesIds: payload.map(village => village.id),
      };
    case types.CREATE_VILLAGE_SUCCESS:
      const { id } = action.payload;
      return {
        ...state,
        villageById: {
          ...state.villageById,
          [id]: {
            ...state.villageById[id],
            ...action.payload,
          },
        },
        villagesIds: [...state.villagesIds, id],
      };
    default:
      return state;
  }
};

export default villages;
