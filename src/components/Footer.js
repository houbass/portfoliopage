import contactPic from "../pic/contact.svg";

export default function Footer({ contact, mainOpacity }) {

    return(
        <div 
        className="container color2 scrollMarginTop" 
        ref={contact}
        style={{
            opacity: mainOpacity,
            transition: "1.5s"
        }}>
            <section className="container1 color1" >
                <div className="col col-1-2 intro-left">
                    <h1 className="title" ><img src={contactPic} height="50px" alt="my skills"/>Contact</h1>
                    <div className="pad1">
                        <div 
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            minHeight: "300px"
                        }}>
                            <p className="footerLabel">laube.ondrej@seznam.cz</p>
                            <p className="footerLabel">github</p>
                            <p className="footerLabel">Linked In</p>
                        </div>   
                    </div>
                </div>
            </section> 
        </div>
    )
}