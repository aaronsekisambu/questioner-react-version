import * as types from '../../action-types';

const initialState = {
  initState: {
    email: 'Aaron@aaron.con',
    password: 'Snow'
  },
  user: {}
};

const authReducer = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case types.SIGN_IN:
      console.log('in reducer', payload)
      return {
        ...state,
        user: payload
      }
      default:
        return state;
  }
}

export default authReducer;