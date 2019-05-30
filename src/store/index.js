import thunk from 'redux-thunk';

import {
  createStore,
  applyMiddleware
} from 'redux';


import authReducer from '../store/reducers/auth';
import {
  composeWithDevTools
} from 'redux-devtools-extension';



const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;