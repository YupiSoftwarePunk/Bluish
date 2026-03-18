import './styles/style.css' 
import { createHeader } from './components/Header.js';
import { createLyrics, lyrics, getSeconds } from './components/Lyrics.js';
import { createPlayer } from './components/Player.js';
import { createAboutSection, initScrollAnimations } from './components/About.js'
import { backgroundeffect } from './components/BackgroundEffects.js';
import { createFooter } from './components/Footer.js';

const app = document.querySelector('#app');
let isPlaying = false;

function render() {
    app.innerHTML = '';

    const headerElement = createHeader();
    const playerElement = createPlayer();
    const footer = createFooter();
    const about = createAboutSection();
    const lyricsElement = createLyrics();

    app.appendChild(headerElement);
    app.appendChild(playerElement);
    app.appendChild(about);
    app.appendChild(footer);

    app.appendChild(lyricsElement);

    initScrollAnimations();

    const button = document.querySelector('#play-btn');
    const header = document.querySelector('header');

    const audio = document.querySelector('#main-track');
    const lyricsDisplay = document.querySelector('#lyrics-display');
    const bgVideo = document.querySelector('#bg-video');
    const playerContainer = button.parentElement; 

    requestAnimationFrame(() => {
        setTimeout(() => {
            headerElement.classList.remove('opacity-0', 'translate-y-10');
            headerElement.classList.add('opacity-100', 'translate-y-0');
            setTimeout(() => {
                playerElement.classList.remove('opacity-0', 'translate-y-10');
                playerElement.classList.add('opacity-100', 'translate-y-0');
            }, 300);
        }, 100);
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const currentLine = lyrics.findLast(line => currentTime >= line.time);
        
        if (currentLine && lyricsDisplay.textContent !== currentLine.text) {
            lyricsDisplay.style.opacity = '0';
            lyricsDisplay.style.filter = 'blur(10px)';
            lyricsDisplay.style.transform = 'translateX(-50%) translateY(10px)';

            setTimeout(() => {
                lyricsDisplay.textContent = currentLine.text;
                lyricsDisplay.style.opacity = '1';
                lyricsDisplay.style.filter = 'blur(0.4px)';
                lyricsDisplay.style.transform = 'translateX(-50%) translateY(0)';
            }, 300);
        }
    });

    button.addEventListener('click', () => {
        const ambientGlow = document.querySelector('#ambient-glow');
        if (!isPlaying) {
            backgroundeffect();

            ambientGlow.classList.remove('opacity-0');
            ambientGlow.classList.add('opacity-100');

            header.classList.add('-translate-y-40', 'opacity-50', 'scale-90', 'transition-all', 'duration-1000');
            playerContainer.classList.add('translate-y-40', 'opacity-50', 'scale-90', 'transition-all', 'duration-1000');

            audio.play();
            bgVideo.play();
            isPlaying = true; 
            button.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
        } 
        else {
            ambientGlow.classList.replace('opacity-100', 'opacity-0');

            header.classList.remove('-translate-y-40', 'opacity-50', 'scale-90');
            playerContainer.classList.remove('translate-y-40', 'opacity-50', 'scale-90');

            audio.pause();
            bgVideo.pause();
            isPlaying = false; 
            button.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
        }
    });
}

render();