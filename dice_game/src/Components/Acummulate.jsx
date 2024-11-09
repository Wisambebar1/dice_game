const Accumulate=({total,acum,handleAcum})=>{
    return(
        <div>
            <h2>Global score:{acum}</h2>
            <button onClick={handleAcum}>Hold</button>
        </div>
    )
}
export default Accumulate