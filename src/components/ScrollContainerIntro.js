import { useLayoutEffect, useRef, useState } from 'react'

//components
import ConsoleTextIntro from './ConsoleTextIntro';

export default function ScrollContainerIntro({ mainOpacity, textInput, timing, delay }) {


    //WRITING
    const [writingHandler, setWritingHandler] = useState(false);

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

    useLayoutEffect(() => {
      if(mainOpacity === 1){
        scrollFun();
      }
    },[mainOpacity])
  
    //SCROLLING / RESIZE LISTENERS
    useLayoutEffect(() => {

        window.addEventListener("scroll", scrollFun);
        window.addEventListener("resize", scrollFun);


      return () => {
        window.removeEventListener("scroll", scrollFun);
        window.removeEventListener("resize", scrollFun);
      }
    }, []);

  return (
    <>
        <div 
        ref={elementRef} 
        className={"topic1" + " " + "text" + " " + elementClass}
        >
            <div 
            style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            //background: "pink",
            position: "relative"
            }}>
              <ConsoleTextIntro 
              writingHandler={writingHandler}
              textInput={textInput} 
              timing={timing} 
              delay = {delay}
              />               
            </div>            
        </div>
    </>
  )
}