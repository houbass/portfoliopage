


export default function Footer({ mainOpacity }) {


    return(
        <div className="container intro color2">
            <section className="container1 color2" style={{opacity: mainOpacity}}>
                <div >
                    <div className="col col-1-2 pad1">

                            <br/>
                            <h3>Footer</h3>

                            <div 
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <p className="footerLabel">some shiiit</p>
                                <p className="footerLabel">contacts</p>
                                <p className="footerLabel">email</p>
                            </div>

                    </div>
                </div>
            </section> 
        </div>
    )
}