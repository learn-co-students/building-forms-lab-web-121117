import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: "ADD_BAND", band: this.state.text})
  }
  
  handleChange = (event) => {
    this.setState({text: event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <input type="submit" />
      </form>
    );
  }
};

export default BandInput;
