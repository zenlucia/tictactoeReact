import React from "react";
import Square from "./Square";
const style = {
    border: "8px solid lavender",
    borderRadius: "10px",
    width: "350px",
    height: "350px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr)/repeat(3, 1fr)"
};
const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}  
        
    </div>
)
export default Board;