import './style.css' 
import { createHeader } from './components/Header.js';
import { createLyrics } from './components/Lyrics.js';
import { createPlayer } from './components/Player.js';

const app = document.querySelector('#app');
const mainContainer = document.createElement('main');
mainContainer.className = 'relative z-10 flex flex-col items-center text-center space-y-8 px-4';

function render() {
    app.innerHTML = '';

    app.appendChild(createHeader());
    app.appendChild(createLyrics());
    app.appendChild(createPlayer());
}

render();
