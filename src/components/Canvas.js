import React, { useEffect, useRef, useState } from "react";


const CanvasPage = ({ foto }) => {
    //canvas ref
    const canvasRef = useRef(null);
    const canvas2Ref = useRef(null);

    //VELIKOST CANVAS 1
    const width = 200;
    const height = 200;

    //VELIKOST CANVAS 2
    //const cell = 10;
    const [cell, setCell] = useState(1);
    const [scale, setScale] = useState(1);
    const cols = Math.floor(width / cell);
    const rows = Math.floor(height / cell);
    const numCells = cols * rows;
    const width2 = cols;
    const height2 = rows;

    //TEXT DEFINITION
    const fontFamily = "arial"

    //canvas img
    const fotoImage = new Image();
    fotoImage.src = foto

    //mouse events
    const [eventHandler, setEventHandler] = useState(false);
    function mouseEnter() {
        /*
        setCell(2);
        setEventHandler(true);
        */
    }

    function mouseLeave() {
        /*
        setCell(7);
        setEventHandler(false);
        */
    }
    

    useEffect(() => {

        let interval;
        if(eventHandler === false){

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
        //const timerIdHolder = {timerId: null};

        fotoImage.onload = () => {

        //animation function
        //const render = () => { 

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
                context.fillStyle = `rgba(${r}, ${170}, ${b}, ${a} `;
                context.font = `${cell * scale}px ${fontFamily}`;
                context.textBaseline = "top";
                context.fillText(symbols[randomNumber], 0, 0);
                context.textAlign = "center";
                context.restore();
            }
        //};
        //render();
        }

        //animation cancel
        //return () => cancelAnimationFrame(timerIdHolder.timerId);
    });  

    return (
        <div style={{filter: "saturate(2)", position: "relative"}}>
            <canvas onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id="canvas" ref={canvasRef} height={height} width={width} style={{borderRadius: "50px"}}  />
            <canvas id="canvas2" ref={canvas2Ref} height={height2} width={width2} style={{position: "absolute", zIndex: "1", visibility: "hidden", left: "0"}}  />      
        </div>
    )
}

export default CanvasPage;