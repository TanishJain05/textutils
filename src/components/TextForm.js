import React,{ useState } from 'react'

export default function TextForm(props){
    const onUpClicked=()=>{
        let val=text.toUpperCase();
        setText(val);
        props.showAlert("Text converted to uppercase.","Success")
    }
    const onLoClicked=()=>{
        let val=text.toLowerCase();
        setText(val);
        props.showAlert("Text converted to lowercase.","Success")
    }
    const OnChangeFunc=(r)=>{
        setText(r.target.value);
    }
    const Speak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Reading the text.","Success")
    }
    const [text,setText]= useState("");
    return (<>
    <div className='container'>
    <div className="my-3">
                    <label className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</label>
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={OnChangeFunc} ></textarea>
                    <button className="buttons mx-2 my-2" onClick={onUpClicked} >Convert to Uppercase</button>
                    <button className="buttons mx-2 my-2" onClick={onLoClicked} >Convert to Lowercase</button>
                    <button className="buttons mx-2 my-2" onClick={Speak}>Speak</button>
                </div>
        <div className={`form-label text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Text Summary</h1>
            <p>{text.length === 0 ? 0 : text.split(" ").length} words or {text.length} Characters</p>
            <p>{(text.length === 0 ? 0 : text.split(" ").length) * 0.008} minutes for reading</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </div>
                
    </>
        
    );
    }

