import USERS_DATA from './user-data.data';

import { UserActionTypes } from './user-data.types';
import { updateClapPoints } from './user-data.utils';

const INITIAL_STATE = {
    userData: USERS_DATA,
    userList: Object.keys(USERS_DATA),
}

const userDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.UPDATE_CLAP_POINTS:
            return {
                ...state,
                userData: updateClapPoints(state.userData, action.payload),
            }
        default:
            return state;
    }
};

export default userDataReducer;