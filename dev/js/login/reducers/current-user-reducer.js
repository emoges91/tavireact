import { SET_CURRENT_USER } from '../../common/actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {

    console.log("reducer : " + JSON.stringify(action));

    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: {
                    id: action.user.id,
                    name: action.user.name
                }
            };
        default: return state;
    }
}