import React from 'react';

import './MessageItem.css';
import Avatar from '../Avatar';

const CN = 'MessageItem';

const MessageItem = ({ currentUser, message, isMe }) => {

  const avatar = isMe ? null : <Avatar userIcon={currentUser.avatar} />;
  const position = isMe ? 'right' : 'left';
  const colorMessage = isMe ? 'grey' : 'blue';

  return (
    <div className={`${CN} ${position}`}>
      {avatar}
      <div className={`${CN}__info ${position}`}>
        <div className={`${CN}__info_text ${colorMessage}`}>
          <span>{message.text}</span>
        </div>
        <div className={`${CN}__info_time`}>
          <small>{message.date}, {message.time}</small>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
