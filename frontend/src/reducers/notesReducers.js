export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';
export const NOTES_FAIL = 'NOTES_FAIL';
export const NOTE_CREATE_REQ = 'NOTE_CREATE_REQ';
export const NOTE_CREATE_SUCCESS = 'NOTE_CREATE_SUCESS';
export const NOTE_CREATE_FAIL = 'NOTE_CREATE_FAIL';

export const NOTE_UPDATE_REQ = 'NOTE_UPDATE_REQ';
export const NOTE_UPDATE_SUCCESS = 'NOTE_UPDATE_SUCESS';
export const NOTE_UPDATE_FAIL = 'NOTE_UPDATE_FAIL';

export const NOTES_DELETE_REQUEST = 'NOTES_DELETE_REQUEST';
export const NOTES_DELETE_SUCCESS = 'NOTES_DELETE_SUCCESS';
export const NOTES_DELETE_FAIL = 'NOTES_DELETE_FAIL';

export const notesReducer = (state = {notes: []}, action) => {
  switch (action.type) {
    case NOTES_REQUEST:
      return {loading: true};
    case NOTES_SUCCESS:
      return {loading: false, notes: action.payload};
    case NOTES_FAIL:
      return {loading: false, error: action.payload};

    case NOTE_CREATE_REQ: {
      return {loading: true};
    }
    case NOTE_CREATE_SUCCESS: {
      return {loading: false, notes: [...state.notes, ...[action.payload]]};
    }

    case NOTE_CREATE_FAIL: {
      return {loading: false, error: action.payload};
    }

    default:
      return state;
  }
};

export const noteUpdateReducer = (state = {notes: []}, action) => {
  switch (action.type) {
    case NOTE_UPDATE_REQ:
      return {loading: true};
    case NOTE_UPDATE_SUCCESS:
      return {loading: false, notes: action.payload};
    case NOTE_UPDATE_FAIL:
      return {loading: false, error: action.payload};

    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_DELETE_REQUEST:
      return {loading: true};
    case NOTES_DELETE_SUCCESS:
      return {loading: false, success: true};
    case NOTES_DELETE_FAIL:
      return {loading: false, error: action.payload, success: false};

    default:
      return state;
  }
};
