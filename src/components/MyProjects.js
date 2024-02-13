// pictures
import { useState } from "react";

//pictures
import gitPic from "../pic/git.svg"
import gittextdPic from "../pic/gittext.svg"

// components
import MyProjectsDetails from "./MyProjectsDetails";

export default function MyProjects({projects, lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic, mainOpacity }) {

    // IMPORTING MY PROJECTS DETAILS
    const {myProjects} = MyProjectsDetails(lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic)

    // STATES FOR SHOWMORE BTN
    const [showMore, setShowMore] = useState({
        text: "Show More",
        elements: 2,
        state: false
    });


    // SHOW MORE
    const filteredProjects = myProjects.filter((e, i) => i <= showMore.elements )
    
    function showMoreFun() {
        if(showMore.state === false) {
            setShowMore({
                text: "Show Less",
                elements: myProjects.length,
                state: true
            });
        } else{
            setShowMore({
                text: "Show More",
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
        className="container color2"
        >
            <section className="container1" 
            style={{
                opacity: mainOpacity, 
                transition: "1.5s",
                }}>
                <div className="col col-1-2"                     >
                    
                    <div 
                    className="pointer fit"
                    onClick={() => {
                        projects.current.scrollIntoView();
                    }}>
                        <h1 
                        className="title mb1" 
                        >My Projects</h1>   
                    </div>                 
                    
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
                                <h2 className="pad2 pb1">{item.title}</h2>
                                </a>

                                <div className="projectCardContent pad2" >
                                    <a 
                                    href={item.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <div className="cardImg">
                                            <img 
                                            className="projectImg"
                                            src={item.pic} 
                                            alt={item.title} 
                                            />
                                        </div>
                                    </a>

                                    <div className="infoCard">
                                        <p className="label">{item.text}</p>
                                        <div>
                                            <h3>Tech Stack:</h3>

                                            {item.techStack.map((stack, i) => {
                                                // NO COMMA ON LAST ELEMENT
                                                let comma;
                                                if(i + 1 === item.techStack.length ) {
                                                    comma = "";
                                                } else{
                                                    comma = ","
                                                }

                                                return(
                                                    <div key={i} className="techList">
                                                        <a className="techLink" href={stack.url} rel="noopener noreferrer" target="_blank" >
                                                            {stack.name + comma}
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="infoCardLinks">
                                    <a className="button button-dark" 
                                    href={item.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >{item.btnText}</a>

                                    <a href={item.git} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >
                                        <div className="gitIcon"
                                        style={{
                                            visibility: thisVisibility,
                                        }}>
                                            <img src={gitPic} width="40" alt="GitHub logo"/>
                                            <img src={gittextdPic} width="50" alt="GitHub text"/>
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
            >{showMore.text}</button>
        </div>
    )
}