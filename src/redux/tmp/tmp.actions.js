import { TmpActionTypes } from './tmp.types';

export const increment = () => ({
    type: TmpActionTypes.INCREMENT,
});

export const decrement = () => ({
    type: TmpActionTypes.DECREMENT,
});