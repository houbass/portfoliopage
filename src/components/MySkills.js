import { useLayoutEffect, useState, useRef, useEffect } from "react";

//components
import Watcher from "./Watcher";

//pictures
import skillsPic from "../pic/skills.svg"

export default function MySkills({ mainOpacity }) {
    
    //REACT / NEXT.JS
    const text1 = "Mastering the language of React and dancing on the edge with Next.js, I sculpt dynamic web experiences that transcend the ordinary. With each component, I breathe life into interfaces, seamlessly blending creativity with the power of cutting-edge technology.";

    //UI
    const text2 =  "With a keen eye for detail and a passion for intuitive design, I shape interfaces that not only captivate but also elevate the user journey. In the realm of UI and UX, I turn pixels into poetry, creating a symphony of seamless interactions that leave a lasting impression.";

    //THREE.JS
    const text3 = "Stepping into the immersive world of Three.js, I transcend the boundaries of traditional web development. With every line of code, I sculpt captivating 3D experiences, pushing the limits of what's possible in the browser. Armed with the power of Three.js, I turn concepts into visually stunning realities, where the intersection of creativity and technology becomes a mesmerizing playground.";



    return(
        <div className="container color1" 
        style={{
            opacity: mainOpacity,
            transition: "1.5s"
            }}>
            <section className="container1 color1" >
                <div className="col col-1-2 intro-left">
                    <h1 className="title" ><img src={skillsPic} height="50px"/>My skills</h1>
                    <div className="pad1">
                        <br/>
                        <h3>React / Next.js</h3>

                        <span className="label">{text1} </span>
                        <br/>
                        <br/>

                        <h3>UI</h3>
                        <span className="label">{text2} </span>
                        <br/>
                        <br/>

                        <h3>Three.js</h3>
                        <span className="label">{text3} </span>
                        <br/>
                        <br/>
                        
                    </div>
                </div>

            </section> 
        </div>
    )
}