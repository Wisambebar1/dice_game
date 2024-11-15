import { useState } from "react"
import Roll from "./Roll";
const Input=()=>{
    let [input,setInputValue]=useState(0);
    const handleInputChange=(e)=>{
        let value=parseFloat(e.target.value)
        setInputValue(value)
    }
    return(
        <div>
            <input onChange={handleInputChange} type="number"></input>
            <Roll input={input}/>
        </div>
    )
}
export default Input