import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import modalReducer from './modal/reducer';
import linkReducer from './link/reducer';

const rootReducer = combineReducers({ userReducer, modalReducer, linkReducer });

export default rootReducer;
