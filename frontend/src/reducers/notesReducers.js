export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';
export const NOTES_FAIL = 'NOTES_FAIL';
export const NOTE_CREATE_REQ = 'NOTE_CREATE_REQ';
export const NOTE_CREATE_SUCCESS = 'NOTE_CREATE_SUCESS';
export const NOTE_CREATE_FAIL = 'NOTE_CREATE_FAIL';

export const notesReducer = (state, action) => {
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
      return {loading: true, notes: [...state.notes, ...[action.payload]]};
    }

    case NOTE_CREATE_FAIL: {
      return {loading: false, error: action.payload};
    }

    default:
      return state;
  }
};
