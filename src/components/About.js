export function createAboutSection() {
    const section = document.createElement('section');
    section.className = 'min-h-screen w-full max-w-4xl px-6 py-32 flex flex-col justify-center relative z-10 mx-auto';
    
    section.innerHTML = `
        <div class="h-[50vh] w-full pointer-events-none"></div> 

        <h2 class="text-5xl md:text-7xl font-black tracking-tighter 
            bg-gradient-to-b from-white via-brand-accent to-blue-600 
            bg-clip-text text-transparent glow-text cursor-default transition-all 
            duration-500 hover:text-cyan-300 hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            О ГРУППЕ
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="glass-panel p-8 rounded-3xl opacity-0 -translate-x-10 transition-all duration-1000 delay-300 
            hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] 
            cursor-default">
                <p class="text-lg leading-relaxed text-cyan-100/80">
                    Father of Peace — это не просто звук, это архитектура эмоций. Их творчество — это попытка 
                    зафиксировать момент перехода от физической реальности к цифровому сну, исследуя уязвимость человека в эпоху технологий.
                </p>
                <p class="mt-6 text-lg leading-relaxed text-cyan-100/80">
                    Bluish — это манифест внутреннего спокойствия в мире, который никогда не затихает.
                </p>
            </div>
            <div class="relative group opacity-0 translate-x-10 transition-all duration-1000 delay-500">
                <div class="aspect-square bg-gradient-to-br from-brand-accent/20 to-blue-900/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                    <img src="./src/assets/band-photo.jpeg" alt="Bluish" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100">
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
                const children = entry.target.querySelectorAll('h2, div');
                
                children.forEach(el => {
                    el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10');
                    el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15 
    });

    const aboutSection = document.querySelector('section.max-w-4xl');
    if (aboutSection) observer.observe(aboutSection);
}