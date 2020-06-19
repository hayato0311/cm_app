import USERS_DATA from './user-data.data';

import { UserActionTypes } from './user-data.types';
import { decreaseClapPoint, increaseClappedPoint } from './user-data.utils';

const INITIAL_STATE = {
    userData: USERS_DATA,
    userList: Object.keys(USERS_DATA),
}

const userDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.CLAP:
            return {
                ...state,
                userData: decreaseClapPoint(state.userData, action.payload)
            }
        case UserActionTypes.CLAPPED:
            return {
                ...state,
                userData: increaseClappedPoint(state.userData, action.payload)
            }
        default:
            return state;
    }
};

export default userDataReducer;