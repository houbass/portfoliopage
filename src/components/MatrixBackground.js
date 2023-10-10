import { useLayoutEffect, useState } from 'react';

export default function MatrixBackground() {

    //INTERVAL TIMING
    const timing = 500 //ms

    //SEGMENTS STATES
    const [segments, setSegments] = useState([]);
    const fieldWidth = 20
    const fieldHeight = 25

    //GET NUMBER OF SEGMENTS
    function getSegments() {
        //get actual window width
        const thisWidth = window.innerWidth;
        const thisHeight = window.innerHeight;
    
        //number of horizontal and vertical segments
        const thisHorizontalSegments = Math.ceil(thisWidth / fieldWidth);
        const thisVerticalSegments = Math.ceil(thisHeight / fieldHeight);

        //set vertical segments
        let thisSegments = []
        for(let i = 0; i < thisVerticalSegments; i++) {

            //set number of horizontal segments
            let horizontalArray = [];
            for(let j = 0; j < thisHorizontalSegments; j++) {
                //get random value (0 / 1)
                const randomValue = Math.round(Math.random());
                horizontalArray.push(randomValue);
            };

            //push all random numbers from for loop
            thisSegments.push(horizontalArray);
        };

        //set all segments
        setSegments(thisSegments);
    };

    //RESIZE FUNCTION
    function resizeFun() {
        getSegments()
    }
  
    //ON LOAD
    useLayoutEffect(() => {

        //add resize listener
        window.addEventListener("resize", resizeFun);

        //get segments onLoad
        getSegments();

        //INTERVAL FOR NUMBERS REFRESH
        const interval = setInterval(() => {
            getSegments();
        }, timing)

        return () => {
            window.removeEventListener("resize", resizeFun);
            clearInterval(interval);
        }
    }, []);


    return(
        <div 
        style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            zIndex: "-1",
            opacity: "0.2",
            filter: "blur(0.5px)",
        }}>

            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute"
            }}>
                {segments.map((item1, index1) => {

                    return(
                        <div 
                        key={index1}
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        }}>
                            {
                                segments[index1].map((item2, index2) => {
                                    return(
                                        <div 
                                        key={index2}
                                        style={{
                                        color: "rgb(0,200,0)",
                                        width: fieldWidth,
                                        height: fieldHeight,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        fontFamily: "'Courier New', Courier, monospace",
                                        
                                        }}>
                                            <p>{item2}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )


}