
export default function Contact({ contact, mainOpacity }) {

    const links = [
        {
            text: "laube.ondrej@seznam.cz",
            link: "mailto:laube.ondrej@seznam.cz"
        }, 
        {
            text: "GitHub",
            link: "https://github.com/houbass"
        }, 
        {
            text: "Linkedin",
            link: "https://linkedin.com"
        }, 
        {
            text: "CodeWars",
            link: "https://www.codewars.com/users/houbass"
        }, 
        {
            text: "My music",
            link: "https://open.spotify.com/artist/1ioPe940lafF8R9ejGRRpW"
        }, 
    ]

    return(
        <div 
        className="container color1 scrollMarginTop" 
        ref={contact}
        style={{
            opacity: mainOpacity,
            transition: "1.5s"
        }}>
            <section className="container1 color1" >
                <div className="col col-1-2 intro-left">
                    <h1 
                    className="title" 
                    style={{
                        marginBottom: "00px"
                    }}
                    >
                        Contact
                    </h1>
                    <div className="pad1">
                        <div 
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            minHeight: "150px",
                            gap: "20px",
                            //background: "pink"
                        }}>
                            <div className="contactTable">
                                    {links.map(e => {

                                        return(
                                            <a 
                                            href={e.link} 
                                            key={e.text} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                                <p className="contactBtn">{e.text}</p>
                                            </a>
                                        )
                                    })}
                            </div>
                        </div>   
                    </div>
                </div>
            </section> 
        </div>
    )
}