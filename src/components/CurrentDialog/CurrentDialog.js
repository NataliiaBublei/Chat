import React from 'react';

import './CurrentDialog.css';
import MessageItem from '../MessageItem';

const CurrentDialog = ({ currentUser, meId }) => {
  return (
    <div className="CurrentDialog" id="dialogContainer">
      <ul>
        {currentUser.dialog.map((message, index) => {
          return (
            <li key={index}>
              <MessageItem
                currentUser={currentUser}
                isMe={meId === message.userId}
                message={message}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CurrentDialog;
