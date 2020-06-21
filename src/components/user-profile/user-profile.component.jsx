import React from 'react';
import { connect } from 'react-redux';

import SelectCurrentUser from '../select-current-user/select-current-user.component'

import './user-profile.styles.scss'

const UserProfile = ({ currentUser, userData }) => {
    const { img, clapRest, clapped } = userData[currentUser.name];
    return (
        <div className="user-profile">
            <div className="user">
                <img width="90%" src={img} alt="" />
                <SelectCurrentUser />
            </div>
            <div className="clap-info">
                拍手できる : {clapRest} <br />
                拍手された : {clapped}
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    userData: state.userData.userData,
});

export default connect(mapStateToProps)(UserProfile);