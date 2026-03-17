export function createAboutSection() {
    const section = document.createElement('section');
    section.className = 'min-h-screen w-full max-w-4xl px-6 py-32 flex flex-col justify-center relative z-10';
    
    section.innerHTML = `
        <h2 class="text-4xl md:text-6xl font-bold mb-12 glow-text opacity-0 translate-y-10 transition-all duration-1000">
            THE GENESIS
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="glass-panel p-8 rounded-3xl opacity-0 -translate-x-10 transition-all duration-1000 delay-300">
                <p class="text-lg leading-relaxed text-cyan-100/80">
                    Father of Peace — это не просто звук, это архитектура эмоций. Группа исследует границы между реальностью и цифровым сном, 
                    сочетая тяжелые текстуры с эфирным вокалом.
                </p>
                <p class="mt-6 text-lg leading-relaxed text-cyan-100/80">
                    "Bluish" — это манифест внутреннего спокойствия в мире, который никогда не затихает.
                </p>
            </div>
            <div class="relative group opacity-0 translate-x-10 transition-all duration-1000 delay-500">
                    <div class="aspect-square bg-gradient-to-br from-brand-accent/20 to-blue-900/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                    <img src="./src/assets/band-photo.jpg" alt="Bluish" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100">
                </div>
            </div>
        </div>
    `;
    return section;
}



export function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10');
                entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section > div, section > h2').forEach(el => observer.observe(el));
}