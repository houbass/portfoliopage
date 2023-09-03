import { useEffect, useState } from "react"

export default function ConsoleText({ textInput, textFontWeight, timing, textFontSize }) {

    const [strednikOpacity, setStrednikOpacity] = useState("1");
    const [textCounter, setTextCounter] = useState(0);
    const [welcomeText, setWelcomeText] = useState("");
    const text = textInput;

    useEffect(() => {
  
      const strednik = setInterval(() => {
        if(strednikOpacity === "1"){
          setStrednikOpacity("0");
        }else{
          setStrednikOpacity("1");
        }
      }, 600);
  
      let textInterval;
      if(textCounter <= (text.length - 1)){
          textInterval = setInterval(() => {
              setTextCounter(textCounter + 1);
              setWelcomeText(welcomeText + text[textCounter]);
          }, timing); 
      }else{
        textInterval = null;
      }

      return () => {
          clearInterval(strednik);
          clearInterval(textInterval);
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
          }}>
              {welcomeText}
          </p>

          <div 
          style={{
            width: (textFontSize / 2),
            height: (textFontSize * 1.2),
            background: "rgba(255,255,255,0.9)",
            opacity: strednikOpacity,
            marginTop: "auto",
            transition: "0.2s",
          }}>
          </div>
        </div>
        </>
    )
}