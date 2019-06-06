import { combineReducers } from 'redux';
import userAccess from './userAccess'

const rootReducer = combineReducers({
  userAccess,
});

export default rootReducer;