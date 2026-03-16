export function createHeader() {
    const header = document.createElement('header');
    header.className = 'animate-pulse-slow text-center relative z-10';
    header.id = 'groupName';

    header.innerHTML = `
        <h1 class="text-7xl md:text-9xl font-black tracking-tighter 
            bg-gradient-to-b from-white via-brand-accent to-blue-600 
            bg-clip-text text-transparent glow-text">
            BLUISH
        </h1>
        <p class="text-brand-accent/80 uppercase tracking-[0.6em] text-lg md:text-xl mt-1 font-light">
            Father of Peace
        </p>
    `;

    // header.className = 'animate-pulse-slow text-center transition-all duration-1000 ease-in-out';
    return header;
}