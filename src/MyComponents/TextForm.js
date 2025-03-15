import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    function updateText(event){
        setText(event.target.value);
    }
    function toUpCase(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlertMessage("Converted to UpperCase","PRIMARY");
    }
    function toLoCase(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlertMessage("Converted to LowerCase","PRIMARY");
    }
    function removeExtraSpace(){
        let regEx = /[ ]+/;
        let newText = text.split(regEx).join(" ");
        setText(newText);
        props.showAlertMessage("Removed Extra Spaces","PRIMARY");
    }
    function copyText(){
        let txtBox = document.getElementById("textmsg");
        txtBox.select();
        navigator.clipboard.writeText(txtBox.value);
        props.showAlertMessage("Copied Text","PRIMARY");
    }
    const firstLetterCapital = () => {
        // let txt = text.split(" ");
        // txt = txt.map(word => {
        //     return word.charAt(0).toUpperCase() + word.substring(1);
        // });
        // txt = txt.join(" ");
        // setText(txt);

        setText(text.split(/[ ]+/).map(word => {
            return word.charAt(0).toUpperCase().concat(word.substring(1));
        }).join(" "));
        props.showAlertMessage("First letter of each word got capitalized","PRIMARY");
    }

    function letterCount(){
        let obj = {};
        let found = false;
        for(let letter of text){
            if(Object.keys(obj).length === 0){
                obj[letter.toLowerCase()] = 1;   
            }
            else{
                found = false;
                for(let key in obj){
                    if(key === letter.toLowerCase()){
                        found = true;
                        obj[key] = obj[key] + 1;
                    }
                }
                if(found === false){
                    obj[letter] = 1;
                }
            }
        }

        let large = 0;
        let k = 0;
        let largeValues = [];
        for(let key in obj){
            if(obj[key] > large){
                large = obj[key];
                k = key;
            }
        }
        for(let key in obj){
            if(obj[key] === large){
                largeValues.push(key);
            }
        }

        // let keys = Object.keys(obj);
        // let res = keys.reduce()
        console.log(obj, k, obj[k], largeValues);
        if(text.length === 0){
            document.getElementById("largest").innerHTML = ``;
        }
        else{
            document.getElementById("largest").innerHTML = `Largest character repeated is "<strong>${largeValues}</strong>", it has occured ${obj[k]} times in a string.`;
        }
        props.showAlertMessage(`Largest value occured - ${largeValues}`,"PRIMARY");
    }

    function wordsCount(){
        // console.log("Word count");
        if(text.length === 0){
            return 0;
        }
        else if(text.endsWith(" ")){
            // setText(text.trim());
            let txt = text.trim();
            return txt.split(/[ ]+/).length;
        }
        else{
            return text.split(/[ ]+/).length;
        }
    }

    // function preview(){
    //  return text;   
    // }

    function clear(){
        setText("");
        document.getElementById("largest").innerHTML = ``;
        props.showAlertMessage("Text Cleared","Warning");
    }

    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className={`mb-3`}>
                <textarea className={`form-control text-${props.mode === "dark"?"light":"dark"}`} value={text} style={{backgroundColor: "transparent"}} name="textmsg" id="textmsg" rows="8" onChange={updateText}></textarea>
            </div>
            <button className="btn btn-primary" onClick={toUpCase}>toUpperCase</button>
            <button className="btn btn-primary mx-1" onClick={toLoCase}>toLowerCase</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>removeExtraSpace</button>
            <button className="btn btn-primary mx-1" onClick={copyText}>coptText</button>
            <button className="btn btn-primary mx-1" onClick={firstLetterCapital}>firstLetterCapital</button>
            <button className="btn btn-primary mx-1" onClick={letterCount}>Largest Letter Occured</button>
            {/* <button className="btn btn-primary mx-1" onClick={preview}>Preview</button> */}
            <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
        </div>
        <h5 className="my-2">Text has {wordsCount()} Words and {text.length} Characters</h5>
        <p id="largest"></p>
        <h3>Preview</h3>
        <p>{text}</p>
        </>
    )
}
