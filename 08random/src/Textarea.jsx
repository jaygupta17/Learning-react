import { useState } from "react"
export default function Textarea() {
const uppercase1 = ()=>{
console.log("hi" + text);
let newText = text.toUpperCase();
setText(newText)
}
const change =(event)=>{
console.log("change");
setText(event.target.value)
}
const [text, setText] = useState("Enter the Text2");
return (
<div className = "mb-3">
Enter the Text to Convert: <br></br>
<textarea className="form-control" rows="3" value =
{text} onChange={change}></textarea>
<button className="btn btn-primary"
onClick={uppercase1}>Calculate BMI</button>
</div>
)
}