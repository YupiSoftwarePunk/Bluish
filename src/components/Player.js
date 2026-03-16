export function createPlayer() {
    const section = document.createElement('section');
    section.className = 'glass-panel p-6 rounded-full flex items-center gap-6';
    section.innerHTML = `
        <audio id="main-track" src="./src/assets/Father of Peace - Bluish.flac"></audio>
        <button id="play-btn" class="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-black hover:scale-110 active:scale-95 transition-transform shadow-[0_0_30px_rgba(56,189,248,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M8 5v14l11-7z"/></svg>
        </button>
    `;

    // section.className = 'glass-panel ... transition-all duration-1000 ease-in-out';
    return section;
}