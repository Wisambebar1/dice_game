import Images from './Images'
import React, { useState } from 'react';
import Current from './Current';
const Roll=({input})=>{
    let [number1,setNumber1]=useState(0)
    let [number2,setNumber2]=useState(0)
    const handleRollBtn=()=>{
        number1=Math.floor(Math.random()*6)+1;
        number2=Math.floor(Math.random()*6)+1;
        setNumber1(number1)
        setNumber2(number2)
    }
    return(
        <div>
            <Current number1={number1} number2={number2} input={input}/>
            <button onClick={handleRollBtn}>Roll</button>
            <img id="img-1" src={Images[number1-1]}/>
            <img id="img-2" src={Images[number2-1]}/>
        </div>
    )
}
export default Roll