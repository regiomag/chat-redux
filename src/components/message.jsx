import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageForm from '../containers/messageForm';
// import MessageList from '../containers/messageList';

const Message= (props) => {
  return(
    <div className="row padding_message">
      <div className="col-xs-6">
        {props.message.content}
      </div>
      <div className="col-xs-6">
        {props.message.author}
      </div>
    </div>
  )
}

export default Message;
