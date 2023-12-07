import { useLayoutEffect, useRef, useState } from "react";

//pictures
import lofichordPic from "../pic/lofichord.png";
import gravityPic from "../pic/gravity.png";
import gittextdPic from "../pic/gittext.png";
import gitPic from "../pic/git.png";

//components
import ScrollContainer from "./ScrollContainer";
import MatrixBackground from "./MatrixBackground";

export default function MyProjects({ foto, mainOpacity }) {

    //div ref
    const pageRef = useRef();

    //div height for canvas
    const [divHeight, setDivHeight] = useState(0);

    //TEXT 1
    const text1FontSize = 22;
    const text1Weight = "default"; 
    const timing1 = 20;
    const delay1 = 0;
    
    //ON LOAD
    useLayoutEffect(() => {
        if(mainOpacity === 1){
            setDivHeight(pageRef.current.offsetHeight)
        }
    },[mainOpacity])

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
            pic: gravityPic,
            text: "Text about mindfuck game",
            techStack: ["next.js", "firebase"],
            btnText: "try me",
            link: "https://threejsgravitation.netlify.app/",
            git: null
        }, {
            title: "Mining game",
            pic: gravityPic,
            text: "Text about mining game",
            techStack: ["react"],
            btnText: "let's mine",
            link: "https://threejsgravitation.netlify.app/",
            git: null
        }, {
            title: "Spaceship game",
            pic: gravityPic,
            text: "Text about spaceship game",
            techStack: ["react"],
            btnText: "let's fly",
            link: "https://threejsgravitation.netlify.app/",
            git: null
        }, {
            title: "Shooting game",
            pic: gravityPic,
            text: "Text about shooting game",
            techStack: ["react"],
            btnText: "let's shoot",
            link: "https://threejsgravitation.netlify.app/",
            git: null
        }    
    ]

    return(
        <div ref={pageRef} className="container color2">

            <MatrixBackground height={divHeight}/>

            <section className="container1" style={{opacity: mainOpacity, zIndex: "30"}}>
                <div className="col col-1-2 intro-left">
                    <h1 className="title"> 🛠️My projects</h1>

                    {myProjects.map((item, index) => {

                        let thisVisibility = "visible";
                        if(item.git === null){
                            thisVisibility = "hidden";
                        }

                        return(
                            <div 
                            key={index}
                            className="projectCard pad1"
                            style={{
                                background: "rgb(242, 247, 250)",
                                zIndex: "10",
                                paddingTop: "20px",
                                marginBottom: "30px"
                            }}>
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
                                        foto={foto} 
                                        textInput={item.text} 
                                        textFontWeight={text1Weight} 
                                        timing={timing1} 
                                        textFontSize={text1FontSize} 
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