import React from 'react';

interface Props {
    color:string;
    onColorChange():void;  
}

const Label = (props:Props) => {
    const labelStyle:React.CSSProperties = {
        fontFamily:"sans-serif",
        fontWeight:"bold",
        textAlign:"center"
    }

    return (
        <div style={labelStyle}>
            <p style={labelStyle} onClick={props.onColorChange}>{props.color}</p>
        </div>
    )
}

export default Label;