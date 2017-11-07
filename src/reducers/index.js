import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import user from './user';
import snacks from './snacks';

const pickGift = combineReducers({
  snacks,
  user,
  form: reduxFormReducer,
});

export default pickGift;
