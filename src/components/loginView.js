import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./components.css";
class LoginView extends PureComponent {
  static propTypes = {
    onLogin: PropTypes.func,
    username: PropTypes.string,
    connected: PropTypes.bool,
    error: PropTypes.string
  };

  state = {
    username: this.props.username || ""
  };

  onTextChangeHandler = e => {
    const username = e.target.value;
    this.setState({ username });
  };

  onLoginHandler = () => {
    if (this.props.onLogin) {
      this.props.onLogin(this.state.username);
    }
  };

  enterHandler = e => {
    if (e.key === "Enter") {
      this.onLoginHandler();
    }
  };

  render() {
    if (this.props.connected) {
      return null;
    }
    return (
      <div className="root">
        <div className="form">
          <label>
            <span>Nickname</span>
            <input
              id="name"
              name="name"
              className="input"
              onKeyPress={this.enterHandler}
              onChange={this.onTextChangeHandler}
              value={this.state.username}
            />
            {this.props.error && (
              <b className="errorPlaceholder">{this.props.error}</b>
            )}
          </label>
          <button className="send" onClick={this.onLoginHandler}>
            Enter
          </button>
        </div>
      </div>
    );
  }
}

export default LoginView;
