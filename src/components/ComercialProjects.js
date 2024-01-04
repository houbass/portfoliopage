
//components
import ScrollContainer from "./ScrollContainer";

//pictures
import comercialPic from "../pic/comercial.svg"

export default function ComercialProjects({comercial, sofaPic, servicePic, bncPic, gittextdPic, gitPic, mainOpacity }) {

    //WRITING ANIMATION SETTINGS
    const timing1 = 20;
    const delay1 = 0;

    const myProjects = [
        {
            title: "Sofa Lofi recording label",
            pic: sofaPic,
            text: "text about sofa lofi recording label websites",
            techStack: ["next.js", "lottie", "anime.js", "firebase", "create-pdf-js"],
            btnText: "check it out",
            link: "https://sofalofi.com/",
            git: "https://github.com/houbass/sofaoptimalization"
        }, {
            title: "Autoservice Laube",
            pic: servicePic,
            text: "text about Autoservice Laube",
            techStack: ["react", "lottie", "anime.js"],
            btnText: "check it out",
            link: "https://deft-custard-7140be.netlify.app/",
            git: "https://github.com/houbass/autoservice"
        },  
        {
            title: "BNCexpress recording label",
            pic: bncPic,
            text: "text about BNCexpress recording label websites",
            techStack: ["wordpress", "vanilla js"],
            btnText: "check it out",
            link: "https://bncexpress.com/",
            git: ""
        },    
    ]
    
    return(
        <div ref={comercial} className="container color1 scrollMarginTop">

            <section 
            className="container1" 
            style={{
                opacity: mainOpacity,
                transition: "1.5s"
            }} >
                <div >
                    <div className="col col-1-2 intro-left">
                        <h1 className="title"><img src={comercialPic} height="50px" alt="comercial projects"/>Comercial projects</h1>

                        {myProjects.map((item, index) => {
                            let thisVisibility = "visible";
                            if(item.git === ""){
                                thisVisibility = "hidden";
                            }

                            return(
                                <div 
                                key={index}
                                className="projectCard2 pad1 scrollMarginTop"
                                >
                                    <h2>{item.title}</h2>
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
                                            mainOpacity={mainOpacity}
                                            textInput={item.text} 
                                            timing={timing1} 
                                            delay={delay1}
                                            />
                                            <div>
                                                <h3>tech stack:</h3>
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
                                        justifyContent: "space-between",
                                    }}>
                                        <a className="button button-dark" href={item.link} target="blank">{item.btnText}</a>
                                        <a 
                                        href={item.git} 
                                        target="blank" 
                                        style={{
                                            visibility: thisVisibility
                                        }}
                                        >
                                            <div 
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "fit-content",
                                                alignItems: "center",

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
                </div>
            </section> 
        </div>
    )
}