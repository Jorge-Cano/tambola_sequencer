import React, { Component } from 'react';
import Synth from './components/Synth';



class App extends Component {
  constructor(){
    super();
    this.state={
      synth: [
        {
          note: 'c',
          octave: '0'
        },
        {
          note: 'b',
          octave: '-1'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          Synthesizer | Tambola
          <p> Click Notes on the Left & Randomly Loop to your right</p>
        </div>

        <Synth synth={this.state.synth}/>

      </div>
    );
  }
}

export default App;
