import { SET_METATDA } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {},
    token:{},
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_METATDA:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default: return state;
    }
}