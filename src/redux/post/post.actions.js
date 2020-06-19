import { PostActionTypes } from './post.types';

export const addArticle = article => ({
    type: PostActionTypes.ADD_ARTICLE,
    payload: article,
});

export const addClap = article => ({
    type: PostActionTypes.ADD_CLAP,
    payload: article,
});