


export function customComponent(events, componentType = 'button', textContent) {
  document.addEventListener('DOMContentLoaded', (event) => {
    let musquery = document.getElementById('musquery');
    if (!musquery) musquery = document.createElement('div');
    musquery.id = 'musquery';
    document.querySelector('body').appendChild(musquery);

    const element = document.createElement(componentType);
    element.innerText = textContent || '';
    element.className = `myFavorite${componentType[0].toUpperCase()}${componentType.substring(1)}s`;
    events.forEach(event => {
      element.addEventListener(event.eventType || 'click', event.code);
    });
    musquery.appendChild(element);
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