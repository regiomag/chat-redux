import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.currentUser, this.state.value);
  }

  render() {
    return (
      <div className="form-control">
        <form onSubmit={this.handleSubmit}>
          <label>
            Your message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
    channel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
