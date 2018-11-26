import { connect } from "react-redux";
import { loginAction } from "../actions";
import LoginView from "../components/loginView";

const stateToProps = state => {
  const { name, connected, error } = state.user;
  return {
    username: name,
    connected,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  onLogin: username => dispatch(loginAction(username))
});

export default connect(
  stateToProps,
  mapDispatchToProps
)(LoginView);
