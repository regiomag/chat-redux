import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChannelsContainer from './channelsContainer';
import { fetchChannels } from '../actions/index';

class ChannelList extends Component {
  componentWillMount () {
    this.props.fetchChannels(this.props.channel);
  }
  render () {
    return (
      <div>
        {this.props.selectedChannel}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    channel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchChannels: fetchChannels }, dispatch);
}

// export default ChannelList;
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);


// { this.props.messages.map((channel) => {
//   return <Channel channel={channel} key={channel.id} />
//   })
// }
