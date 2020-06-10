import React from 'react';

import './Avatar.css';
import icon from '../../assets/icon.png';

const Avatar = ({ userIcon, isShowOnlineIcon }) => {
  return (
    <div className="Avatar">
      <img src={userIcon ? userIcon : icon} alt="Avatar" className="icon" />
      {
        isShowOnlineIcon
          ? <>
            <i className="circle" />
            <i className="check" />
          </>
          : null
      }
    </div>
  );
};

export default Avatar;
