


export default function Footer({contact, mainOpacity }) {


    return(
        <div 
        ref={contact}
        className="container intro color2 scrollMarginTop" 
        style={{
            minHeight: "700px"
        }}
        >
            <section className="container1 color2" style={{opacity: mainOpacity}}>
                <div >
                    <div className="col col-1-2 pad1">

                            <div 
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
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