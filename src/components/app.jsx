import React from 'react';
import MessageList from '../containers/messageList';
import ChannelList from '../containers/channelList';
import Message from './/message';
import MessageForm from '../containers/messageForm';

const App = () => {
  return (
    <div className="row">
        <div className="col-xs-3 bg_channels">
          <ChannelList />
        </div>
        <div className="col-xs-9 bg_grey">
          <MessageForm />
          <MessageList />
        </div>
    </div>
  );
};

export default App;
