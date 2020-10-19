import React from 'react';
// import FadeIn from 'react-fade-in';


export default function Footer() {
    const style = {
        // position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#0060a4",
        color: "white",
        textAlign: "center",
        fontFamily: "'Raleway', sans-serif",

    }

    let copy = '\u00A9'

    return (
        <div className="p-3" style={style}>Bones, New York {copy}2020</div>

    )
}