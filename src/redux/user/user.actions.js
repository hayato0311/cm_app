import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setTargetUser = user => ({
    type: UserActionTypes.SET_TARGET_USER,
    payload: user
});