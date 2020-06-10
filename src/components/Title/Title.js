import React from 'react';

import './Title.css';
import Avatar from '../Avatar';

const Title = ({ userIcon, currentUser, isShowOnlineIcon }) => {
  return (
    <div className="Title">
      <Avatar
        userIcon={userIcon}
        isShowOnlineIcon={isShowOnlineIcon}
      />
      <h2>{currentUser.fullName}</h2>
    </div>
  );
};

export default Title;
