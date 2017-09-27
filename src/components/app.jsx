import React from 'react';
import MessageList from '../containers/messageList';
import ChannelList from '../containers/channelList';
import Message from './/message';
import MessageForm from '../containers/messageForm';

const App = () => {
  return (
    <div className="row">
        <div className="col-xs-6">
          <ChannelList />
          <MessageForm />
        </div>
        <div className="col-xs-6">
          <MessageList />
        </div>
    </div>
  );
};

export default App;
