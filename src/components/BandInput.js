import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Create new Band</label><br />
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
