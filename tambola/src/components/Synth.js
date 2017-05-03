import React, { Component } from 'react';
import './Synth.css';
import './SynthFunction.js'


class Synth extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Synthesizer">
      <div>
      <canvas id="viewport" width="500" height="480"></canvas>
      </div>


        <div className="container">
              <div className="synth">
                  <div className="touch-move-scroll-blocker"></div>

                  <div className="modules">
                      <div className="module osc">
                          <div className="slider waveform">
                              <input type="range" id="osc-shape" min="0" max="3" step="1" value="2" />
                          </div>

                      </div>

                      <div className="module lpf">
                          <div className="slider">
                              <input type="range" id="lpf-freq" min="0" max="1" step=".05" value=".7" />
                          </div>


                          <div className="slider">
                              <input type="range" id="lpf-res" min="0" max="1" step=".01" value=".4" />
                          </div>

                      </div>

                      <div className="module env">

                          <div className="slider">
                              <input type="range" id="env-attack" min="0.0" max="3.0" step=".01" value="0" />
                          </div>

                          <div className="slider">
                              <input type="range" id="env-decay" min="0.0" max="3.0" step=".01" value="3.0" />
                          </div>

                          <div className="slider">
                              <input type="range" id="env-sustain" min="0.0" max="1.0" step=".01" value="1.0" />
                          </div>

                          <div className="slider">
                              <input type="range" id="env-release" min="0.0" max="3.0" step=".01" value="1.0" />
                          </div>

                      </div>

                  </div>
                  <br />

                  <div id="piano-keys">
                      <div className="key first" data-note="C">
                          <div className="sharp key" data-note="C#"></div>
                      </div>

                      <div className="key" data-note="D">
                          <div className="sharp key" data-note="D#"></div>
                      </div>

                      <div className="key" data-note="E"></div>

                      <div className="key" data-note="F">
                          <div className="sharp key" data-note="F#"></div>
                      </div>

                      <div className="key" data-note="G">
                          <div className="sharp key" data-note="G#"></div>
                      </div>

                      <div className="key" data-note="A">
                          <div className="a sharp key"  data-note="A#"></div>
                      </div>

                      <div className="key last" data-note="B"></div>

                </div>
            </div>
         </div>

      </div>
    );
  }
}

export default Synth;
