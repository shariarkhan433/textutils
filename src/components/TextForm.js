import React, { useState } from "react";

//This file is to handle event

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperClick was clicked to change \"" + text + "\"");
        let newText = text.toUpperCase()
        setText(newText);
    };
    const handleLowClick = () => {
        console.log("The key to lower was clicked")
        let setltext = text.toLowerCase()
        setText(setltext);
    }

    const handleClearText = () => {
        console.log("The text has been cleared")
        setText("")
    }
    const handleOnChange = (event) => {
        console.log("Changed");
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    let wordcount = text.split(" ").length
    return (
        <>
            <div className="container">
                <h1>{props.headings}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="5"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to upper case
                </button>
                <button className="btn btn-primary" onClick={handleLowClick}>Convert to lower class</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleClearText}>Clear Text</button>
            </div>


            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{wordcount} words, {text.length} character</p>
                <p>It would take {wordcount * 0.008} minutes to read</p>
            </div>
        </>
    );
}
