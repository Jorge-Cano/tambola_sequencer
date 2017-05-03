import React, { Component } from 'react';

class Synth extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Synth">
        <p> Synth(keyboard) Goes here..</p>
      </div>
    );
  }
}

export default Synth;
