import axios from 'axios';
import {
  NOTES_REQUEST,
  NOTES_SUCCESS,
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQ,
  NOTE_CREATE_SUCCESS,
  NOTES_FAIL,
  NOTE_UPDATE_SUCCESS,
} from '../reducers/notesReducers';
import {NOTE_UPDATE_REQ, NOTE_UPDATE_FAIL} from './../reducers/notesReducers';

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
      console.log(data);
      dispatch({type: NOTE_CREATE_SUCCESS, payload: data});
    } catch (e) {
      dispatch({type: NOTE_CREATE_FAIL, payload: e});
    }
  };
};

export const updateNote = (id, title, content, category) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: NOTE_UPDATE_REQ});
      const {
        userLogin: {userInfo},
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          'Access-Control-Allow-Origin': '*',
          userid: userInfo._id,
        },
      };

      const {data} = await axios.put(
        `api/notes/${id}`,
        {
          title,
          content,
          category,
        },
        config,
      );

      console.log(data, 'dsjfls');

      dispatch({type: NOTE_UPDATE_SUCCESS, payload: data});
    } catch (e) {
      dispatch({type: NOTE_UPDATE_FAIL, payload: e});
    }
  };
};
