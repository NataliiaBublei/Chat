import React from 'react';

import './DialogItem.css';
import Avatar from '../Avatar';

const CN = 'DialogItem';

const DialogItem = ({ user, isShowOnlineIcon, onChangeCurrentUser }) => {

  const { fullName, dialog, avatar } = user;
  const { date } = dialog[dialog.length - 1];
  const { text } = dialog[dialog.length - 1];

  return (
    <div className={CN} onClick={() => onChangeCurrentUser(user)}>
      <Avatar userIcon={avatar} isShowOnlineIcon={isShowOnlineIcon} />
      <div className={`${CN}__info`}>
        <div className={`${CN}__info_user`}>
          <span>{fullName}</span>
          <p>{text}</p>
        </div>
        <div className={`${CN}__info_time`}>
          <small>{date}</small>
        </div>
      </div>
    </div>

  );
};

export default DialogItem;
