




export default function ProjectCard({ item, index, thisVisibility, gitPic, gittextdPic }) {


    return(
        <>
            <a 
            href={item.link} 
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className="pad2 pb1">{item.title}</h2>
            </a>

            <div className="projectCardContent pad2" >
                <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                >
                    <div className="cardImg">
                        <img 
                        className="projectImg"
                        src={item.pic} 
                        alt={item.title} 
                        />
                    </div>
                </a>

                <div className="infoCard">
                    <p className="label">{item.text}</p>
                    <div>
                        <h3>Tech Stack:</h3>

                        {item.techStack.map((stack, i) => {
                            // NO COMMA ON LAST ELEMENT
                            let comma;
                            if(i + 1 === item.techStack.length ) {
                                comma = "";
                            } else{
                                comma = ","
                            }

                            return(
                                <div key={i} className="techList">
                                    <a className="techLink" href={stack.url} rel="noopener noreferrer" target="_blank" >
                                        {stack.name + comma}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <br/>
            <div className="infoCardLinks">
                <a className="button button-dark" 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                >{item.btnText}</a>

                <a href={item.git} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <div className="gitIcon"
                    style={{
                        visibility: thisVisibility,
                    }}>
                        <img src={gitPic} width="40" alt="GitHub logo"/>
                        <img src={gittextdPic} width="50" alt="GitHub text"/>
                    </div>
                </a>
            </div>
        </>
    )
}