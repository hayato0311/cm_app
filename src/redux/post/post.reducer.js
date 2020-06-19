import { PostActionTypes } from './post.types';
import { addClapOfArticle } from './post.utils';

const INITIAL_STATE = {
    postItems: [
        /* sample data */
        // {
        //     id: 0,
        //     from: {
        //         id: 1,
        //         name: 'tetsu',
        //         img: 'https://2.bp.blogspot.com/--7P6wnqqhKs/Vf-al_FzDEI/AAAAAAAAyHs/95mdc0mfka8/s800/icon_business_man01.png',
        //     },
        //     to: {
        //         id: 2,
        //         name: 'sota',
        //         img: 'https://3.bp.blogspot.com/-B-xk9ZeFe4A/Vf-amDqeQmI/AAAAAAAAyHw/8oOgEX6foYc/s800/icon_business_man02.png'
        //     },
        //     comment: 'プレゼン最高でした。',
        //     clap: 0,
        //     clapHistory: {},
        //     uploadTime: '2020/6/18 22:21',
        // }
    ],
    count: 0,
};


const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.ADD_ARTICLE:
            return {
                ...state,
                postItems: [...state.postItems, action.payload],
                count: state.count + 1,
            }

        case PostActionTypes.ADD_CLAP:
            return {
                ...state,
                postItems: addClapOfArticle(state.postItems, action.payload)
            }
        default:
            return state;
    }
};


export default postsReducer;