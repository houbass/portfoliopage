
// TECH STACKS
const stacks = {
    animeJs: {
        name: "Anime.js",
        url: "https://animejs.com/"
    },

    emailJs: {
        name: "Email.js",
        url: "https://www.emailjs.com/"
    },

    brevo: {
        name: "Brevo-api",
        url: "https://developers.brevo.com/"
    },

    firebase: {
        name: "Firebase",
        url: "https://firebase.google.com/"
    },

    git: {
        name: "Git",
        url: "https://git-scm.com/"
    },

    jsPdf: {
        name: "jsPDF",
        url: "https://www.npmjs.com/package/jspdf"
    },

    react: {
        name: "React",
        url: "https://react.dev/"
    },

    reactImageGallery: {
        name: "React-image-gallery",
        url: "https://www.npmjs.com/package/react-image-gallery"
    },

    reactGoogleMaps: {
        name: "React-google-maps-api",
        url: "https://www.npmjs.com/package/@react-google-maps/api"
    },

    lottie: {
        name: "Lottie",
        url: "https://lottiefiles.com/"
    },

    midiWriter: {
        name: "Midi-writer-js",
        url: "https://www.npmjs.com/package/midi-writer-js"
    },

    netlify: {
        name: "Netlify",
        url: "https://www.netlify.com/"
    },
    
    nextJs: {
        name: "Next.js",
        url: "https://nextjs.org/"
    },

    threeJs: {
        name: "Three.js",
        url: "https://threejs.org/"
    },

    youtubeDataApi: {
        name: "YouTube-data-api",
        url: "https://developers.google.com/youtube/v3"
    },
}

    export default function MyProjectsDetails(lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic) {

    // MY PROJETS DESCRIPTION
    const myProjects = [
        {
            title: "Lofi Music Chord Progression Generator",
            pic: lofichordPic,
            text: "In this app my goal was to blend music theory with the elegance of code. In this project, I faced the challenge of handling audio files, oscillators, and precisely managing time intervals. Dive into the synergy of music and code, where every chord progression becomes a harmonious dance, and each line of code contributes to the symphony of your musical journey.",
            techStack: [stacks.react, stacks.midiWriter, stacks.git, stacks.netlify],
            btnText: "Make Some Music",
            link: "https://lofichordrandomizer.netlify.app/",
            git: "https://github.com/houbass/lofirandomizator.git"
        }, {
            title: "Autoservis Laube",
            pic: servicePic,
            text: "Check out the website I made for a family member's car service. It's user-friendly, offering essential info on services. With detailed descriptions and easy navigation, it ensures a smooth and informative experience for visitors.",
            techStack: [stacks.react, stacks.lottie, stacks.animeJs, stacks.reactGoogleMaps, stacks.reactImageGallery, stacks.git, stacks.netlify],
            btnText: "Repair a Car",
            link: "https://autoservislaube.cz/",
            git: "https://github.com/houbass/autoservice"
        }, {
            title: "Sofa Lofi Recording Label",
            pic: sofaPic,
            text: "Explore my full-stack project for Sofa Lofi recording label, a platform harmonizing front-end and back-end tech. Tailored to the label's needs, it includes features such as releases cards, an admin page, submission forms with validations, subscription and a PDF generator for contract creation.",
            techStack: [stacks.nextJs, stacks.lottie, stacks.animeJs, stacks.jsPdf, stacks.emailJs, stacks.firebase, stacks.brevo, stacks.youtubeDataApi, stacks.git, stacks.netlify],
            btnText: "Check It Out",
            link: "https://sofalofi.com/",
            git: "https://github.com/houbass/sofaoptimalization"
        }, {
            title: "Gravitation Simulation",
            pic: gravityPic,
            text: "Explore the cosmos with my React app. A space-themed gravitational simulation using Three.js. Experience the mesmerizing dance of celestial bodies as they gravitate and orbit in real-time. This project harmonizes Newton's principles of gravitation with the elegance of Three.js. Unleash your curiosity with this gravitational simulation.",
            techStack: [stacks.react, stacks.threeJs, stacks.git, stacks.netlify],
            btnText: "Let's Try",
            link: "https://preeminent-florentine-a8e334.netlify.app/",
            git: "https://github.com/houbass/gravitation"
        }, {
            title: "Mindfuck Game",
            pic: mindfuckPic,
            text: "Test your cognitive skills with my Next.js app, a fun and interactive journey to enhance mental acuity. Ready to push your limits and embark on a thrilling adventure of self-discovery? Challenge yourself, submit your scores, and compare them with others!",
            techStack: [stacks.nextJs, stacks.firebase, stacks.git, stacks.netlify],
            btnText: "Try Me",
            link: "https://mindfuckgame.com/",
            git: "https://github.com/houbass/mindfuck"
        }, {
            title: "Mining game",
            pic: miningPic,
            text: "Explore the tranquility of my relaxing mining game crafted with Next.js! Plan your moves strategically as you navigate the terrain, seeking the ideal path to achieve the highest score.",
            techStack: [stacks.nextJs, stacks.git, stacks.netlify],
            btnText: "Let's Mine",
            link: "https://bitcoinminegame.netlify.app/",
            git: "https://github.com/houbass/minegame"
        }, {
            title: "Spaceship Game",
            pic: spacePic,
            text: "Explore the excitement of my React spaceship game! Steer your spaceship through gravity fields, dodge obstacles, and reach the wormhole for a cosmic escape. Ready for the challenge?",
            techStack: [stacks.react, stacks.git, stacks.netlify],
            btnText: "Let's Fly",
            link: "https://wondrous-jelly-5aa5c2.netlify.app/",
            git: "https://github.com/houbass/gravity-game"
        }, 
    ]

    return{myProjects}
}