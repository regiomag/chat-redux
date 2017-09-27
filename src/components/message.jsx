import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageForm from '../containers/messageForm';
// import MessageList from '../containers/messageList';

const Message= (props) => {

  return(
    <div>
      {props.message.content} par {props.message.author}
    </div>
  )
}

export default Message;
