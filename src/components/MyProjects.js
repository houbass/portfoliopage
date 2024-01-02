
//pictures
import projectsPic from "../pic/projects.svg"

//components
import ScrollContainer from "./ScrollContainer";

export default function MyProjects({ lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, gittextdPic, gitPic, mainOpacity }) {


    //TEXT settings
    const timing1 = 20;
    const delay1 = 0;

    //MY PROJETS DESCRIPTION
    const myProjects = [
        {
            title: "Lofi music chord progression randomizer",
            pic: lofichordPic,
            text: "text about Lofi music chord progression randomizer text about Lofi music chord progression randomizer",
            techStack: ["react", "midi-writer-js"],
            btnText: "make some music",
            link: "https://lofichordrandomizer.netlify.app/",
            git: "https://github.com/houbass/lofirandomizator.git"
        }, {
            title: "Gravitation simulation",
            pic: gravityPic,
            text: "Text about gravitaion simulation using Three.js",
            techStack: ["react", "three.js"],
            btnText: "let's try",
            link: "https://threejsgravitation.netlify.app/",
            git: null
        }, {
            title: "Mindfuck game",
            pic: mindfuckPic,
            text: "Text about mindfuck game",
            techStack: ["next.js", "firebase"],
            btnText: "try me",
            link: "https://mindfuckgame.com/",
            git: "https://github.com/houbass/mindfuck"
        }, {
            title: "Mining game",
            pic: miningPic,
            text: "Text about mining game",
            techStack: ["react"],
            btnText: "let's mine",
            link: "https://bitcoinminegame.netlify.app/",
            git: "https://github.com/houbass/minegame"
        }, {
            title: "Spaceship game",
            pic: spacePic,
            text: "Text about spaceship game",
            techStack: ["react"],
            btnText: "let's fly",
            link: "https://gravitationgame.netlify.app/",
            git: null
        } 
    ]

    return(
        <div className="container color2">

            <section className="container1" style={{opacity: mainOpacity, zIndex: "30"}}>
                <div className="col col-1-2 intro-left">
                    <h1 
                    className="title" 
                    style={{
                        marginBottom: "30px"
                    }}
                    ><img src={projectsPic} height="50px"/>My projects</h1>

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
                                <h3>{item.title}</h3>
                                <div 
                                className="projectCardContent"
                                >
                                    <img src={item.pic} width="300" height="auto"/>
                                    <div 
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}>
                                        <ScrollContainer 
                                        textInput={item.text} 
                                        timing={timing1} 
                                        delay={delay1}
                                        />
                                        <div>
                                            <h4>tech stack:</h4>
                                            {item.techStack.map((techItem, techIndex) => {

                                                return(
                                                    <p 
                                                    key={techIndex}>
                                                        {techItem}
                                                    </p>
                                                )
                                            })}
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
                                            <img src={gitPic} width="50"/>
                                            <img src={gittextdPic} width="70" style={{

                                            }}/>
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