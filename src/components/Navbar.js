import { useEffect, useState } from "react";

//components
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Navbar({ mainOpacity2, introduction, skills, projects, comercial, contact}) {

    //navbar states
    const [selections, setSelections] = useState(["navBtn", "navBtn", "navBtn", "navBtn", "navBtn"]);
    const [menuVisibility, setMenuVisibility] = useState("mobileMenuHidden");
    
    const menu = [
        {
            name: "my skills",
            ref: skills.current
        }, 
        {
            name: "my projects",
            ref: projects.current
        },
        {
            name: "comercial projects",
            ref: comercial.current
        },
        {
            name: "contact",
            ref: contact.current
        },
    ]

    //scrolling function
    function scrolling() {

        if(skills.current && projects.current && comercial.current && contact.current) {
            const screen = window.innerHeight * 0.33;
            const screen2 = window.innerHeight * 0.8;
            
            if(
            skills.current.getBoundingClientRect().y < screen && 
            projects.current.getBoundingClientRect().y > screen
            ) {
                setSelections(["navBtnHovered", "navBtn", "navBtn", "navBtn", "navBtn"]);
            } else if(
            projects.current.getBoundingClientRect().y < screen && 
            comercial.current.getBoundingClientRect().y > screen
            ) {
                setSelections(["navBtn", "navBtnHovered", "navBtn", "navBtn", "navBtn"]);
            } else if(
                comercial.current.getBoundingClientRect().y < screen &&
                contact.current.getBoundingClientRect().y > screen2
            ) {
                setSelections(["navBtn", "navBtn", "navBtnHovered", "navBtn", "navBtn"]);
            } else if(
                contact.current.getBoundingClientRect().y < screen2
            ) {
                setSelections(["navBtn", "navBtn", "navBtn", "navBtnHovered", "navBtn"]);
            }else{
                setSelections(["navBtn", "navBtn", "navBtn", "navBtn", "navBtnHovered"]);
            }
        }
    }

    //SCROLLING EVENT LISTENER
    useEffect(() => {
        window.addEventListener("scroll", scrolling, { passive: true });

        return () => {
            window.removeEventListener("scroll", scrolling, { passive: true });
        }
    });

    useEffect(() => {
        scrolling();
        // eslint-disable-next-line
    }, []);

    return(
        <>
            <nav 
            style={{
                width: "100%",
                maxWidth: "1080px",
                position: "fixed",
                background: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                zIndex: "100",
                top: "-25px",
                height: "75px",
                border: "3px solid rgb(18, 36, 50)",
                borderRadius: "0 0 6px 6px", 
                opacity: mainOpacity2,
                transition: "1.5s"
            }}>
                <div 
                className="fr"
                style={{
                    paddingLeft: "10px",
                    alignItems: "end",
                }}
                >
                    <h2 
                    className={selections[4]}
                    onClick={() => {
                        introduction.current.scrollIntoView();

                        if(menuVisibility === "mobileMenuShow") {
                            document.body.style.overflow = 'visible';
                            setMenuVisibility("mobileMenuHide")
                        }
                    }}
                    >home</h2>
                </div>

                <Menu 
                menu={menu} 
                selections={selections}
                />

                <MobileMenu 
                    menuVisibility={menuVisibility} 
                    setMenuVisibility={setMenuVisibility} 
                    menu={menu} 
                    selections={selections}
                />
            </nav>
        </>
    )
}