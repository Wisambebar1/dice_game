const Instructions=()=>{
return(
    <div>
        <h1>Game Instructions:</h1>
        <p>In your turn-roll the dice at least once and accumlate the result in "current"</p>
        <p>you can roll again or click "Hold" to save the points from "Current" and end the turn</p>
        <p>note if you get 6-6 you will lose all points from "current" and the turn will go to your opponent.</p>
        <p>if you managed to reach exactly the target score you win if you passed it you lose</p>
    </div>
)
}
export default Instructions