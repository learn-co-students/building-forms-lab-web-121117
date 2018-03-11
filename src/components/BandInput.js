import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text:''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    },
    ()=>{console.log(this.state)})
  }

  handleSubmit = (event) => {

    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default BandInput;

// 1. You will need to write the `BandInput` component. The component should have a form with a text input and submit button. We would like to update the *component's* state each time the user types a new character in the input. However, we only update the store's state when the user hits the submit button.
//   * Note: To have access to the store's dispatch method, we pass through the entire store as a prop.
