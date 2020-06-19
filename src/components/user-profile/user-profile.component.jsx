import React from 'react';
import { connect } from 'react-redux';

import SelectCurrentUser from '../select-current-user/select-current-user.component'

import './user-profile.styles.scss'

const UserProfile = ({ currentUser }) => {
    const { img, clap_rest, claped } = currentUser;
    return (
        <div className="user-profile">
            <div className="user">
                <img width="90%" src={img} alt="" />
                <SelectCurrentUser />
            </div>
            <div className="clap-info">
                拍手できる： {clap_rest} 拍手された: {claped}
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UserProfile);