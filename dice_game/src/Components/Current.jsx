import React ,{ useState,useEffect } from 'react'
const Current=({number1,number2})=>{
    let [total,setTotal]=useState(0);
    useEffect(()=>{setTotal(total=>total+number1+number2)},[number1,number2])
    return(
        <div>
            <h1>{total}</h1>
        </div>
    )
}
export default Current