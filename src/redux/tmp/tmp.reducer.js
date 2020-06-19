import { TmpActionTypes } from './tmp.types';

const INITIAL_STATE = {
    count: 0,
}

const tmpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TmpActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case TmpActionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
};

export default tmpReducer;