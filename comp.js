import React, {useState} from 'react'

export default function Comp() {
    const [text,setText]=useState("Hey there!");
    const btnUpClick = ()=>{
        console.log("You clicked on the Button");
        // let newTxt=text.toUpperCase();
        // let newTxt =text.replace("aman","student");
        // let x=prompt("Enter no.")
        let newInput=text.charAt(5);
        setText(newInput);
    }
    const btnLoClick=()=>{
      let newText=text.slice(0,5);
      setText(newText);
    }
    const handleOnChange =(event)=>{
      console.log("You attempted to change the text in textarea");
      setText(event.target.value);
    }
  return (
    <div>
         <h1>TextBox</h1>
     <textarea className="form-control" aria-label="With textarea" value={text} onChange={handleOnChange}>
     </textarea>
     <button type="button" className="btn btn-primary mx-1" onClick={btnUpClick}>Find Character Using Index</button>
     <button type="button" className="btn btn-primary mx-3" onClick={btnLoClick}>Slice the Text</button>
    </div>
    
  )
}
  