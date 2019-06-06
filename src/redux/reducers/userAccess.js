import * as types from '../action-types/index';
import initialState from '../store/initialState';

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case types.USER_LOGIN_START:
      return {
        ...state,
        user: payload
      }
      default:
        return state;
  }
}