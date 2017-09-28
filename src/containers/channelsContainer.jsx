import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelsContainer extends Component {
  render () {
    return (
      <div>
        <li className="selected">{props.channel.name}</li>
      </div>
    );
  }
}
