

export default function NavBtnMobile({ text, refData, selections, setMenuVisibility }) {

    return(
        <h2 
        className={selections}
        onClick={() => {
            refData.scrollIntoView();
            setMenuVisibility("mobileMenuHide");
            document.body.style.overflow = 'visible';
        }}
        >{text}</h2>
    )
}