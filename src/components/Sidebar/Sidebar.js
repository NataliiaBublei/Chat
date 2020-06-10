import React, { Component } from 'react';

import './Sidebar.css';
import DialogsList from '../DialogsList';
import Avatar from '../Avatar';
import InputSearch from '../InputSearch';

class Sidebar extends Component {
  state = {
    inputValue: '',
    allUsers: []
  };

  updateData = config => {
    this.setState(config);
  };

  showAllUsers = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { allUsers, isShowOnlineIcon, onChangeCurrentUser } = this.props;

    return (
      <div className="Sidebar">
        <div className="Sidebar__header">
          <Avatar isShowOnlineIcon={isShowOnlineIcon} />
          <InputSearch
            allUsers={allUsers}
            inputValue={this.state.inputValue}
            update={this.updateData}
          />
        </div>
        <div className="Sidebar__dialogs">
          <div className="Sidebar__dialogs_title" onClick={this.showAllUsers}>Chats</div>
          <DialogsList
            allUsers={this.state.inputValue ? this.state.allUsers : allUsers}
            onChangeCurrentUser={onChangeCurrentUser}
            isShowOnlineIcon={isShowOnlineIcon}
            showAllUsers={this.showAllUsers}
          />
        </div>
      </div>
    );
  };
}

export default Sidebar;
