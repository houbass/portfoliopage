

export default function NavBtn({ text, refData, selections }) {

    return(
        <h2 
        className={selections}
        onClick={() => {refData.scrollIntoView()}}
        >{text}</h2>
    )
}