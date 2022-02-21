import axios from 'axios';
import {
  NOTES_REQUEST,
  NOTES_SUCCESS,
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQ,
  NOTE_CREATE_SUCCESS,
  NOTES_FAIL,
} from '../reducers/notesReducers';

export const fetchNotes = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_REQUEST,
      });
      const {
        userLogin: {userInfo},
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const {data} = await axios.get(`api/notes`, config);

      console.warn(data);

      dispatch({
        type: NOTES_SUCCESS,
        payload: data,
      });
    } catch (e) {
      const message = e.respose && e.respose.data.message;

      dispatch({
        type: NOTES_FAIL,
        payload: message,
      });
    }
  };
};

export const createNote = (title, content, category) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: NOTE_CREATE_REQ});
      const {
        userLogin: {userInfo},
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const {data} = await axios.post(
        `api/notes/create`,
        {
          title,
          content,
          category,
        },
        config,
      );

      dispatch({type: NOTE_CREATE_SUCCESS, payload: data});
    } catch (e) {
      dispatch({type: NOTE_CREATE_FAIL, payload: e});
    }
  };
};
