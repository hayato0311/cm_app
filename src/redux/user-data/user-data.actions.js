import { UserActionTypes } from './user-data.types';


export const clap = user => ({
    type: UserActionTypes.CLAP,
    payload: user,
})

export const clapped = user => ({
    type: UserActionTypes.CLAPPED,
    payload: user,
})