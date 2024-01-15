// pictures
import { useState } from "react";

//pictures
import gitPic from "../pic/git.svg"
import gittextdPic from "../pic/gittext.svg"

// components
import ScrollContainer from "./ScrollContainer";

export default function MyProjects({projects, lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic, mainOpacity }) {

    // STATES FOR SHOWMORE BTN
    const [showMore, setShowMore] = useState({
        text: "show more",
        elements: 2,
        state: false
    });

    // TEXT settings
    const timing1 = 10;
    const delay1 = 0;

    // MY PROJETS DESCRIPTION
    const myProjects = [
        {
            title: "Lofi music chord progression generator",
            pic: lofichordPic,
            text: "In this app my goal was to blend music theory with the elegance of code. In this project, I faced the challenge of handling audio files, oscillators, and precisely managing time intervals. Dive into the synergy of music and code, where every chord progression becomes a harmonious dance, and each line of code contributes to the symphony of your musical journey.",
            techStack: ["react", "midi-writer-js", "netlify"],
            btnText: "make some music",
            link: "https://lofichordrandomizer.netlify.app/",
            git: "https://github.com/houbass/lofirandomizator.git"
        }, {
            title: "Sofa Lofi recording label",
            pic: sofaPic,
            text: "Explore my full-stack project for Sofa Lofi recording label, a platform harmonizing front-end and back-end tech. Tailored to the label's needs, it includes features such as releases cards, an admin page, submission forms with validations, subscription and a PDF generator for contract creation.",
            techStack: ["next.js", "lottie", "anime.js", "firebase","create-pdf-js", "netlify"],
            btnText: "check it out",
            link: "https://sofalofi.com/",
            git: "https://github.com/houbass/sofaoptimalization"
        }, {
            title: "Autoservis Laube",
            pic: servicePic,
            text: "Check out the website I made for a family member's car service. It's user-friendly, offering essential info on services. With detailed descriptions and easy navigation, it ensures a smooth and informative experience for visitors.",
            techStack: ["react", "lottie", "anime.js", "netlify"],
            btnText: "repair car",
            link: "https://deft-custard-7140be.netlify.app/",
            git: "https://github.com/houbass/autoservice"
        }, {
            title: "Gravitation simulation",
            pic: gravityPic,
            text: "Explore the cosmos with my React app. A space-themed gravitational simulation using Three.js. Experience the mesmerizing dance of celestial bodies as they gravitate and orbit in real-time. This project harmonizes Newton's principles of gravitation with the elegance of Three.js. Unleash your curiosity with this gravitational simulation.",
            techStack: ["react", "three.js", "netlify"],
            btnText: "let's try",
            link: "https://preeminent-florentine-a8e334.netlify.app/",
            git: "https://github.com/houbass/gravitation"
        }, {
            title: "Mindfuck game",
            pic: mindfuckPic,
            text: "Test your cognitive skills with my Next.js app, a fun and interactive journey to enhance mental acuity. Ready to push your limits and embark on a thrilling adventure of self-discovery? Challenge yourself, submit your scores, and compare them with others!",
            techStack: ["next.js", "firebase", "netlify"],
            btnText: "try me",
            link: "https://mindfuckgame.com/",
            git: "https://github.com/houbass/mindfuck"
        }, {
            title: "Mining game",
            pic: miningPic,
            text: "Explore the tranquility of my relaxing mining game crafted with Next.js! Plan your moves strategically as you navigate the terrain, seeking the ideal path to achieve the highest score.",
            techStack: ["next.js", "netlify"],
            btnText: "let's mine",
            link: "https://bitcoinminegame.netlify.app/",
            git: "https://github.com/houbass/minegame"
        }, {
            title: "Spaceship game",
            pic: spacePic,
            text: "Explore the excitement of my React spaceship game! Steer your spaceship through gravity fields, dodge obstacles, and reach the wormhole for a cosmic escape. Ready for the challenge?",
            techStack: ["react", "netlify"],
            btnText: "let's fly",
            link: "https://wondrous-jelly-5aa5c2.netlify.app/",
            git: "https://github.com/houbass/gravity-game"
        }, 
    ]


    // SHOW MORE
    const filteredProjects = myProjects.filter((e, i) => i <= showMore.elements )
    
    function showMoreFun() {

        if(showMore.state === false) {
            setShowMore({
                text: "show less",
                elements: myProjects.length,
                state: true
            });
        } else{
            setShowMore({
                text: "show more",
                elements: 2,
                state: false
            });

            projects.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: "center",
                    inline: "nearest"
                  }
            );
        }
    };

    return(
        <div 
        ref={projects}
        className="container color2 scrollMarginTop"
        >
            <section className="container1" 
            style={{
                opacity: mainOpacity, 
                transition: "1.5s",
                zIndex: "30"
                }}>
                <div className="col col-1-2 intro-left">
                    <h1 
                    className="title" 
                    style={{
                        marginBottom: "30px"
                    }}
                    >My projects</h1>                    

                    {filteredProjects.map((item, index) => {

                        let thisVisibility = "visible";
                        if(item.git === null){
                            thisVisibility = "hidden";
                        }

                        return(
                            <div 
                            key={index}
                            className="projectCard animePad" 
                            >
                                <a 
                                href={item.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <h2 className="pad1">{item.title}</h2>
                                </a>

                                <div className="projectCardContent pad1" >
                                    <a 
                                    href={item.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <div className="cardImg">
                                            <img 
                                            src={item.pic} 
                                            alt={item.title} 
                                            style={{
                                                width: "100%",
                                                borderRadius: "5px"
                                            }}/>
                                        </div>
                                    </a>

                                    <div 
                                    className="infoCard"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}>
                                        <ScrollContainer 
                                        mainOpacity={mainOpacity} 
                                        textInput={item.text} 
                                        timing={timing1} 
                                        delay={delay1}
                                        />
                                        <div>
                                            <h3>tech stack:</h3>
                                            <p>{item.techStack.join(", ")}</p>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div 
                                //className="pad1"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    background: "rgb(242, 247, 250)",
                                    padding: "10px"
                                }}>
                                    <a className="button button-dark" 
                                    href={item.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >{item.btnText}</a>

                                    <a href={item.git} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >
                                        <div 
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "fit-content",
                                            alignItems: "center",
                                            visibility: thisVisibility
                                        }}>
                                            <img src={gitPic} width="40" alt="GitHub logo" />
                                            <img src={gittextdPic} width="50" alt="GitHub text" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section> 

            <button 
            onClick={showMoreFun} 
            className="button2"
            style={{
                cursor: "pointer"
            }}
            >{showMore.text}</button>

        </div>
    )
}