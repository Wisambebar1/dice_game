const Instructions=()=>{
return(
    <div>
        <h1 id="instructions-title">Game Instructions:</h1>
        <p class="instructions-paragraph">In your turn-roll the dice at least once and accumlate the result in "current"</p>
        <p class="instructions-paragraph">you can roll again or click "Hold" to save the points from "Current" and end the turn</p>
        <p class="instructions-paragraph">note if you get 6-6 you will lose all points from "current" and the turn will go to your opponent.</p>
        <p class="instructions-paragraph">if you managed to reach exactly the target score you win if you passed it you lose</p>
    </div>
)
}
export default Instructions