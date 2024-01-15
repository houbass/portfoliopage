import { useLayoutEffect, useRef, useState } from 'react'

export default function ConsoleTextIntro({writingHandler, textInput, timing, delay }) {

  //WRITING
  const [thisWritingHandler, setThisWritingHandler] = useState(false);
  const [strednikOpacity, setStrednikOpacity] = useState("");
  const [textCounter, setTextCounter] = useState(0);
  const [welcomeText, setWelcomeText] = useState("");
  const text = textInput;

  //SCROLLING
  const elementRef = useRef();

  useLayoutEffect(() => {
    const thisTimeout = setTimeout(() => {
      if(writingHandler === true) {
        setThisWritingHandler(true);
      }else{

      }
    }, delay);

    return () => {
      clearTimeout(thisTimeout);
    }
    
    // eslint-disable-next-line
  }, [writingHandler]);

  //WRITING
  useLayoutEffect(() => {
    if(thisWritingHandler === true){
        let textInterval;
        let timeout;

        if(textCounter <= (text.length - 1)){
            textInterval = setInterval(() => {
                setTextCounter(textCounter + 1);
                setWelcomeText(welcomeText + text[textCounter]);
                setStrednikOpacity("█");
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
    }else{

    }
  });

  return (
    <>
        <div 
        ref={elementRef} 
        >
            <div 
            style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            position: "relative"
            }}>
              <p 
              className="labelIntro"
              style={{
                  position: "absolute"
              }}>
                  {welcomeText + strednikOpacity}
              </p>

              <p 
              className="label"
              style={{
                  color: "rgba(0,0,0,0)"
              }}>
                  {text + " █"}
              </p>

            </div>            
        </div>
    </>
  )
}