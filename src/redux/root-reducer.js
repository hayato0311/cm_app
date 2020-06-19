import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import userDataReducer from './user-data/user-data.reducer';
import postReducer from './post/post.reducer';
import tmpReducer from './tmp/tmp.reducer';

export default combineReducers({
    user: userReducer,
    userData: userDataReducer,
    post: postReducer,
    tmp: tmpReducer,
});