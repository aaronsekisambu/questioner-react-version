import * as types from '../action-types/index';
import initialState from '../store/initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case types.USER_LOGIN_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};