import React, { useEffect, useRef, useState } from "react";

//pic
import foto from "../pic/foto.jpg";

const CanvasPage = () => {
    //canvas ref
    const canvasRef = useRef(null);
    const canvas2Ref = useRef(null);

    //VELIKOST CANVAS 1
    const width = 300;
    const height = 300;

    //VELIKOST CANVAS 2
    //const cell = 10;
    const [cell, setCell] = useState(7);
    const [scale, setScale] = useState(1.5);
    const cols = Math.floor(width / cell);
    const rows = Math.floor(height / cell);
    const numCells = cols * rows;
    const width2 = cols;
    const height2 = rows;

    //TEXT DEFINITION
    const fontFamily = "arial"

    //canvas img
    var fotoImage = new Image();
    fotoImage.src = foto

    //mouse events
    const [eventHandler, setEventHandler] = useState(false);
    function mouseEnter() {
        setCell(2);
        setEventHandler(true);
    }

    function mouseLeave() {
        setCell(7);
        setEventHandler(false);
    }

    //one tik
    const [tik, setTik] = useState(0);
    const fps = 2;
    const time = 1000 / fps;

    useEffect(() => {

        let interval;
        if(eventHandler === false){

            /*
            interval = setInterval(() => {
                setTik(tik + 1);
    
            }, time)
            */

        }else{
            interval = null;
        }

        return () => {
            clearInterval(interval);
        }
    })

    useEffect(() => {

        //první canvas
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        //druhy canvas
        const canvas2 = canvas2Ref.current;
        const context2 = canvas2.getContext("2d");

        //animation handler (zabranuje aby se animace zrychlovala po kazdem updatu)
        const timerIdHolder = {timerId: null};

        fotoImage.onload = () => {

        //animation function
        const render = () => { 

            //CLERING OPERACE
            context2.clearRect(0, 0, width2, height2);
            context.clearRect(0, 0, width, height);

            //BACKGROUND 2
            context2.fillStyle = "black";
            context2.fillRect(0, 0, cols, rows);

            //DRAW IMG to CANVAS2 than BITMAP in CANVAS1
            context2.save();
            context2.drawImage(fotoImage, 0, 0, rows, rows);
            context2.restore();

            //BITMAPA
            //get RGBA aray from context2
            const canvas2Data = context2.getImageData(0, 0, cols, rows).data
            const symbols = ["0", "1", "0", "1", "0", "3", "7", "9"]

            for (let i = 0; i < numCells; i++) {
                //choose symbol
                const randomNumber = Math.round(Math.random() * 4);

                //grid
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = col * cell;
                const y = row * cell;

                //rgb
                const r = canvas2Data[i * 4 + 0];
                const g = canvas2Data[i * 4 + 1];
                const b = canvas2Data[i * 4 + 2];
                const a = canvas2Data[i * 4 + 3];

                //each cell
                context.save();
                context.translate(x, y);
                context.beginPath();
                //context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a} `;
                context.fillStyle = `rgba(${r}, ${130}, ${b}, ${a} `;
                context.font = `${cell * scale}px ${fontFamily}`;
                context.textBaseline = "top";
                context.fillText(symbols[randomNumber], 0, 0);
                context.textAlign = "center";
                context.restore();
            }
        };
        render();
    }

        //animation cancel
        return () => cancelAnimationFrame(timerIdHolder.timerId);
    });  

    return (
        <div className="canvas" >
            <canvas onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id="canvas" ref={canvasRef} height={height} width={width} style={{borderRadius: "50px"}}  />
            <canvas id="canvas2" ref={canvas2Ref} height={height2} width={width2} style={{position: "absolute", zIndex: "1", visibility: "hidden"}}  />      
        </div>
    )
}

export default CanvasPage;