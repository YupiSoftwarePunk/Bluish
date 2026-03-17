export function createLyrics() {
    const section = document.createElement('section');
    section.id = 'lyrics-display';
    // section.className = `
    //     relative z-20 h-24 px-6 flex items-center justify-center 
    //     text-center transition-opacity duration-500 ease-in-out
    //     text-blue-400 font-medium text-xl md:text-2xl
    //     tracking-wide leading-relaxed
    // `;
    // section.style.textShadow = '0 0 15px rgba(96, 165, 250, 0.6), 0 0 5px rgba(255, 255, 255, 0.2)';

    section.className = `
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        w-full max-w-4xl h-16 px-4
        flex items-center justify-center text-center
        pointer-events-none select-none
        pixel-lyrics text-2xl md:text-4xl
    `;

    return section;
}

export const lyrics = [
    { time: 0, text: "" },
    { time: 6.5, text: "If I saw her in the sea" },
    { time: 8.8, text: "Would I turn my back and swim" },
    { time: 11.2, text: "to the place I'm from" },
    { time: 14.5, text: "A recurring memory of the realness of her skin" },
    { time: 19.2, text: "But her face is gone" },
    { time: 22.5, text: "Is she, is she just a wish" },
    { time: 24.8, text: "Why she color me bluish?" },
    { time: 28.2, text: "Pixeled voices through the phone" },
    { time: 30.5, text: "Is she, is she just a glitch" },
    { time: 32.8, text: "Strangely beautiful language?" },
    { time: 35.5, text: "Feel her pulsing through my bones" },
    { time: 38.5, text: "In a time of mystery" },
    { time: 40.8, text: "Getting stranger and scary" },
    { time: 43.2, text: "In the place I'm from" },
    { time: 46.5, text: "And I think I caught a glimpse" },
    { time: 48.8, text: "When we messed around with strings" },
    { time: 51.2, text: "at the theatron" },
    { time: 53.5, text: "Is she, is she just a wish" },
    { time: 55.8, text: "Why she color me bluish?" },
    { time: 59.2, text: "Pixeled voices through the phone" },
    { time: 61.5, text: "Is she, is she just a glitch" },
    { time: 63.8, text: "Strangely beautiful language?" },
    { time: 66.5, text: "Feel her pulsing through my bones" },
    { time: 75.0, text: "The water’s hard like metal" },
    { time: 77.5, text: "I think I got a deal with the devil" },
    { time: 82.2, text: "I think I have a deal with the devil" },
    { time: 85.0, text: "If I saw her in a dream" },
    { time: 86.5, text: "I pour the water" },
    { time: 88.5, text: "into the ocean" },
    { time: 91.0, text: "Circulating motion" },
    { time: 92.8, text: "No direction we should go" },
    { time: 95.2, text: "We can take it super slow" },
    { time: 96.8, text: "super slow" },
    { time: 97.8, text: "Never thought I'd be so close" },
    { time: 99.8, text: "to the real real thing" },
    { time: 100.8, text: "Is she, is she just a wish" },
    { time: 102.8, text: "Why she color me bluish?" },
    { time: 106.5, text: "Pixeled voices through the phone" },
    { time: 108.5, text: "Is she, is she just a glitch" },
    { time: 110.8, text: "Strangely beautiful language?" },
    { time: 113.8, text: "Feel her pulsing through my bones" },
    { time: 122.0, text: "The water’s hard like metal" },
    { time: 124.5, text: "I think I got a deal with the devil" },
    { time: 129.5, text: "The water’s hard like metal" },
    { time: 132.0, text: "I think I got a deal with the devil" }
];

export function getSeconds(min)
{
    let minutes = Math.floor(min);
    let seconds = Math.round((min - minutes) * 100);

    return (minutes * 60) + seconds;
}