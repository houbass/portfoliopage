

export default function NavBtnMobile({ text, refData, selections, setMenuVisibility }) {

    return(
        <h3 
        className={selections}
        onClick={() => {
            refData.scrollIntoView();
            setMenuVisibility("mobileMenuHide");
        }}
        >{text}</h3>
    )
}