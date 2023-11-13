import { useLayoutEffect, useRef, useState } from "react";

import ScrollContainer from "./ScrollContainer";
import MatrixBackground from "./MatrixBackground";


export default function ComercialProjects({ foto, mainOpacity }) {

    //div ref
    const pageRef = useRef();

    const [showFotoWidth, setShowFotoWidth] = useState("20%")
    const [divHeight, setDivHeight] = useState(0);
    const animatiaon = [1, 2, 3, 4, 5]

    //TEXT 1
    const text1 = "full stack website project, bla bla bla bla bla blabla bla blabla bla bla bla bla blabla bla blabla bla bla bla bla bla";
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
        <div ref={pageRef} className="container color1">

            <section className="container1" style={{opacity: mainOpacity}} >

                <div >

                        <div className="col col-1-2 intro-left">
                            <h1 className="title"><span style={{border: "5px solid rgb(24, 24, 24)", borderRadius: "25%", fontSize: "60px"}}>💲</span>Comercial projects</h1>

                            <br/>
                            <h3>Sofa Lofi websites</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text1} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                            <a className="button button-dark" href="https://lofichordrandomizer.netlify.app" target="blank">make some music</a>
                            <br/><br/><br/><br/><br/><br/>

                            <h3>Gravitation simulation</h3>
                            <ScrollContainer 
                            foto={foto} 
                            textInput={text2} 
                            textFontWeight={text1Weight} 
                            timing={timing1} 
                            textFontSize={text1FontSize} 
                            delay={delay1}
                            />
                            <a className="button button-dark" href="https://threejsgravitation.netlify.app/" target="blank">let's see</a>
                            <br/><br/><br/><br/><br/><br/>



                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>

            </section> 
        </div>
    )
}