import React ,{ useState,useEffect } from 'react'
import New_game from './New_game';
const Current=({number1,number2,input})=>{
    let [total,setTotal]=useState(0);
    useEffect(()=>{setTotal(total=>total+number1+number2)},[number1,number2])
    useEffect(()=>{
        if(total>input){
            alert("u passed the score limit")
    }
    else if(total===input && total>0){
        alert("u reached limit")
    }
            },[total,input])
    const handleReset=()=>{
        setTotal(0)
    }
        
    return(
        <div>
            <h1 >{total}</h1>
            <New_game handleReset={handleReset}/>
        </div>
    )
}
export default Current