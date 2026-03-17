export function createPlayer() {
    const section = document.createElement('section');
    section.className = 'glass-panel p-6 rounded-full flex items-center gap-6 relative';
    section.innerHTML = `
        <audio id="main-track" src="./src/assets/Father of Peace - Bluish.flac"></audio>
        <button id="play-btn" class="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center z-50
        text-brand-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M8 5v14l11-7z"/></svg>
        </button>
    `;
    return section;
}