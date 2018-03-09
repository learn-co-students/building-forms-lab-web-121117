import React, { Component } from "react";

class BandInput extends Component {
  state = {
    text: ""
  };

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    let newBand = {
      type: "ADD_BAND",
      payload: this.state.text
    };
    // console.log(newBand)
    this.props.store.dispatch(newBand);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Band Name</label>
            <input type="text" name="text" onChange={this.handleOnChange} />
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default BandInput;
