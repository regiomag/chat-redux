// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Adding middleware
import { logger } from 'redux-logger';
import promise from 'redux-promise';

// Import the reducers
import messages from './reducers/messageReducer.js';
import channels from './reducers/channelReducer.js';
import currentUser from './reducers/currentUserReducer.js';
import selectedChannel from './reducers/selectedChannelReducer.js';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Initial states, only for starting
// const messagesIni= [
// {
//     "author":"anonymous92",
//     "content":"Hello world!",
//     "created_at":"2017-09-26T23:03:16.365Z"
//   },
//   {
//     "author":"anonymous77",
//     "content":"My name is anonymous77",
//     "created_at":"2017-09-26T23:03:21.194Z"
//   }
// ];

// define intials states
const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: 'mick', //prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const reducers = combineReducers({
    messages: messages,
    channels: currentUser,
    currentUser: currentUser,
    selectedChannel: selectedChannel,
});

const middlewares = applyMiddleware(logger, promise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);

