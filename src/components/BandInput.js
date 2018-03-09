import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ''
  }

  handleInput =(event)=> {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit =(event)=>{
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state
    })
    // this.setState({
    //   text: ''
    // })
  }

  render() {
    return (
      <div>
        bands component
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleInput} value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default BandInput;
