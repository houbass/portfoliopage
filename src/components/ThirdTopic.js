import { useLayoutEffect, useRef, useState } from "react";

import ScrollContainer from "./ScrollContainer";
import MatrixBackground from "./MatrixBackground";


export default function ThirdTopic({ foto, mainOpacity }) {

    //div ref
    const pageRef = useRef();

    const [showFotoWidth, setShowFotoWidth] = useState("20%")
    const [divHeight, setDivHeight] = useState(0);
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
            setDivHeight(pageRef.current.offsetHeight)
        }

    },[mainOpacity])



    return(
        <div ref={pageRef} className="container color2">

<MatrixBackground height={divHeight}/>

            <section style={{opacity: mainOpacity}} >

                <div className="container1 color2">

                        <div className="col col-1-2 intro-left">
                            <h1 >Recent projects</h1>

                            <br/>
                            <h3>React / Next.js</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text1} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

<br/>
                            <h3>React / Next.js</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text1} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

                            

                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>

            </section> 
        </div>
    )
}