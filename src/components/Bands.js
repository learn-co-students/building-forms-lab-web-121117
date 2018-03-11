import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return (
      <div>
        {this.props.store.getState().bands.map(band=>{
          return <li>{band}</li>
        })}
      </div>
    );
  }
};

export default Bands;


// 2. You will need to write the `Bands` component. This component should display a ul with a list element for each of the bands in the store's state. Each list element should have text with the corresponding name of the band.
