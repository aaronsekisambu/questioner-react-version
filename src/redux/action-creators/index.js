import axios from "axios";
import * as types from "../action-types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`
};
export const userLogin = (accessToken, provider) => async dispatch => {
  const URL = `${process.env.REACT_APP_QUESTIONER_API}/auth/google`;
  console.log("URL", URL);
  try {
    const logins = await axios.post(
      URL,
      { access_token: accessToken, provider },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
      const { token } = logins.data;
      localStorage.setItem('token', token);
      console.log(token);
    console.log("here", logins.data);
    return dispatch({type: types.USER_LOGIN_SUCCESS, payload: logins.data})
  } catch (error) {
    console.log("response", error.response);
    console.log("config", error.config);
  }
};

