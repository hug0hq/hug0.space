import React, {  useRef, useState } from 'react';
/* import CanvasDraw from "react-canvas-draw"; */

export const Draw = (props) => {

    /* const defaultProps = {
        onChange: null,
        loadTimeOffset: 5,
        lazyRadius: 30,
        brushRadius: 12,
        brushColor: "#444",
        catenaryColor: "#0a0302",
        gridColor: "rgba(150,150,150,0.17)",
        hideGrid: false,
        canvasWidth: 400,
        canvasHeight: 400,
        disabled: false,
        saveData: null,
        immediateLoading: false,
        hideInterface: true
    }; */



    // we use a ref to access the canvas' DOM node
    /*   const canvasRef = React.useRef(null);
      const [startPoint, setStartPoint] = useState(null);
   */
    /*     useEffect(() => {
            const context = canvasRef.current.getContext("2d");
            // ...drawing using the context
            // moving our hand to the starting position
            if (startPoint) {
                const x1 = startPoint.x - context.offsetLeft;
                const y1 = startPoint.y - context.offsetTop;
                context.moveTo(0,);
    
                // drawing a blueprint line to the finishing position
                context.lineTo(x1, y1);
                // taking a purple pen and coloring the line
                context.strokeStyle = "purple";
                context.stroke();
                console.log('draw')
            }
    
        }, [canvasRef, startPoint]); */

    /* onDrag onDragEnd onDragEnter */
    const canvasRef = useRef();
    const [point, setPoint] = useState({
        drawing: false
    });

    const handleOnMouseDown = (e) => {
        const context = canvasRef.current.getContext("2d");
        //onst rect = context.getBoundingClientRect();

        context.beginPath();

        setPoint({
            lastX: e.clientX - context.offsetLeft,
            lastY: e.clientY - context.offsetLeft,
            drawing: true
        });
    }

    const handleOnMouseMove = (e) => {
        if (point.drawing) {
            const context = canvasRef.current.getContext("2d");
            //const rect = context.getBoundingClientRect();
            const lastX = point.lastX;
            const lastY = point.lastY;
            let currentX = e.clientX - context.offsetLeft;
            let currentY = e.clientY - context.offsetLeft;

            context.lineTo(lastX, lastY, currentX, currentY);
            context.strokeStyle = "purple";
            context.stroke();
            
            setPoint({
                lastX: currentX,
                lastY: currentY
            });
            console.log('line')
        }
    }

    const handleonMouseUp = (e) => {
        setPoint({
            drawing: false
        });
    }


    return (
        /*   <CanvasDraw brushRadius="6" catenaryColor="transparent" hideInterface hideGrid brushColor="#77d877"></CanvasDraw>
    */
        <canvas /* style={this.canvasStyle()} */
            className="draw"
            ref={canvasRef}
            onMouseDown={e => handleOnMouseDown(e)}
            //  onTouchStart={this.handleOnTouchStart.bind(this)}
            onMouseMove={e => handleOnMouseMove(e)}
            //  onTouchMove={this.handleOnTouchMove.bind(this)}
            onMouseLeave={e => handleonMouseUp(e)}
            onMouseUp={e => handleonMouseUp(e)}
        // onTouchEnd={this.handleonMouseUp.bind(this)}
        >
        </canvas>
    )

    /*    return <canvas className="draw" ref={canvasRef} onMouseDown={e => setStartPoint({ x: e.pageX, y: e.pageY })}
           onDrag={e => { setStartPoint({ x: e.pageX, y: e.pageY }) }}
      */      /* onMouseLeave={e => { e }}  */

    /*     <CanvasDraw brushRadius="6" catenaryColor="transparent" hideInterface hideGrid brushColor="#77d877"></CanvasDraw>
 */

}