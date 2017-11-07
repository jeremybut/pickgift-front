const initialState = {
  byId: {},
  queue: [],
};

const snacks = (state = initialState, action) => {
  switch (action.type) {
    case 'SNACK_QUEUE':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.snack.id]: action.snack,
        },
        queue: [...state.queue, action.snack.id],
      };
    case 'SNACK_POP_IMPORTANT':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.snack.id]: action.snack,
        },
        queue: [action.snack.id, ...state.queue],
      };
    case 'SNACK_DISMISS':
      return {
        ...state,
        queue: state.queue.filter(snackId => snackId !== action.id),
      };
    case 'SNACK_CLEAR_ALL':
      return {
        ...state,
        queue: [],
      };
    default:
      return state;
  }
};

export default snacks;
