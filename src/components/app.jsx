import React from 'react';
import MessageList from '../containers/messageList';
import Message from './/message';
import MessageForm from '../containers/messageForm';

const App = () => {
  return (
    <div className="row">
        <div className="col-xs-6">
          <MessageForm />
        </div>
        <div className="col-xs-6">
          <MessageList />
        </div>
    </div>
  );
};

export default App;
