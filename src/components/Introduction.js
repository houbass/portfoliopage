import { useLayoutEffect, useState } from "react";

//components
import ScrollContainerIntro from "./ScrollContainerIntro";

export default function Introduction({introduction, foto, mainOpacity }) {

    //Photo animation states
    const [showFotoWidth, setShowFotoWidth] = useState("")
    const animatiaon = [1, 2, 3, 4, 5]

    //Animationed text settings
    const text1 = "crafting digital landscapes where design meets functionality and user experience is not just a goal but a journey...";
    const timing1 = 20;
    const delay1 = 500;

    useLayoutEffect(() => {
        if(mainOpacity === 1){
            setShowFotoWidth("fotoTransition");
        }
    },[mainOpacity])

 
    return(
        <div 
        ref={introduction}
        className="container intro color2 scrollMarginTop" 
        style={{
            paddingTop: "100px"
        }}>
            <section style={{opacity: mainOpacity, transition: "1s"}}>
                <div className="container1 color2">
                    <div className="row" style={{justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px"}}>
                        <div className="col col-1-2 intro-left">
                            <h1 
                            style={{
                                fontSize: "50px"
                            }} >Ondrej Laube</h1>
                            <br/>
                            <h3>frontend developer for your next project</h3>
                            <ScrollContainerIntro 
                            mainOpacity={mainOpacity}
                            textInput={text1} 
                            timing={timing1} 
                            delay={delay1}
                            />
                        </div>
                        <div className="col"
                        style={{position: "relative", transition: "2s", opacity: mainOpacity}}>
                            <img src={foto} className="mainPic" alt="profile photo"/>

                            <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: "0",
                                display: "flex",
                                flexDirection: "row"
                            }}>

                                {animatiaon.map((item, index) => {
                                    const thisLeft = index * (100 / animatiaon.length)

                                    return(
                                        <div 
                                        className={"color2" + " " + showFotoWidth} 
                                        key={index}
                                        style={{
                                            background: "rgb(255, 255, 255)",
                                            height: "100%",
                                            position: "absolute",
                                            left: thisLeft + "%"
                                        }}></div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    )
};