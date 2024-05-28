import React, { useState } from "react";

//This file is to handle event

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperClick was clicked to change \"" + text+"\"");
        let newText = text.toUpperCase()
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("Changed");
        setText(event.target.value);
    };

    const [text, setText] = useState("Use the text here");
    return (
        <div>
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
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to upper case
            </button>
        </div>
    );
}
