import React, {Component} from "react";
import { createMessage } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {

  componentWillMount () {
    this.setState({value: ''})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel,this.props.currentUser,this.state.value);
    this.setState({value: ''});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (MessageForm);
