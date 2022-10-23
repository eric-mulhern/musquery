import * as tone from 'tone';

export function customComponent(events, componentType = 'button', textContent) {
  document.addEventListener('DOMContentLoaded', (event) => {
    const musquery = getOrCreateContext();

    const element = document.createElement(componentType);
    element.innerText = textContent || '';
    element.className = `myFavorite${componentType[0].toUpperCase()}${componentType.substring(1)}s`;

    events.forEach(event => {
      element.addEventListener(event.eventType || 'click', event.code);
    });
    musquery.appendChild(element);
  });
}

export function keyboard(notes) {
  document.addEventListener('DOMContentLoaded', (event) => {
    const musquery = getOrCreateContext();
    const kb = document.createElement('div');
    kb.id = 'keyboard';
    const synth = new tone.Synth().toDestination();
    console.log('creating keyboard', kb)
    notes.forEach(note => {
      const key = document.createElement('button');
      key.innerText = note;
      key.className = `keyboardKey`;
      key.id = note;
      key.addEventListener('mousedown', () => synth?.triggerAttack(note));
      key.addEventListener('mouseup', () => synth?.triggerRelease());

      kb.appendChild(key);
      console.log('creating key', key)
    });
    musquery.appendChild(kb);
  });
}

export function init() {
  document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerText = 'Let\'s do this! \n (Click to get started)';
    overlay.appendChild(modal)
    overlay.addEventListener('click', () => {
      document.getElementById('overlay').style.display = "none";
    });
    document.querySelector('body').appendChild(overlay);
  });
}

function getOrCreateContext() {
  let musquery = document.getElementById('musquery');
  if (!musquery) {
    musquery = document.createElement('div');
    musquery.id = 'musquery';
    document.querySelector('body').appendChild(musquery);
  }
  return musquery;
}