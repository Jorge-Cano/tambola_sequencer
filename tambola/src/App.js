import React, { Component } from 'react';
import Synth from './components/Synth';
import './App.css';


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
        <p className="App-intro">
          Tambola | Keyboard
        </p>

        <Synth synth={this.state.synth}/>

      </div>
    );
  }
}

export default App;
