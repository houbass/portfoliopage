import { useState } from "react";

//LIBRAIRES
import NavBtnMobile from "./NavBtnMobile";

export default function MobileMenu({ menu, selections }) {

    const [menuVisibility, setMenuVisibility] = useState("mobileMenuHidden");

    //SHOW/HIDE MOBILE MENU
    function showMenu() {
        if(menuVisibility === "mobileMenuHidden" || menuVisibility === "mobileMenuHide") {
            setMenuVisibility("mobileMenuShow");
            document.body.style.overflow = 'hidden';
        } else {
            setMenuVisibility("mobileMenuHide");
            document.body.style.overflow = 'visible';
        }
    }

    //HIDE MENU WHEN CLICK OUTSIDE
    function clickFun() {
        setMenuVisibility("mobileMenuHide");
        document.body.style.overflow = 'visible';
    };


    return(
        <>
        <div 
        className="mobileMenu" 
        style={{
            position: "absolute", 
            top: "34px", 
            right: "20px"
        }}
        >
            <div 
            onClick={showMenu}
            style={{
                cursor: "pointer"
            }}
            >
                <svg width="30" height="30" viewBox="0 0 100 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H100V20H0V0Z" fill="rgb(18, 36, 50)"/>
                    <path d="M10 29H100V49H0V29Z" fill="rgb(18, 36, 50)"/>
                    <path d="M0 58H100V78H0V58Z" fill="rgb(18, 36, 50)"/>
                </svg>
            </div>

            <div 
            className={menuVisibility}
            style={{
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "5px",
                top: "60px",
                right: "0px",
                background: "white",
                paddingRight: "40px",
                paddingBottom: "20px",
                paddingLeft: "20px",
                paddingTop: "20px",
                borderRadius: "0 0 0 20px",
                border: "3px solid rgb(18, 36, 50)",
                marginRight: "-20px",
                zIndex: "10",
            }}>
                {menu.map((e, i) => {
                    return(
                        <div 
                        key={i} 
                        >
                            <NavBtnMobile 
                            text={e.name} 
                            refData={e.ref} 
                            selections={selections[i]} 
                            setMenuVisibility={setMenuVisibility}
                            />
                        </div>
                    )
                })}
            </div>

            <div 
            className={menuVisibility}
            onClick={clickFun}
            style={{
                position: "fixed",
                top: "56px",
                right: "0px",
                background: "rgba(0,0,0,0.5)",
                width: "100%",
                height: "100vh",
            }}>
            </div>
        </div>
        </>
    )
}