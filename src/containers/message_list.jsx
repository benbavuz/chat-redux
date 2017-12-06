import React, {Component} from "react";
import Message from "../components/message";
import MessageForm from '../components/message_form'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel != this.props.selectedChannel) {
      this.props.setMessages(nextProps .selectedChannel);
    }
  }

  render () {
    return (
      <div className="message-list">
        <div className="channel-title">
          #{this.props.selectedChannel}
        </div>
        {this.props.messages.map( message => <Message key={message.id} message={message}/>)}
        <MessageForm />
      </div>
    );
  }
}

// retrieve state to be used as props by Component
function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

// displatch actions to be used as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

