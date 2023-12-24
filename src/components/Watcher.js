import { useEffect, useRef, useState, useLayoutEffect } from "react";

export default function Watcher({ titleX, titleY, titleWidth, titleHeight }) {
    const canvasRef = useRef(null);

    const width = window.innerWidth;
    const height = 2000;

    console.log(width)

    //DEVICE CHECK STATES
    const [mobile, setMobile] = useState(null);

    //MOUSE COORDINATES
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    //EYEBROW STATES
    const [topLeftEyesClass, setTopLeftEyesClass] = useState("closedEyes");
    const [topRightEyesClass, setTopRightEyesClass] = useState("closedEyes");
    const [bottomEyesClass, setBottomEyesClass] = useState("closedEyes");
    const [startAnimation, setStartAnimation] = useState(false);

    //BULVA DEF
    const vzdalenost = 15;
    const smallR = 5;
    const bigR = 15;
    const x1 = (titleX + titleWidth - bigR - 30) - vzdalenost;
    const x2 = (titleX + titleWidth - bigR - 30) + vzdalenost;

    const y = titleY + (titleHeight / 2);
    const [xBulva1, setXBulva1] = useState(x1);
    const [yBulva1, setYBulva1] = useState(y);
    const [xBulva2, setXBulva2] = useState(x2);
    const [yBulva2, setYBulva2] = useState(y);

    const bulvaPadding = smallR;

    const getMousePosition = (e) => {

        const thisScrollY = window.scrollY;

        setMouseX(e.clientX);
        setMouseY(e.clientY + thisScrollY);
    }

    //EYEBROW
    const moods = [
        {
            name: "normal",
            topLeftEye: "normal",
            topRightEye: "normal",
            bottomEyes: ""
        }, 
        {
            name: "mrkani",
            topLeftEye: "mrkani",
            topRightEye: "mrkani",
            bottomEyes: "mrkani"
        },
        {
            name: "sad",
            topLeftEye: "sadL",
            topRightEye: "sadR",
            bottomEyes: ""
        },
        {
            name: "interest",
            topLeftEye: "interest",
            topRightEye: "interest",
            bottomEyes: "interest"
        },
        {
            name: "angry",
            topLeftEye: "sadR",
            topRightEye: "sadL",
            bottomEyes: "interest"
        },

    ]


    //ON SCROLL
    function scrollCheck() {
        const scrollTop = window.scrollY;
        const thisWindowHeight = window.innerHeight
        const thisTotalHeight = scrollTop + thisWindowHeight;
        //display when its on 0.6 height
        const thisRate =  thisTotalHeight - (thisWindowHeight * 0.7)

        //start animation
        if(thisRate > titleY){
            setStartAnimation(true)
        }
    }

    useEffect(() => {
        scrollCheck();
        //ON SCROLL EVENTS
        window.addEventListener("scroll", scrollCheck);

        return() => {
            window.removeEventListener("scroll", scrollCheck);
        }
    }, [titleY]);


    //EYEBROW ANIMATIONF
    useEffect(() => {
        if(startAnimation === true && mobile === false){
            //OPEN EYES FIRST
            setTopLeftEyesClass("openEyes");
            setTopRightEyesClass("openEyes");
            setBottomEyesClass("openEyes");

            //RANDOM MOOD INTERVAL
            const prev = [10];
            const thisInterval = setInterval(async() => {

                let check = 10;
                async function getRandomNumber () {
                    //get random mood index between 0 and 4
                    const randomNumber = Math.round(Math.random() * 4);

                    //get previous number
                    const getLastIndex = prev.length - 1;
                    const getLast = prev[getLastIndex];

                    //run again if prev number is same
                    if(randomNumber === getLast){
                        getRandomNumber();
                    }
                    else{
                        check = randomNumber;
                    }
                }
                getRandomNumber();

                prev.push(check);

                setTopLeftEyesClass(moods[check].topLeftEye);
                setTopRightEyesClass(moods[check].topRightEye);
                setBottomEyesClass(moods[check].bottomEyes);

                //clear class before next one
                const thisTimeout = setTimeout(() => {

                    setTopLeftEyesClass("");
                    setTopRightEyesClass("");
                    setBottomEyesClass("");

                }, 4800)

                return() => {
                    clearTimeout(thisTimeout);
                }

            }, 5000)

            return() => {
                clearInterval(thisInterval);
            }
        }else{

        }
    }, [startAnimation])


    //EYES ANIMATION
    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        //animation handler (zabranuje aby se animace zrychlovala po kazdem updatu)
        const timerIdHolder = {timerId: null};

        //animation function
        const render = () => { 
            //animation request
            timerIdHolder.timerId = window.requestAnimationFrame(render);

            //POHYB ČOČKY 1
            const lx1 = mouseX - x1;
            const ly1 = mouseY - y;
            const lcheck1 = Math.sqrt(Math.pow(lx1, 2) + Math.pow(ly1, 2));
            let l1;
            if(lcheck1 > bigR - smallR - bulvaPadding){
                l1 = bigR - smallR - bulvaPadding;
            }else{
                l1 = lcheck1;
            }
            const sinBeta1 = lx1 / lcheck1;
            const cosBeta1 = ly1 / lcheck1
            const lxNew1 = sinBeta1 * l1;
            const lyNew1 = cosBeta1 * l1;
            const xNew1 = x1 + lxNew1;
            const yNew1 = y + lyNew1;

            setXBulva1(xNew1);
            setYBulva1(yNew1);

            //POHYB ČOČKY 2
            const lx2 = mouseX - x2;
            const ly2 = mouseY - y;
            const lcheck2 = Math.sqrt(Math.pow(lx2, 2) + Math.pow(ly2, 2));
            let l2;
            if(lcheck2 > bigR - smallR - bulvaPadding){
                l2 = bigR - smallR - bulvaPadding;
            }else{
                l2 = lcheck2;
            }
            const sinBeta2 = lx2 / lcheck2;
            const cosBeta2 = ly2 / lcheck2
            const lxNew2 = sinBeta2 * l2;
            const lyNew2 = cosBeta2 * l2;
            const xNew2 = x2 + lxNew2;
            const yNew2 = y + lyNew2;

            setXBulva2(xNew2);
            setYBulva2(yNew2);

            //canvas shape
            context.clearRect(0, 0, width, height);

            //BĚLMO 1
            context.save();
            context.beginPath();
            context.fillStyle = "white";
            //context.lineWidth = 5;
            //context.arc(x1, y, bigR, 0, 2 * Math.PI);
            context.ellipse(x1, y, bigR * 0.8, bigR, 0, 0, 2 * Math.PI);
            context.fill();
            //context.stroke();
            context.restore();

            //ČOČKA 1
            context.save();
            context.beginPath();
            context.fillStyle = "black";
            context.arc(xBulva1, yBulva1, smallR, 0, 2 * Math.PI);
            context.fill();
            //context.stroke();
            context.restore();  

            //BĚLMO 2
            context.save();
            context.beginPath();
            context.fillStyle = "white";
            //context.lineWidth = 5;
            //context.arc(x2, y, bigR, 0, 2 * Math.PI);
            context.ellipse(x2, y, bigR * 0.8, bigR, 0, 0, 2 * Math.PI);
            context.fill();
            //context.stroke();
            context.restore();

            //ČOČKA 2
            context.save();
            context.beginPath();
            context.fillStyle = "black";
            context.arc(xBulva2, yBulva2, smallR, 0, 2 * Math.PI);
            context.fill();
            //context.stroke();
            context.restore(); 
        };
        render();

        //animation cancel
        return () => {
            cancelAnimationFrame(timerIdHolder.timerId);
        }
    });


    //DEVICE CHECK
    useLayoutEffect(() => {
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }, [])

    return (
        <div onMouseMove={getMousePosition}>
            
            <div style={{
                position: "absolute",
                width: "100%",
                height: height,
                //background: "blue",
                top: "0",
                left: "0"
            }}>
                <canvas id="canvas" ref={canvasRef} height={height} width={width}  />
                <div 
                className={topLeftEyesClass}
                style={{
                    position: "absolute",
                    top: y - bigR - 5,
                    left: x1 - bigR,
                    width: bigR * 2,
                    //height: obociHeight,
                    background: "rgb(18, 36, 50)",
                    //rotate: rotation + "deg",
                }}>               
                </div>

                <div
                className={topRightEyesClass}
                style={{
                    position: "absolute",
                    top: y - bigR - 5,
                    left: x2 - bigR,
                    width: bigR * 2,
                    //height: obociHeight,
                    background: "rgb(18, 36, 50)",
                    //rotate: -1 * rotation + "deg",
                    //transform: "scaleY(-1)",

                }}>
                </div>

                <div 
                className={bottomEyesClass} 
                style={{
                    position: "absolute",
                    //top: y + bigR + 5,
                    left: x1 - bigR,
                    width: bigR * 2,
                    //height: obociHeight,
                    background: "rgb(18, 36, 50)",
                    rotate: "0deg",
                    bottom: 2000 - (y + bigR + 5)
                }}>
                </div>  

                <div 
                className={bottomEyesClass}
                style={{
                    position: "absolute",
                    //top: y + bigR + 5,
                    left: x2 - bigR,
                    width: bigR * 2,
                    //height: obociHeight,
                    background: "rgb(18, 36, 50)",
                    //rotate: "0deg",
                    bottom: 2000 - (y + bigR + 5)
                }}>             
                </div>
            </div>
        </div>
    )
}
