const Accumulate=({total,acum,handleAcum})=>{
    return(
        <div>
            <h1 className="current-global-score">Global score:{acum}</h1>
            <button className="button" onClick={handleAcum}>Hold</button>
        </div>
    )
}
export default Accumulate