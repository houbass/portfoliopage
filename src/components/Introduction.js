
//components
import ScrollContainerIntro from "./ScrollContainerIntro";

export default function Introduction({introduction, foto, mainOpacity }) {

    //Animationed text settings
    const text1 = "Crafting digital landscapes where design meets functionality and user experience is not just a goal but a journey.";
    const timing1 = 20;
    const delay1 = 0;
 
    return(
        <div 
        ref={introduction}
        className="container color2 p1">
            <section 
            style={{
                opacity: mainOpacity, 
                transition: "1s"
            }}>
                <div className="container1 color2">
                    <div className="row introCard">
                        <div className="col col-1-2 intro-left">
                            <h1
                            className="mb1"
                            style={{
                                fontSize: "40px",
                            }} >Ondrej Laube</h1>

                            <h2 className="mb2">Frontend developer for your next project.</h2>
                            <ScrollContainerIntro 
                            mainOpacity={mainOpacity}
                            textInput={text1} 
                            timing={timing1} 
                            delay={delay1}
                            />
                        </div>
                        <div className="col"
                        >
                            <img 
                            src={foto} 
                            className="mainPic" 
                            alt="profile"
                            />
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    )
};