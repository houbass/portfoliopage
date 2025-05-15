
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

    divi: {
        name: "Divi",
        url: "https://www.divi.cz/"
    },

    easol: {
        name: "Easol",
        url: "https://easol.com/"
    },

    firebase: {
        name: "Firebase",
        url: "https://firebase.google.com/"
    },

    git: {
        name: "Git",
        url: "https://git-scm.com/"
    },

    javascript: {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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

    php: {
        name: "PHP",
        url: "https://www.php.net/"
    },

    shoptet: {
        name: "Shoptet",
        url: "https://www.shoptet.cz/"
    },

    spotifyApi: {
        name: "Spotify-api",
        url: "https://developer.spotify.com/"
    },

    threeJs: {
        name: "Three.js",
        url: "https://threejs.org/"
    },

    wordPress: {
        name: "WordPress",
        url: "https://wordpress.org/"
    },

    youtubeDataApi: {
        name: "YouTube-data-api",
        url: "https://developers.google.com/youtube/v3"
    },

    materialUi: {
        name: "MaterialUI",
        url: "https://mui.com/material-ui/"
    },

    reduxToolit: {
        name: "React-redux-toolkit",
        url: "https://redux-toolkit.js.org/"
    },

    angularJs: {
        name: "AngularJs",
        url: "https://angularjs.org/"
    },

    figma: {
        name: "Figma",
        url: "https://www.figma.com/"
    },

    typeScript: {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/"
    },
}

    export default function MyProjectsDetails(lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic, takecarsPic, letitrollPic, ritaPic, grooovePic, kafeavubecPic, top10dnbPic, broadcom) {

    // MY PROJETS DESCRIPTION
    const myProjects = [
        {
            title: "Application Performance Management",
            pic: broadcom,
            text: "Collaborated with a large international team to modernize Broadcom's Application Performance Manager (APM) by rewriting the frontend from AngularJS to React. Focused on improving performance, scalability, and user experience through component-based architecture and modern development practices.",
            techStack: [stacks.react, stacks.angularJs, stacks.typeScript, stacks.javascript, stacks.git, stacks.materialUi, stacks.reduxToolit, stacks.figma],
            btnText: "Let's check it",
            link: "https://www.broadcom.com/products/software/aiops-observability/application-performance-management",
            git: null
        }, 
        {
            title: "Top 10 DnB",
            pic: top10dnbPic,
            text: "I developed a full-stack application for Let It Roll. Utilizing the Spotify API, the app curated a comprehensive list of Drum and Bass tracks released in 2023 by various artists. Users could browse through the selection and cast their votes for their favorite tracks. This interactive platform provided an engaging way for fans to celebrate and recognize the best releases of the year.",
            techStack: [stacks.react, stacks.javascript, stacks.spotifyApi, stacks.firebase],
            btnText: "Let's Vote",
            link: "https://www.top10dnb.com/en",
            git: null
        }, 
        {
            title: "Kafe a Vůbec",
            pic: kafeavubecPic,
            text: "I customized a web shop theme template for coffee enthusiasts, providing a seamless shopping experience for premium blends and brewing essentials. With intuitive navigation and captivating visuals, the site brings the world of coffee to life, inviting customers to explore and indulge in their passion for quality brews.",
            techStack: [stacks.shoptet, stacks.php],
            btnText: "Buy Some Coffee",
            link: "https://www.kafeavubec.cz/",
            git: null
        }, 
        /*
        {
            title: "Grooove",
            pic: grooovePic,
            text: "I led the creation of Grooove's website, a digital marketing studio. The goal was to amplify their online presence and showcase their innovative services. The site engages visitors, highlights their expertise, and positions Grooove as a leader in the industry.",
            techStack: [stacks.react, stacks.javascript],
            btnText: "Make a Mooove",
            link: "https://www.grooove.cz/",
            git: null
        }, 
        */
        {
            title: "RITA",
            pic: ritaPic,
            text: "I was involved in the creation of the European Reference Network (ERN) focused on enhancing the care for patients with Rare Immunological Disorders. This groundbreaking initiative aimed to establish a cohesive network of healthcare professionals spanning across Europe. The primary objective was to foster collaboration and knowledge-sharing among experts in the field, ultimately improving the diagnosis, treatment, and management of rare immunological conditions.",
            techStack: [stacks.wordPress, stacks.php],
            btnText: "Check It Out",
            link: "https://ern-rita.org/",
            git: null
        }, 
        {
            title: "Let It Roll",
            pic: letitrollPic,
            text: "I had the privilege to collaborate on the customization of the Let It Roll music festival website using the Easol platform. This project aimed to enhance the online presence of one of Europe's largest drum and bass festivals, providing attendees with an immersive and seamless experience.",
            techStack: [stacks.easol, stacks.javascript],
            btnText: "Go To Festival",
            link: "https://www.letitroll.eu/",
            git: null
        }, 
        {
            title: "Takecars",
            pic: takecarsPic,
            text: "I had the opportunity to work on a dynamic and user-friendly website for a delivery express service in Prague. This project was focused on creating an engaging and informative landing page that effectively showcases the company's services and capabilities. The site has received positive feedback for its design and functionality, contributing to the company’s growth and customer satisfaction.",
            techStack: [stacks.wordPress, stacks.divi, stacks.php],
            btnText: "Reserve Your Courier",
            link: "https://www.takecars.cz/",
            git: null
        }, 
        {
            title: "Lofi Music Chord Progression Generator",
            pic: lofichordPic,
            text: "In this app my goal was to blend music theory with the elegance of code. In this project, I faced the challenge of handling audio files, oscillators, and precisely managing time intervals. Dive into the synergy of music and code, where every chord progression becomes a harmonious dance, and each line of code contributes to the symphony of your musical journey.",
            techStack: [stacks.react, stacks.javascript, stacks.midiWriter, stacks.git, stacks.netlify],
            btnText: "Make Some Music",
            link: "https://lofichordrandomizer.netlify.app/",
            git: "https://github.com/houbass/lofirandomizator.git"
        }, {
            title: "Autoservis Laube",
            pic: servicePic,
            text: "Check out the website I made for a family member's car service. It's user-friendly, offering essential info on services. With detailed descriptions and easy navigation, it ensures a smooth and informative experience for visitors.",
            techStack: [stacks.react, stacks.javascript, stacks.lottie, stacks.animeJs, stacks.reactGoogleMaps, stacks.reactImageGallery, stacks.git, stacks.netlify],
            btnText: "Repair a Car",
            link: "https://autoservislaube.cz/",
            git: "https://github.com/houbass/autoservice"
        }, {
            title: "Sofa Lofi Recording Label",
            pic: sofaPic,
            text: "Explore my full-stack project for Sofa Lofi recording label, a platform harmonizing front-end and back-end tech. Tailored to the label's needs, it includes features such as releases cards, an admin page, submission forms with validations, subscription and a PDF generator for contract creation.",
            techStack: [stacks.nextJs, stacks.javascript, stacks.lottie, stacks.animeJs, stacks.jsPdf, stacks.emailJs, stacks.firebase, stacks.brevo, stacks.youtubeDataApi, stacks.git, stacks.netlify],
            btnText: "Check It Out",
            link: "https://sofalofi.com/",
            git: "https://github.com/houbass/sofaoptimalization"
        }, {
            title: "Gravitation Simulation",
            pic: gravityPic,
            text: "Explore the cosmos with my React app. A space-themed gravitational simulation using Three.js. Experience the mesmerizing dance of celestial bodies as they gravitate and orbit in real-time. This project harmonizes Newton's principles of gravitation with the elegance of Three.js. Unleash your curiosity with this gravitational simulation.",
            techStack: [stacks.react, stacks.javascript, stacks.threeJs, stacks.git, stacks.netlify],
            btnText: "Let's Try",
            link: "https://preeminent-florentine-a8e334.netlify.app/",
            git: "https://github.com/houbass/gravitation"
        }, {
            title: "Mindfuck Game",
            pic: mindfuckPic,
            text: "Test your cognitive skills with my Next.js app, a fun and interactive journey to enhance mental acuity. Ready to push your limits and embark on a thrilling adventure of self-discovery? Challenge yourself, submit your scores, and compare them with others!",
            techStack: [stacks.nextJs, stacks.javascript, stacks.firebase, stacks.git, stacks.netlify],
            btnText: "Try Me",
            link: "https://mindfuckgame.com/",
            git: "https://github.com/houbass/mindfuck"
        }, {
            title: "Mining game",
            pic: miningPic,
            text: "Explore the tranquility of my relaxing mining game crafted with Next.js! Plan your moves strategically as you navigate the terrain, seeking the ideal path to achieve the highest score.",
            techStack: [stacks.nextJs, stacks.javascript, stacks.git, stacks.netlify],
            btnText: "Let's Mine",
            link: "https://bitcoinminegame.netlify.app/",
            git: "https://github.com/houbass/minegame"
        }, {
            title: "Spaceship Game",
            pic: spacePic,
            text: "Explore the excitement of my React spaceship game! Steer your spaceship through gravity fields, dodge obstacles, and reach the wormhole for a cosmic escape. Ready for the challenge?",
            techStack: [stacks.react, stacks.javascript, stacks.git, stacks.netlify],
            btnText: "Let's Fly",
            link: "https://wondrous-jelly-5aa5c2.netlify.app/",
            git: "https://github.com/houbass/gravity-game"
        }, 
    ]

    return{
        myProjects
    }
}
