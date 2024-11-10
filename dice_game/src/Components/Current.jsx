import React ,{ useState,useEffect } from 'react'
import New_game from './New_game';
import Accumulate from './Acummulate';
const Current=({number1,number2,input})=>{
    console.log(number1,number2)
    let [total,setTotal]=useState(0);
    useEffect(()=>{setTotal(total=>total+number1+number2)},[number1,number2])
    useEffect(()=>{
        if(total>input){
            alert("u passed the score limit")
        }
        else if(total===input && total>0){
        alert("u reached limit")
        }
            },[total])
    useEffect(()=>{
        if(number1===6 && number2===6){
            alert("game over")
        }
    },[number1,number2])
    let [acum,setAcum]=useState(0)
    const handleAcum=()=>{
        setAcum(Acum=>total+Acum)
        setTotal(0)
    }
    const handleReset=()=>{
        setTotal(0)
        setAcum(0)
    }
    return(
        <div>
            <h1 >Current score:{total}</h1>
            <Accumulate total={total} handleAcum={handleAcum} acum={acum}/>
            <New_game handleReset={handleReset}/>
        </div>
    )
}
export default Current