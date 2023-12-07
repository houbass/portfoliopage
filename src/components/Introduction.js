import { useLayoutEffect, useState } from "react";

//components
import ScrollContainer from "./ScrollContainer";

export default function Introduction({ foto, mainOpacity }) {

    //Photo animation states
    const [showFotoWidth, setShowFotoWidth] = useState("")
    const animatiaon = [1, 2, 3, 4, 5]

    //Animationed text settings
    const text1 = "crafting digital landscapes where design meets functionality and user experience is not just a goal but a journey...";
    const text1FontSize = 22;
    const text1Weight = "default"; 
    const timing1 = 20;
    const delay1 = 500;

    useLayoutEffect(() => {
        if(mainOpacity === 1){
            setShowFotoWidth("fotoTransition")
        }
    },[mainOpacity])


    return(
        <div className="container intro color2">
            <section style={{opacity: mainOpacity}}>
                <div className="container1 color2">
                    <div className="row" style={{justifyContent: "space-between"}}>
                        <div className="col col-1-2 intro-left pad1">
                            <h1 
                            style={{
                                fontSize: "50px"
                            }} >Ondrej Laube</h1>
                            <h3>frontend developer for your next project</h3>
                            <ScrollContainer 
                            mainOpacity={mainOpacity}
                            textInput={text1} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                        </div>
                        <div className="col"
                        style={{position: "relative", transition: "2s", opacity: mainOpacity}}>
                            <img src={foto} className="mainPic" alt="profilephoto"/>

                            <div
                            style={{
                                width: "100%",
                                //background: "black",
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
                                            //width: showFotoWidth,
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