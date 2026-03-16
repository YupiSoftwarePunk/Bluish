export function createLyrics() {
    const section = document.createElement('section');
    section.id = 'lyrics-display';
    section.className = 'h-32 flex items-center justify-center';
    section.innerHTML = `
        <p id="current-line" class="text-2xl md:text-4xl font-light italic opacity-80 transition-all duration-700">
            Нажми Play, чтобы начать...
        </p>
    `;
    return section;
}