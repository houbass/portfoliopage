import { useLayoutEffect, useState } from "react";

import ScrollContainer from "./ScrollContainer";



export default function SecondTopic({ foto, mainOpacity }) {

    const [showFotoWidth, setShowFotoWidth] = useState("20%")
    const animatiaon = [1, 2, 3, 4, 5]

    //TEXT 1
    const text1 = "Mastering the language of React and dancing on the edge with Next.js, I sculpt dynamic web experiences that transcend the ordinary. With each component, I breathe life into interfaces, seamlessly blending creativity with the power of cutting-edge technology.";
    const text1FontSize = 22;
    const text1Weight = "default"; 
    const timing1 = 20;
    const delay1 = 0;

    //TEXT 2
    const text2 =  "With a keen eye for detail and a passion for intuitive design, I shape interfaces that not only captivate but also elevate the user journey. In the realm of UI and UX, I turn pixels into poetry, creating a symphony of seamless interactions that leave a lasting impression.";


    //TEXT3
    const text3 = "Stepping into the immersive world of Three.js, I transcend the boundaries of traditional web development. With every line of code, I sculpt captivating 3D experiences, pushing the limits of what's possible in the browser. Armed with the power of Three.js, I turn concepts into visually stunning realities, where the intersection of creativity and technology becomes a mesmerizing playground.";
    
    
    //ON LOAD
    useLayoutEffect(() => {
        if(mainOpacity === 1){
            setShowFotoWidth("0%")
        }

    },[mainOpacity])


    return(
        <div className="container intro color1">
        <section style={{opacity: mainOpacity}}>
            <div className="container1 color1">

                    <div className="col col-1-2 intro-left">
                        <h1 >My skills</h1>

                        <br/>
                        <h3>React / Next.js</h3>
                        <p className="big-text">{text1} </p>
                        <br/>

                        <h3>UI</h3>
                        <p className="big-text">{text2} </p>
                        <br/>

                        <h3>Three.js</h3>
                        <p className="big-text">{text3} </p>
                        
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </section> 
        </div>
    )
}