import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./components.css";
import TextInput from "./textInput";

class ChatView extends PureComponent {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
    onSend: PropTypes.func,
    connected: PropTypes.bool
  };

  static defaultProps = {
    messages: [],
    onSend: null,
    connected: false
  };

  render() {
    if (!this.props.connected) {
      return null;
    }
    return (
      <div className="root">
        <div className="chat">
          <ul>
            {this.props.messages.map((item, index) => (
              <Message key={index} {...item} />
            ))}
          </ul>
        </div>
        <TextInput onSend={this.props.onSend} />
      </div>
    );
  }
}

class Message extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    text: PropTypes.string.isRequired,
    received: PropTypes.bool
  };

  static defaultProps = {
    received: false
  };

  render() {
    return (
      <li className={this.props.received ? "l" : null}>
        <div>
          {this.props.received && this.props.username && (
            <b>{this.props.username},</b>
          )}
          <p>
            {this.props.username ? this.props.text : <i>{this.props.text}</i>}
          </p>
        </div>
      </li>
    );
  }
}

export default ChatView;
