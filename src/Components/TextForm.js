import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }
    
    const handleClearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
            <h1 className='mb-3'>{props.heading}</h1>
          <div className="mb-3">
              <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#13466e':'white', color: props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
           </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCase}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearText}> Clear Text</button>
       </div>

       <div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <b><p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes red</p></b> 
          <h2>Preview</h2>
          <p>{text.length>0?text:'Nothing to preview!'}</p>
       </div>
     </>
    ) 
}
