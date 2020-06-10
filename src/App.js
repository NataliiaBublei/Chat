import React, { Component } from 'react';

import './App.css';
import { apiAdapter, getRandomMessage } from './service/apiAdapter';
import Sidebar from './components/Sidebar';
import DialogActive from './components/DialogActive';
import Empty from './components/Empty';


class App extends Component {
  apiAdapter = new apiAdapter();

  state = {
    allUsers: [],
    currentUser: null,
    isShowOnlineIcon: true,
    meId: 1
  };

  componentDidMount() {
    this.apiAdapter.getAllUsers()
      .then(allUsers => {
        this.setState({
          allUsers
        });
      });
  }

  onChangeCurrentUser = currentUser => {
    this.setState({
      currentUser
    });
  };

  onSendNewMessage = message => {
    const { currentUser: { id: userId }, meId } = this.state;
    const { time, date } = this.getDateTime();

    this.apiAdapter.postNewMessage(message, meId, userId, time, date)
      .then(allUsers => this.setState({ allUsers }))
      .then(() => {
        getRandomMessage()
          .then(randomMessage =>
            this.apiAdapter.postNewMessage(randomMessage.value, userId, userId, time, date))
          .then(allUsers => this.setState({ allUsers }))
          .then(() => this.scrollToBottom());
      })
      .then(() => this.scrollToBottom());

  };

  scrollToBottom() {
    const objDiv = document.getElementById('dialogContainer');

    objDiv.scrollTop = objDiv.scrollHeight;
  }

  getDateTime() {
    const dateObj = new Date();
    const time = dateObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const date = dateObj.toLocaleDateString('en', { year: 'numeric', day: '2-digit', month: 'short' });

    return { time, date };
  }

  render() {
    const { allUsers, isShowOnlineIcon, currentUser, meId } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Sidebar
            allUsers={allUsers}
            onChangeCurrentUser={this.onChangeCurrentUser}
            isShowOnlineIcon={isShowOnlineIcon} />
          {
            !currentUser
              ? <Empty
                className="center"
                description={'Select a dialog...'} />
              : <DialogActive
                currentUser={currentUser}
                isShowOnlineIcon={isShowOnlineIcon}
                meId={meId}
                onSendNewMessage={this.onSendNewMessage} />
          }
        </div>
      </div>
    );
  }
}

export default App;
