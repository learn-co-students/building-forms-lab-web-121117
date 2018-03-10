import React, { Component } from "react";

class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.store.getState().bands.map(band => {
          return <li key={band}>{band}</li>;
        })}
      </div>
    );
  }
}

export default Bands;
