import { UserActionTypes } from './user.types';

import USERS_DATA from '../user-data/user-data.data';

const INITIAL_STATE = {
    currentUser: USERS_DATA['tadashi'],
    targetUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case UserActionTypes.SET_TARGET_USER:
            return {
                ...state,
                targetUser: !action.payload ? null : action.payload
            }
        default:
            return state;
    }
};

export default userReducer;