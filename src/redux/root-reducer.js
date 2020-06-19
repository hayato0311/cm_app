import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import userDataReducer from './user-data/user-data.reducer';
import postReducer from './post/post.reducer';

let removeItem = false;
if (removeItem) {
    storage.removeItem('persist:root');
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'userData', 'post'],
};

const rootReducer = combineReducers({
    user: userReducer,
    userData: userDataReducer,
    post: postReducer,
});

export default persistReducer(persistConfig, rootReducer);