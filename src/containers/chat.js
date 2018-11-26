import { connect } from "react-redux";
import { sendMessageAction } from "../actions";
import ChatView from "../components/chatView";

const stateToProps = state => {
  const { connected } = state.user;
  return {
    messages: state.messages,
    connected
  };
};

const mapDispatchToProps = dispatch => ({
  onSend: text => dispatch(sendMessageAction(text))
});

export default connect(
  stateToProps,
  mapDispatchToProps
)(ChatView);
