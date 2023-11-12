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
    const text1 = "text about Lofi music chord progression randomizer text about Lofi music chord progression randomizer";
    const text1FontSize = 22;
    const text1Weight = "default"; 
    const timing1 = 20;
    const delay1 = 0;

    //TEXT 2
    const text2 =  "Text about gravitaion simulation using Three.js";

    //TEXT3
    const text3 = "Text about mindfuck game";

    //TEXT4
    const text4 = "Text about mining game";

    //TEXT5
    const text5 = "Spaceship game";

    //TEXT5
    const text6 = "Text about tank game";
    
    
    //ON LOAD
    useLayoutEffect(() => {
        if(mainOpacity === 1){
            setShowFotoWidth("0%")
            setDivHeight(pageRef.current.offsetHeight)
        }

    },[mainOpacity])



    return(
        <div ref={pageRef} className="container color2">



            <section style={{opacity: mainOpacity}} >

                <div className="container1 color2">

                        <div className="col col-1-2 intro-left">
                            <h1 >My projects</h1>

                            <br/>
                            <h3>Lofi music chord progression randomizer</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text1} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

                            <br/>
                            <h3>Gravitation simulation</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text2} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

                            <br/>
                            <h3>Mindfuck game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text3} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                            
                            <br/>
                            <h3>Mining game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text4} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                                                        <br/>
                            <h3>Spaceship game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text5} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />

                            <h3>Tank game</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text6} 
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