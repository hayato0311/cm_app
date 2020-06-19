import { UserActionTypes } from './user-data.types';

export const updateClapPoints = (clickedUser, recomender, recomendedUser) => ({
    type: UserActionTypes.UPDATE_CLAP_POINTS,
    payload: {
        clickedUser: clickedUser,
        recomender: recomender,
        recomendedUser: recomendedUser,
    },
});