import { useEffect, useState } from "react"

export default function ConsoleText({ textInput, textFontWeight, timing, textFontSize }) {

    const [strednikOpacity, setStrednikOpacity] = useState("█");
    const [textCounter, setTextCounter] = useState(0);
    const [welcomeText, setWelcomeText] = useState("");
    const text = textInput;

    useEffect(() => {
      let textInterval;
      let timeout;
      if(textCounter <= (text.length - 1)){
          textInterval = setInterval(() => {
              setTextCounter(textCounter + 1);
              setWelcomeText(welcomeText + text[textCounter]);
          }, timing); 
      }else{
        textInterval = null;

        timeout = setTimeout(() => {
          setStrednikOpacity(" ");
        }, 500)
      }

      return () => {
          clearInterval(textInterval);
          clearTimeout(timeout);
      }
    })

    return(
        <>
        <div 
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
        }}>
          <p
          style={{
              fontSize: textFontSize,
              fontWeight: textFontWeight,
              marginTop: "auto",
              fontFamily: "'Courier New', Courier, monospace",
          }}>
              {welcomeText + strednikOpacity}
          </p>

        </div>
        </>
    )
}