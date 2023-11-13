import { useLayoutEffect, useRef, useState } from "react";

//pictures
import lofichordPic from "../pic/lofichord.png";
import gravityPic from "../pic/gravity.png";
import gittextdPic from "../pic/gittext.png";
import gitPic from "../pic/git.png";

//components
import ScrollContainer from "./ScrollContainer";
import MatrixBackground from "./MatrixBackground";


export default function ThirdTopic({ foto, mainOpacity }) {

    //div ref
    const pageRef = useRef();

    const [showFotoWidth, setShowFotoWidth] = useState("20%")
    const [divHeight, setDivHeight] = useState(0);
    const animatiaon = [1, 2, 3, 4, 5]

    //TEXT 1
    const text1 = "text about Lofi music chord progression randomizer text about Lofi music chord progression randomizer";
    const text1FontSize = 22;
    const text1Weight = "default"; 
    const timing1 = 20;
    const delay1 = 0;

    //TEXT 2
    const text2 =  "Text about gravitaion simulation using Three.js";

    //TEXT3
    const text3 = "Text about mindfuck game";

    //TEXT4
    const text4 = "Text about mining game";

    //TEXT5
    const text5 = "Spaceship game";

    //TEXT5
    const text6 = "Text about tank game";
    
    
    //ON LOAD
    useLayoutEffect(() => {
        if(mainOpacity === 1){
            setShowFotoWidth("0%")
            setDivHeight(pageRef.current.offsetHeight)
        }

    },[mainOpacity])


    const myProjects = [{
        title: "Lofi music chord progression randomizer",
        pic: lofichordPic,
        text: "text about Lofi music chord progression randomizer text about Lofi music chord progression randomizer",
        techStack: ["react", "midi-writer-js", "git"],
        btnText: "make some music",
        link: "https://lofichordrandomizer.netlify.app/",
        git: "https://github.com/houbass/lofirandomizator.git"
    }, {
        title: "Gravitation simulation",
        pic: gravityPic,
        text: "Text about gravitaion simulation using Three.js",
        techStack: ["react", "three.js", "git"],
        btnText: "let's try",
        link: "https://threejsgravitation.netlify.app/",
        git: null
    }, 

    ]

    return(
        <div ref={pageRef} className="container color2">

    <MatrixBackground height={divHeight}/>

            <section className="container1" style={{opacity: mainOpacity, zIndex: "30"}}>

                <div  >

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
                                    className="projectCard"
                                    style={{
                                        background: "rgb(242, 247, 250)",
                                        //position: "absolute",
                                        zIndex: "10",
                                        padding: "20px",
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
                                                    //background: "orange",
                                                    width: "fit-content",
                                                    alignItems: "center",
                                                    //position: "absolute",
                                                    //bottom: 10,
                                                    //right: 10,
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


                            <h3>Mindfuck game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text3} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                            
                            <br/>
                            <h3>Mining game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text4} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                                                        <br/>
                            <h3>Spaceship game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text5} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

                            <h3>Tank game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text6} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

                        </div>
                </div>

            </section> 
        </div>
    )
}