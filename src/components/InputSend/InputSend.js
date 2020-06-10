import React, { Component } from 'react';

import './InputSend.css';

class InputSend extends Component {
  state = {
    message: ''
  };

  currentMessageChanged = e => {
    this.setState({ message: e.target.value });
  };

  sendMessageClicked = e => {
    const { message } = this.state;

    e.preventDefault();

    if (message.trim() && message.length > 0) {
      this.props.onSendNewMessage(message.trim());
      this.setState({
        message: ''
      });
    }
  };

  render() {
    return (
      <div className="InputSend" onSubmit={this.sendMessageClicked}>
        <form>
          <input
            type="text"
            className="input"
            value={this.state.message}
            onChange={this.currentMessageChanged}
            placeholder="Type your message" />
          <button
            type="submit"
            onClick={this.sendMessageClicked}
            className="icon" />
        </form>
      </div>
    );
  }
}

export default InputSend;
