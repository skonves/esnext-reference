import { combineReducers } from 'redux';
import linkReducer from './linkReducer';
import numberReducer from './numberReducer';

export default combineReducers({
	linkReducer,
	numberReducer
});
