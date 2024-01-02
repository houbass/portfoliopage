
//components
import ScrollContainer from "./ScrollContainer";

//pictures
import comercialPic from "../pic/comercial.svg"

export default function ComercialProjects({comercial, lofichordPic, gittextdPic, gitPic, mainOpacity }) {

    //WRITING ANIMATION SETTINGS
    const timing1 = 20;
    const delay1 = 0;

    const myProjects = [
        {
            title: "Sofa Lofi",
            pic: lofichordPic,
            text: "text about sofa lofi recording label websites",
            techStack: ["next.js", "lottie", "anime.js", "firebase", "create-pdf-js"],
            btnText: "check it out",
            link: "https://sofalofi.com/",
            git: "https://github.com/houbass/sofaoptimalization"
        }, {
            title: "Autoservice Laube",
            pic: lofichordPic,
            text: "text about Autoservice Laube",
            techStack: ["react", "lottie", "anime.js"],
            btnText: "check it out",
            link: "https://deft-custard-7140be.netlify.app/",
            git: null
        },  
        {
            title: "BNCexpress",
            pic: lofichordPic,
            text: "text about BNCexpress recording label websites",
            techStack: ["wordpress", "vanilla js"],
            btnText: "check it out",
            link: "https://bncexpress.com/",
            git: null
        },    
    ]
    
    return(
        <div ref={comercial} className="container color1 scrollMarginTop">

            <section className="container1" style={{opacity: mainOpacity}} >
                <div >
                    <div className="col col-1-2 intro-left">
                        <h1 className="title"><img src={comercialPic} height="50px" alt="comercial projects"/>Comercial projects</h1>

                        {myProjects.map((item, index) => {
                            let thisVisibility = "visible";
                            if(item.git === null){
                                thisVisibility = "hidden";
                            }

                            return(
                                <div 
                                key={index}
                                className="projectCard2 pad1 scrollMarginTop"
                                >
                                    <h3>{item.title}</h3>
                                    <div 
                                    className="projectCardContent"
                                    >
                                        <img src={item.pic} width="300" height="auto" alt={item.title}/>
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
                                                        key={techIndex}
                                                        >
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
                                                <img src={gitPic} width="50" alt="GitHub logo"/>
                                                <img src={gittextdPic} width="70" alt="GitHub text"/>
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