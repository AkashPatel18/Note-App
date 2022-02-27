import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from '../reducers/userReducers';
import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
} from './../reducers/userReducers';

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
        payload: true,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
  };
};

export const register = (name, email, password, picture) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_REGISTER_REQUEST});
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.post(
        'api/users',
        {
          name,
          email,
          password,
          picture,
        },
        config,
      );

      dispatch({type: USER_REGISTER_SUCCESS, payload: data});
      dispatch({type: USER_LOGIN_SUCCESS, payload: data});
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (e) {
      dispatch({type: USER_REGISTER_FAIL, payload: e});
    }
  };
};
