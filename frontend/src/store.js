import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer} from './reducers/userReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

const initialState = {};

const middlerWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlerWare)),
);

export default store;
