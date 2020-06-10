import React from 'react';

import DialogItem from '../DialogItem';

const DialogsList = ({ allUsers, isShowOnlineIcon, onChangeCurrentUser }) => {
  return (
    <div>
      <ul>
        {
          allUsers.map(user => {
            return (
              <li key={user.id}>
                <DialogItem
                  user={user}
                  onChangeCurrentUser={onChangeCurrentUser}
                  isShowOnlineIcon={isShowOnlineIcon}
                />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default DialogsList;
