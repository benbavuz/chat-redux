import React, {Component} from "react";

class Message extends Component {

  render () {
    return (
      <div className="message">
        <div className="message-header">
          <div className="message-author">
            {this.props.message.author}
          </div>
          <div className="message-time">
            {this.props.message.created_at}
          </div>
        </div>
        <div className="message-content">
          {this.props.message.content}
        </div>
      </div>
    );
  }

}

export default Message;
