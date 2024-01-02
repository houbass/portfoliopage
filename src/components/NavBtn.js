

export default function NavBtn({ text, refData, selections }) {

    return(
        <h3 
        className={selections}
        onClick={() => {refData.scrollIntoView()}}
        >{text}</h3>
    )
}