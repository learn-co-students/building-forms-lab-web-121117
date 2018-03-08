import React, { Component } from 'react';
import BandInput from './BandInput'

class Bands extends Component {
  render(){
    console.log(this.props.store.getState().bands)
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li>{band}</li>
    })

    return (
      <div>
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
};

export default Bands;
