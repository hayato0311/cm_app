import React from 'react';
import { connect } from 'react-redux';

import { addArticle } from '../../redux/post/post.actions';


import SelectTargetUser from '../select-target-user/select-target-user.component'
import './post-form.styles.scss'

class PostFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newArticle: {
                comment: '',
            },
            btnHidden: true,

        };
        this.myRef = React.createRef();

    }

    handleCommentChange = event => {
        const { value } = event.target;
        value.trim().length < 5 || this.props.targetUser === null
            ? this.setState({
                newArticle: {
                    ...this.state.newArticle,
                    comment: value,
                }, btnHidden: true,
            })
            : this.setState({
                newArticle: {
                    ...this.state.newArticle,
                    comment: value,
                }, btnHidden: false
            })
    }

    handleSubmit = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        month = ('0' + month).slice(-2);
        day = ('0' + day).slice(-2);
        hours = ('0' + hours).slice(-2);
        minutes = ('0' + minutes).slice(-2);

        this.setState({ newArticle: {} });
        const newArticle = {
            ...this.state.newArticle,
            ...{
                uploadTime: `${year}/${month}/${day} ${hours}:${minutes}`,
                id: this.props.articleId,
                clap: 0,
                clappedDict: {},
                from: { name: this.props.currentUser.name, img: this.props.currentUser.img },
                to: { name: this.props.targetUser.name, img: this.props.targetUser.img },
            }
        };
        var textarea = this.myRef.current;
        textarea.value = "";
        this.setState({ btnHidden: true });
        return this.props.addArticle(newArticle);
    }
    render() {
        const { targetUser } = this.props;
        return (
            <div className="post-form" >
                <div className="post-content">
                    <div className="user">
                        {
                            targetUser
                                ? (<img width="90%" src={targetUser.img} alt="" />)
                                : (<img width="90%" src={require('../../assets/img/anonymous.png')} alt="" />)
                        }

                        <SelectTargetUser />
                    </div>
                    <textarea ref={this.myRef} id='post-comment' className="comment" placeholder="コメントを記入してください。" value={this.comment} onChange={this.handleCommentChange} required></textarea>
                </div>
                {
                    this.state.btnHidden
                        ? null
                        : <button type="submit" className="btn-square" onClick={this.handleSubmit}  >投稿</button>
                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    targetUser: state.user.targetUser,
    currentUser: state.user.currentUser,
    articleId: state.post.count,
    postItems: state.post.postItems,
});

const mapDispatchToProps = dispatch => ({
    addArticle: article => dispatch(addArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFrom);