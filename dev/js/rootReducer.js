import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import currentUserReducer from './login/reducers/current-user-reducer';

export default combineReducers({
    flashMessages,
    currentUserReducer
});