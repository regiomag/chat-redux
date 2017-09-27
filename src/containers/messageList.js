import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import { fetchMessages } from '../actions/index';

class MessageList extends Component {
  componentWillMount () {
    this.props.fetchMessages(this.props.channel);
  }

  render () {
    return (
      <div className="message-list">
        { this.props.messages.map((message) => {
          return <Message message={message} key={message.id} />
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch);
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
