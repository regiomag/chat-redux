import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { fetchMessages } from '../actions/index';

class ChannelList extends Component {
  // componentWillMount () {
  //   this.props.fetchMessages(this.props.channel);
  // }
  render () {
    return (
      <div>
        Channel list
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     messages: state.messages,
//     channel: state.selectedChannel
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchMessages: fetchMessages }, dispatch);
// }

export default ChannelList;
// export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
