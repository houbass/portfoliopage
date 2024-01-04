//pictures
import projectsPic from "../pic/projects.svg"

//components
import ScrollContainer from "./ScrollContainer";

export default function MyProjects({projects, lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, gittextdPic, gitPic, mainOpacity }) {

    //TEXT settings
    const timing1 = 10;
    const delay1 = 0;

    //MY PROJETS DESCRIPTION
    const myProjects = [
        {
            title: "Lofi music chord progression generator",
            pic: lofichordPic,
            text: "In this app my goal was to blend music theory with the elegance of code. In this project, I faced the challenge of handling audio files, oscillators, and precisely managing time intervals. Dive into the synergy of music and code, where every chord progression becomes a harmonious dance, and each line of code contributes to the symphony of your musical journey.",
            techStack: ["react", "midi-writer-js"],
            btnText: "make some music",
            link: "https://lofichordrandomizer.netlify.app/",
            git: "https://github.com/houbass/lofirandomizator.git"
        }, {
            title: "Gravitation simulation",
            pic: gravityPic,
            text: "Explore the cosmos with my React app. A space-themed gravitational simulation using Three.js. Experience the mesmerizing dance of celestial bodies as they gravitate and orbit in real-time. This project harmonizes Newton's principles of gravitation with the elegance of Three.js. Unleash your curiosity with this gravitational simulation.",
            techStack: ["react", "three.js"],
            btnText: "let's try",
            link: "https://preeminent-florentine-a8e334.netlify.app/",
            git: "https://github.com/houbass/gravitation"
        }, {
            title: "Mindfuck game",
            pic: mindfuckPic,
            text: "Test your cognitive skills with my Next.js app, a fun and interactive journey to enhance mental acuity. Ready to push your limits and embark on a thrilling adventure of self-discovery? Challenge yourself, submit your scores, and compare them with others!",
            techStack: ["next.js", "firebase"],
            btnText: "try me",
            link: "https://mindfuckgame.com/",
            git: "https://github.com/houbass/mindfuck"
        }, {
            title: "Mining game",
            pic: miningPic,
            text: "Explore the tranquility of my relaxing mining game crafted with Next.js! Plan your moves strategically as you navigate the terrain, seeking the ideal path to achieve the highest score.",
            techStack: ["next.js"],
            btnText: "let's mine",
            link: "https://bitcoinminegame.netlify.app/",
            git: "https://github.com/houbass/minegame"
        }, {
            title: "Spaceship game",
            pic: spacePic,
            text: "Explore the excitement of my React spaceship game! Steer your spaceship through gravity fields, dodge obstacles, and reach the wormhole for a cosmic escape. Ready for the challenge?",
            techStack: ["react"],
            btnText: "let's fly",
            link: "https://wondrous-jelly-5aa5c2.netlify.app/",
            git: "https://github.com/houbass/gravity-game"
        } 
    ]

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
                    ><img src={projectsPic} height="50px" alt="my projects"/>My projects</h1>

                    

                    {myProjects.map((item, index) => {

                        let thisVisibility = "visible";
                        if(item.git === null){
                            thisVisibility = "hidden";
                        }

                        return(
                            <div 
                            key={index}
                            className="projectCard pad1"
                            >
                                <h2>{item.title}</h2>
                                <div 
                                className="projectCardContent"
                                >
                                    <img src={item.pic} width="300" height="300" alt={item.title}/>
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
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "baseline",
                                    justifyContent: "space-between"
                                }}>
                                    <a className="button button-dark" href={item.link} target="blank">{item.btnText}</a>
                                    <a href={item.git} target="blank">
                                        <div 
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "fit-content",
                                            alignItems: "center",
                                            visibility: thisVisibility
                                        }}>
                                            <img src={gitPic} width="50" alt="GitHub logo" />
                                            <img src={gittextdPic} width="70" alt="GitHub text" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section> 
        </div>
    )
}