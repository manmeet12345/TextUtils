import { useEffect } from "react";
import React , {useState} from 'react';


export default function Textform(props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase","success")
  }

  const handleLoClick = () =>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase","success")
  }

  const handleClearClick = () =>{
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Cleared the text!","success")
  }
   
  const handleOnChange = (event) =>{
    //console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = '#042743';

    // Clean up on component unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} id="myBox" onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}