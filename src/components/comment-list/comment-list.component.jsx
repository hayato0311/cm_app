import React from 'react';
import { connect } from 'react-redux';


import CommentItem from '../../components/comment-item/comment-item.component'



import './comment-list.styles.scss'

const CommentList = ({ postItems }) => (
    <div className="comment-list">
        {
            postItems.map((article) => (
                <CommentItem key={article.id} article={article} />
            ))
        }
    </div>
);

const mapStateToProps = state => ({
    targetUser: state.user.targetUser,
    currentUser: state.user.currentUser,
    articleId: state.post.count,
    postItems: state.post.postItems.sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
    }),
});

// const sortInverse = (value) => {
//     postItems.sort(function (a, b) {
//         if (a.id > b.id) return -1;
//         if (a.id < b.id) return 1;
//         return 0;
//     });
// }


export default connect(mapStateToProps)(CommentList);