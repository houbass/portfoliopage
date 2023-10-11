import { useLayoutEffect, useRef, useState } from 'react'

export default function ScrollConsoleText({ textInput, textFontWeight, timing, textFontSize, delay }) {

    //WRITING
    const [writingHandler, setWritingHandler] = useState(false);
    const [strednikOpacity, setStrednikOpacity] = useState("█");
    const [textCounter, setTextCounter] = useState(0);
    const [welcomeText, setWelcomeText] = useState("");
    const text = textInput;

    //SCROLLING
    const [elementClass, setElementClass] = useState("");
    const elementRef = useRef();

    //get total height
    function getTotalHeight() {
      const scrollYoffset = window.pageYOffset;
      const windowHeigth = window.innerHeight;
      const totalHeight = scrollYoffset + windowHeigth;

      return (totalHeight - (windowHeigth * 0.2));
    }

    //on scroll function
    function scrollFun() {
      const y = getTotalHeight();

      if(y > elementRef.current.offsetTop){

        //DELAY
        const timeout = setTimeout(() => {
            setElementClass("textAnimation");
            setWritingHandler(true)            
        }, delay);

        return () => {
            clearTimeout(timeout)
        }
      }
    }
  
    //SCROLLING / RESIZE LISTENERS
    useLayoutEffect(() => {
      scrollFun();
      window.addEventListener("scroll", scrollFun);
      window.addEventListener("resize", scrollFun);
  
      return () => {
        window.removeEventListener("scroll", scrollFun);
        window.removeEventListener("resize", scrollFun);
      }
    }, []);

    //WRITING
    useLayoutEffect(() => {
        if(writingHandler === true){
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
        }else{

        }
    });

  return (
    <>
        <div 
        ref={elementRef} 
        className={"topic1" + " " + "text" + " " + elementClass}
        >
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
        </div>
    </>
  )
}