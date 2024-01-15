

export default function MySkills({ skills, mainOpacity }) {
    
    //REACT / NEXT.JS
    const text1 = "Mastering the language of React and dancing on the edge with Next.js, I create dynamic web experiences. With each component, I breathe life into interfaces, seamlessly blending creativity with the power of cutting-edge technology.";

    //UI
    const text2 =  "Passionate about intuitive design, I craft interfaces with attention to detail. I transform pixels into poetry, creating seamless interactions that captivate and elevate the user journey in UI and UX.";

    //THREE.JS
    const text3 = "Exploring Three.js, I push beyond traditional web development boundaries, showcasing the potential within the browser. With Three.js, I bring concepts to life, merging creativity and technology into a captivating playground.";

    return(
        <div className="container color1 scrollMarginTop" 
        ref={skills}
        style={{
            opacity: mainOpacity,
            transition: "1.5s"
            }}>
            <section className="container1 color1" >
                <div className="col col-1-2 intro-left">
                    <h1 
                    className="title" 
                    style={{

                    }}>
                        My Skills
                    </h1>
                    <div className="pad1">
                    <br/>

                        <h2>React / Next.js</h2>
                        <p className="label">{text1} </p>
                        <br/>


                        <h2>UI</h2>
                        <p className="label">{text2} </p>
                        <br/>

                        <h2>Three.js</h2>
                        <p className="label">{text3} </p>
                    </div>
                </div>
            </section> 
        </div>
    )
}