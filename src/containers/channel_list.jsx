import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions';

class ChannelList extends Component {

  handleSelect = (channel) => {
   this.props.selectChannel(channel);
   // channel.classList.toggle("active-channel");
  }

  render () {
    return (
      <div className="channel-section">
        <div className="channel-list">
          {this.props.channels.map(channel =>
            <div className="chan" onClick={() => this.handleSelect(channel)}>
            #{channel}
            </div>) }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (ChannelList);
