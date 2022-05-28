import React, {useState} from 'react'
                                             
export default function Comp2(props) {
    const [text, setText] = useState("");

    const btnClick1 = () => {
        // let newTxt = text.toUpperCase();
        // console.log(newTxt);
        setText(text.toUpperCase());
        // console.log(text)
    }
    const btnClick2 = () => {
        // let newTxt = text.toLowerCase();
        // console.log(newTxt);
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        // console.log(event.target.value)
        setText(event.target.value);
    }
    const replaceStr = (event) => {
        setText(text.replace("aditya","bhatt"))
    }
    const countStr = (event) => {
        const count = text.trim().split(/\s+/).length;
        console.log(" total words = "+count)
        
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Leave a comment here" id="txtbox" rows="10" onChange={handleOnChange}></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
                <button className="btn btn-primary" onClick={btnClick1}>Convert to Uppercase</button><br></br><br></br>
                <button className='btn btn-primary' onClick={btnClick2}>Convert to Lowercase</button><br></br><br></br>
                <button className='btn btn-primary' onClick={replaceStr}>Replace</button><br></br><br></br>
                <button className='btn btn-primary' onClick={countStr}>Count</button>
                <div id='res'></div>
        </div>
    )
}