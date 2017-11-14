import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import user from './user';
import villages from './villages';
import snacks from './snacks';

const pickGift = combineReducers({
  snacks,
  user,
  villages,
  form: reduxFormReducer,
});

export default pickGift;
