import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./components.css";

class TextInput extends PureComponent {
  static propTypes = {
    onSend: PropTypes.func
  };

  static defaultProps = {
    onSend: null
  };

  element = null;

  state = {
    text: ""
  };

  setRef = htmlElement => {
    this.element = htmlElement;
    this.setFocus();
  };

  setFocus = () => {
    if (this.element) {
      this.element.focus();
    }
  };

  onSendHandler = () => {
    if (this.props.onSend && this.state.text.trim().length > 0) {
      this.props.onSend(this.state.text);
      this.setState({ text: "" });
      this.setFocus();
    }
  };

  onTextChangeHandler = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  enterHandler = e => {
    if (e.key === "Enter") {
      this.onSendHandler();
    }
  };

  render() {
    return (
      <div className="textInput">
        <input
          ref={this.setRef}
          id="msg"
          className="input"
          onChange={this.onTextChangeHandler}
          onKeyPress={this.enterHandler}
          value={this.state.text}
          placeholder="Enter text message"
        />
        <button className="send" onClick={this.onSendHandler}>
          Send
        </button>
      </div>
    );
  }
}

export default TextInput;
