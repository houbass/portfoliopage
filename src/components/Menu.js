import NavBtn from "../components/NavBtn";

export default function Menu({ menu, selections }) {

    return(
        <>
            <div 
            className="fr menu" 
            style={{
                position: "relative",
                paddingRight: "10px",
                alignItems: "end",
                gap: "10px",
                //visibility: "hidden"
            }}>
                {menu.map((e, i) => {
                    return(
                        <div 
                        key={i} 
                        >
                            <NavBtn text={e.name} refData={e.ref} selections={selections[i]}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}