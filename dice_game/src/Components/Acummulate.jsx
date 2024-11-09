import { useState} from "react"
const Accumulate=({total,handleScore})=>{
    let [acum,setAcum]=useState(0)
    const handleAcum=()=>{
        setAcum(Acum=>total+Acum)
        handleScore()
    }
    return(
        <div>
            <h2>Global score:{acum}</h2>
            <button onClick={handleAcum}>Hold</button>
        </div>
    )
}
export default Accumulate