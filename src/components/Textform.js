import React,{useState} from 'react'

export default function Textform(props) {

     //below are the event handler
    const handleOnChange=(event)=>{
        console.log('On Change');
        setText(event.target.value);
    }
    //below are the event handler
    const handleUpClick=()=>{
        console.log('Uppercase was clicked '+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!','success');
    }
    //below are the event handler
    const handleLoClick=()=>{
      console.log('Lowercase was clicked '+ text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lowercase!','success');
  }

  const handleReClick=()=>{
    console.log('Reverse string was clicked');
    let reverseText= text.split('').reverse().join('');
    setText(reverseText);
  }

  const handleCopy=()=>{
    console.log('Copy text was clicked');
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copy to clipboard!','success');
  }

    const [text,setText]=useState(""); // we had made state here , text is varaiable where values is set and setText function is used to update the value within the text variable
    //text="new Text";//wrong to way to change the text
    //setText("new Text");//corect way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',
                color:props.mode==='dark'?'white':'black'
              }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleReClick}>Reverse a string</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      {/* use the \s quantifier to remove all white space */}
      <p>{text.split(/[^\s]+/).length - 1} words and {text.length} characters</p>      
      <p>{0.008 *  text.split(/[^\s]+/).length - 1}  Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
