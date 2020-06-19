import React from 'react';
import { connect } from 'react-redux';

import { setTargetUser } from '../../redux/user/user.actions';

import './select-target-user.styles.scss'


const SelectTargetUser = ({ currentUser, userList, userData, setTargetUser }) => (
    <div className="select-user">
        <select onChange={(e) => setTargetUser(userData[e.target.value])}>
            <option key="0" value="anonymous"></option>
            {
                userList.map((userName, id) => (
                    userName === currentUser.name
                        ? null
                        : <option key={id + 1} value={userName}>{userName}</option>

                ))
            }
        </select>


    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    userList: state.userData.userList,
    userData: state.userData.userData,
    targetUser: state.user.targetUser,
});

const mapDispatchToProps = dispatch => ({
    setTargetUser: user => dispatch(setTargetUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTargetUser);