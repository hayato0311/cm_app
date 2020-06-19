import React from 'react';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './comment-item.styles.scss'

import { addClap } from '../../redux/post/post.actions';
import { clap, clapped } from '../../redux/user-data/user-data.actions';

class CommentItem extends React.Component {

    handlerClapClicked = event => {
        if (this.props.currentUser.clap_rest >= 2) {
            console.log('aaaaaa');
            return (addClap({ articleId: event.target.id, userName: this.props.currentUser.name }),
                clap(this.props.currentUser),
                clapped(this.props.targetUser));
        }

    }
    render() {
        const { article } = this.props;
        return (
            <div className="comment-item">
                <div className="relation">
                    <img height="100%" src={article.from.img} alt="" />
                    <FontAwesomeIcon icon={['fas', "arrow-right"]} color="grey" />
                    <img height="100%" src={article.to.img} alt="" />
                </div>
                <div className="comment">
                    {article.comment}
                </div>
                <div className="info">
                    <button type="button" className="clap-button" id='1' onClick={this.handlerClapClicked}>
                        <FontAwesomeIcon icon={['fas', "sign-language"]} color="skyblue" size="2x" />
                        <span className="clap-count">{article.clap}</span>
                    </button>
                    <div className="upload-time">
                        {article.uploadTime}
                    </div>
                </div>


            </div>);
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    targetUser: state.user.targetUser,
    userData: state.userData.userData,
});

const mapDispatchToProps = dispatch => ({
    addClap: article => dispatch(addClap(article)),
    clap: user => dispatch(clap(user)),
    clapped: user => dispatch(clapped(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);