
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
            text: "My Music",
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
                <div className="col-1-2 intro-left">
                    <div 
                    className="pointer fit"
                    onClick={() => {
                        contact.current.scrollIntoView();
                    }}>
                        <h1 className="title mb1">Contact</h1>
                    </div>

                    <div>
                        <div 
                        className=""
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
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