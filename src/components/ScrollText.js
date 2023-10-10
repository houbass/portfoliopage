import { useLayoutEffect, useRef, useState } from 'react'

//components
import ConsoleText from './ConsoleText';

export default function ScrollText({ text }) {

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
        setElementClass("textAnimation");
      }
    }
  
    //on resize
    function resizeFun() {
      const y = getTotalHeight();

      if(y > elementRef.current.offsetTop){
        setElementClass("textAnimation");
      }
    }
  
    useLayoutEffect(() => {
      scrollFun();
      window.addEventListener("scroll", scrollFun);
      window.addEventListener("resize", resizeFun);
  
      return () => {
        window.removeEventListener("scroll", scrollFun);
        window.removeEventListener("resize", resizeFun);
      }
    }, [])

  return (
    <>
        <div 
        ref={elementRef} 
        className={"topic1" + " " + elementClass}
        >
            <h3 
            className={"text" + " " + elementClass} 
            >
                {text} 
            </h3>
        </div>
    </>
  )
}