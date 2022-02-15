import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from '../reducers/userReducers';
import axios from 'axios';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_REQUEST});

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const {data} = await axios.post(
        '/api/users/login',
        {email, password},
        config,
      );

      dispatch({type: USER_LOGIN_SUCCESS, payload: data});

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (e) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: e.message,
      });
    }
  };
};
