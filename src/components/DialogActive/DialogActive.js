import React  from 'react';

import './DialogActive.css'
import Title from '../Title';
import CurrentDialog from '../CurrentDialog';
import InputSend from '../InputSend';

const DialogActive = ({ currentUser, isShowOnlineIcon, meId, onSendNewMessage }) => {
  return (
    <div className="DialogActive">
      <Title
        userIcon={currentUser.avatar}
        currentUser={currentUser}
        isShowOnlineIcon={isShowOnlineIcon}
      />
      <CurrentDialog
        currentUser={currentUser}
        meId={meId}
      />
      <InputSend
        onSendNewMessage={onSendNewMessage}
        currentUser={currentUser}
      />
    </div>
  );
};

export default DialogActive;
