import React, { Component } from 'react';

class Bands extends Component {
  render() {
    console.log(this.props.store.getState().bands)
    return (
      <ul>
        {this.props.store.getState().bands.map((band, index) => {
          return <li key={index}>{band}</li>
        })}
      </ul>
    )
  }
}

export default Bands;
