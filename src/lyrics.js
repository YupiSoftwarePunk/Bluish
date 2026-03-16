export function createLyricLine(text) {
    const p = document.createElement('p');
    p.className = 'text-2xl opacity-0 transition-all duration-500 transform translate-y-4';
    p.textContent = text;
    return p;
}