//components
import ScrollContainer from "./ScrollContainer";

//pictures
import comercialPic from "../pic/comercial.svg"

export default function ComercialProjects({comercial, sofaPic, servicePic, bncPic, gittextdPic, gitPic, mainOpacity }) {

    //WRITING ANIMATION SETTINGS
    const timing1 = 10;
    const delay1 = 0;

    const myProjects = [
        {
            title: "Sofa Lofi recording label",
            pic: sofaPic,
            text: "Explore my full-stack project for Sofa Lofi recording label, a platform harmonizing front-end and back-end tech. Tailored to the label's needs, it includes features such as releases cards, an admin page, submission forms with validations, subscription and a PDF generator for contract creation.",
            techStack: ["next.js", "lottie", "anime.js", "firebase","create-pdf-js"],
            btnText: "check it out",
            link: "https://sofalofi.com/",
            git: "https://github.com/houbass/sofaoptimalization"
        }, {
            title: "Autoservis Laube",
            pic: servicePic,
            text: "Check out the website I made for a family member's car service. It's user-friendly, offering essential info on services. With detailed descriptions and easy navigation, it ensures a smooth and informative experience for visitors.",
            techStack: ["react", "lottie", "anime.js"],
            btnText: "repair car",
            link: "https://deft-custard-7140be.netlify.app/",
            git: "https://github.com/houbass/autoservice"
        },  
        {
            title: "BNCexpress recording label",
            pic: bncPic,
            text: "Worked on a WordPress site for BNCexpress recording label, enhancing their online presence. The site showcases artists and music, offering a user-friendly platform for fans. Explore the catalog and stay updated on the latest releases effortlessly.",
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
                        <h1 
                        className="title" 
                        style={{
                            marginBottom: "30px"
                        }}
                        >
                            <img src={comercialPic} height="50px" alt="comercial projects"/>Comercial projects
                        </h1>

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