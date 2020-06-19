import React from 'react';


import UserProfile from '../../components/user-profile/user-profile.component'
import PostFrom from '../../components/post-form/post-form.component'
import CommentList from '../../components/comment-list/comment-list.component'

import './homepage.styles.scss';


const HomePage = ({ count }) => (
    <div className="homepage">
        <UserProfile />
        <PostFrom />
        <CommentList />
    </div>
);

export default HomePage;