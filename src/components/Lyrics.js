export function createLyrics() {
    const section = document.createElement('section');
    section.id = 'lyrics-display';
    section.className = 'h-32 flex items-center justify-center';
    return section;
}

export const lyrics = [
    { time: 0.0, text: "" },
    { time: 0.6, text: "If I saw her in the sea" },
    { time: 0.9, text: "Would I turn my back and swim to the place I'm from" },
    { time: 0.15, text: "A recurring memory of the realness of her skin" },
    { time: 0.19, text: "But her face is gone" },
    { time: 0.22, text: "Is she, is she just a wish" },
    { time: 0.24, text: "Why she color me bluish?" },
    { time: 0.28, text: "Pixeled voices through the phone" },
    { time: 0.30, text: "Is she, is she just a glitch" },
    { time: 0.32, text: "Strangely beautiful language?" },
    { time: 0.35, text: "Feel her pulsing through my bones" },
    { time: 0.38, text: "In a time of mystery" },
    { time: 0.40, text: "Getting stranger and scary" },
    { time: 0.42, text: "In the placе I'm from" },
    { time: 0.46, text: "And I think I caught a glimpse" },
    { time: 0.48, text: "When we mеssed around with strings" },
    { time: 0.50, text: "at the theatron" },
    { time: 0.53, text: "Is she, is she just a wish" },
    { time: 0.55, text: "Why she color me bluish?" },
    { time: 0.59, text: "Pixeled voices through the phone" },
    { time: 1.01, text: "Is she, is she just a glitch" },
    { time: 1.03, text: "Strangely beautiful language?" },
    { time: 1.07, text: "Feel her pulsing through my bones" },
    { time: 1.15, text: "The water’s hard like metal" },
    { time: 1.17, text: "I think I got a deal with the devil" },
    { time: 1.22, text: "I think I have a deal with the devil" },
    { time: 1.25, text: "If I saw her in a dream" },
    { time: 1.26, text: "I pour the water" },
    { time: 1.28, text: "into the ocean" },
    { time: 1.31, text: "Circulating motion" },
    { time: 1.32, text: "No direction we should go" },
    { time: 1.35, text: "We can take it super slow" },
    { time: 1.36, text: "super slow" },
    { time: 1.37, text: "Never thought I'd be so close" },
    { time: 1.39, text: "to the real real thing" },
    { time: 1.40, text: "Is she, is she just a wish" },
    { time: 1.42, text: "Why she color me bluish? " },
    { time: 1.46, text: "Pixeled voices through the phone" },
    { time: 1.48, text: "Is she, is she just a glitch" },
    { time: 1.50, text: "Strangely beautiful language?" },
    { time: 1.54, text: "Feel her pulsing through my bones" },
    { time: 2.02, text: "The water’s hard like metal" },
    { time: 2.03, text: "I think I got a deal with the devil" },
    { time: 2.09, text: "The water’s hard like metal" },
    { time: 2.11, text: "I think I got a deal with the devil" }
];

export function getSeconds(min)
{
    let minutes = Math.floor(min);
    let seconds = Math.round((min - minutes) * 100);

    return (minutes * 60) + seconds;
}