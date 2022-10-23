// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

import { init, customComponent } from "./components/components.js";
import * as tone from 'tone';

const myToneCode = () => {
  const synth = new tone.Synth().toDestination();
  synth?.triggerAttackRelease('C4', '8n');
}

const myToneCode2 = () => {
  tone.Transport.stop();
  const synth = new tone.Synth().toDestination();
  // synth?.triggerAttackRelease('C4', '8n');
  const part = new tone.Part((time, event) => {
    //the events will be given to the callback with the time they occur
    synth.triggerAttackRelease(event.note, event.dur, time)
  }, 
    [[0, "C2"], ["0:2", "C3"], ["0:3:2", "G2"]]
  );
  //start the part at the beginning of the Transport's timeline
  part.start(0)
  //loop the first bar 3 times
  part.loop = 3
  part.loopEnd = '1m'
  tone.Transport.start();
}

const myToneCode3 = () => {
  tone.Transport.stop();
  const synth = new tone.Synth().toDestination();
  // synth?.triggerAttackRelease('C4', '8n');
  const part = new tone.Part((time, event) => {
    //the events will be given to the callback with the time they occur
    synth.triggerAttackRelease(event.note, event.dur, time)
  }, 
  [
    { time : '0:3:2', note : 'Bb3', dur : '8n'},
    { time : '1:0:0', note : 'C4',  dur : '8n'},
    { time : '1:0:2', note : 'D4',  dur : '8n'},
    { time : '1:1:0', note : 'Eb4', dur : '8n'},
    { time : '1:1:2', note : 'F4',  dur : '8n'},
    { time : '1:2:0', note : 'D4',  dur : '4n'},
    { time : '1:3:0', note : 'Bb3', dur : '8n'},
    { time : '1:3:2', note : 'C4',  dur : '4n'}, 
  ]
  );
  //start the part at the beginning of the Transport's timeline
  part.start(0)
  //loop first two bars 3 times
  // part.loop = 3 
  // part.loopEnd = '2m'
  tone.Transport.start();
}


// this optional function creates an overlay with a modal, requiring the user to 
// click before triggering any ToneJS code – this prevents a runtime error
init(); 

// @params: custom code to trigger on event, element type, event to trigger custom code
customComponent([{ code: myToneCode }], 'button', 'click me');
customComponent([{ code: myToneCode2, eventType: 'mouseover' }], 'div', 'mouse me');
customComponent([{ code: myToneCode3 }], 'button', ';)');
