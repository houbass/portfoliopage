import { useRef } from "react";

//components
import ScrollContainer from "./ScrollContainer";

//pictures
import lofichordPic from "../pic/lofichord.png";
import gittextdPic from "../pic/gittext.png";
import gitPic from "../pic/git.png";

export default function ComercialProjects({ foto, mainOpacity }) {

    //div ref
    const pageRef = useRef();

    //WRITING ANIMATION SETTINGS
    const text1FontSize = 22;
    const text1Weight = "default"; 
    const timing1 = 20;
    const delay1 = 0;

    const myProjects = [
        {
            title: "Sofa Lofi",
            pic: lofichordPic,
            text: "text about sofa lofi recording label websites",
            techStack: ["next.js", "lottie", "firebase", "create-pdf-js"],
            btnText: "check it out",
            link: "https://lofichordrandomizer.netlify.app/",
            git: "https://github.com/houbass/lofirandomizator.git"
        }, {
            title: "BNCexpress",
            pic: lofichordPic,
            text: "text about BNCexpress recording label websites",
            techStack: ["next.js"],
            btnText: "check it out",
            link: "https://lofichordrandomizer.netlify.app/",
            git: null
        },    
    ]
    
    return(
        <div ref={pageRef} className="container color1">

            <section className="container1" style={{opacity: mainOpacity}} >
                <div >
                    <div className="col col-1-2 intro-left">
                        <h1 className="title"><span>💲</span>Comercial projects</h1>

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
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </section> 
        </div>
    )
}