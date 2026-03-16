export function createHeader() {
    const header = document.createElement('header');
    header.className = 'animate-pulse-slow text-center';

    header.innerHTML = `
        <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-brand-accent glow-text">
            BLUISH
        </h1>
        <p class="text-brand-muted uppercase tracking-[0.5em] text-sm mt-4">Father of Peace</p>
    `;

    return header;
}