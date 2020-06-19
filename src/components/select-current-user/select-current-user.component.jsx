import React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import './select-current-user.styles.scss'

const SelectCurrentUser = ({ userList, userData, currentUser, setCurrentUser }) => (
    <div className="select-user">
        <select value={currentUser.name} onChange={(e) => setCurrentUser(userData[e.target.value])}>
            {
                userList.map((userName, id) => (
                    <option key={id} value={userName}>{userName}</option>
                ))
            }
        </select>
    </div>
);

const mapStateToProps = state => ({
    userList: state.userData.userList,
    userData: state.userData.userData,
    currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

// export default SelectCurrentUser;
export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrentUser);