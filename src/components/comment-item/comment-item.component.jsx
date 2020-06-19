import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { addClap } from '../../redux/post/post.actions';
import { updateClapPoints } from '../../redux/user-data/user-data.actions';

import './comment-item.styles.scss'



class CommentItem extends React.Component {
    handlerClapClicked = () => {
        const { currentUser, article } = this.props;
        if (currentUser.id === article.from.id || currentUser.id === article.to.id) {
            return null;
        }
        if (currentUser.clapRest >= 2) {
            if (!Object.keys(article.clapHistory).length ||
                !article.clapHistory[currentUser.name] ||
                article.clapHistory[currentUser.name] < 15) {
                return (
                    this.props.addClap({ articleId: article.id, userName: currentUser.name }),
                    this.props.updateClapPoints(currentUser, article.from, article.to)
                );
            }
        }
        return null;
    }
    render() {
        let { article } = this.props;

        let clapHistoryArray = []; // for sorting
        Object.keys(article.clapHistory).forEach(userName => {
            clapHistoryArray.push({ userName: userName, count: article.clapHistory[userName] });
        });
        let tooltipDiscription = [<p key='0'>拍手一覧</p>];
        if (!clapHistoryArray) {
        } else {
            clapHistoryArray.sort((a, b) => {
                if (a.count > b.count) return -1;
                if (a.count < b.count) return 1;
                return 0;
            });
            console.log(clapHistoryArray);
            clapHistoryArray.forEach((element, i) => {
                tooltipDiscription.push(<p key={i + 1}>{element.userName}:  {element.count}</p>);
            });
        };
        return (
            <div className="comment-item" >
                <div className="relation">
                    <img height="100%" src={article.from.img} alt="" />
                    <FontAwesomeIcon icon={['fas', "arrow-right"]} color="grey" />
                    <img height="100%" src={article.to.img} alt="" />
                </div>
                <div className="comment">
                    {article.comment}
                </div>
                <div className="info">
                    <div>
                        <button type="button" className="clap-button" id={article.id} onClick={this.handlerClapClicked}>
                            <FontAwesomeIcon id='clap-icon' icon={['fas', "sign-language"]} color="skyblue" size="2x" />
                        </button>
                        <div className="tooltip">
                            <span className="clap-count">{article.clap}</span>
                            <div className='description'>
                                {tooltipDiscription}
                            </div>
                        </div>
                    </div>
                    <div className="upload-time">
                        {article.uploadTime}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    addClap: clickInfo => dispatch(addClap(clickInfo)),
    updateClapPoints: (clickedUser, recomender, reecomendedUser) => dispatch(updateClapPoints(clickedUser, recomender, reecomendedUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);