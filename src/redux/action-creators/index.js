/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import axios from 'axios';
import * as types from '../action-types';


export const userLogin = (accessToken, provider) => async (dispatch) => {
  const URL = `${process.env.REACT_APP_QUESTIONER_API}/auth/google`;
  try {
    const logins = await axios.post(
      URL,
      { access_token: accessToken, provider },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    const { token } = logins.data;
    localStorage.setItem('token', token);
    return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: logins.data });
  } catch (error) {
    const { response } = error;
    return dispatch({ type: types.USER_LOGIN_FAILED, payload: response });
  }
};
