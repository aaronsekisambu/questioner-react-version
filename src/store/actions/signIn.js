import * as types from '../../action-types';
import axios from 'axios';

const sendData = ({
  email,
  password
}) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
      email,
      password
    })
    console.log('data', response)
    dispatch({
      type: types.SIGN_IN,
      payload: response
    })
  } catch (error) {
    // console.log('error', error.response)
    dispatch({
      type: 'FAILED',
      payload: error.message
    })
  }
}
export default sendData;