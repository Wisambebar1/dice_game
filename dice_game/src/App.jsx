import './App.css'
import Input from './Components/Input'
import Instructions from './Components/Instructions'
import Request from './Components/Request'
import Roll from './Components/Roll'
import Start_game from './Components/Start_game'
// import Data from './Components/Images'
function App() {
  return(
    <div>
      <section id="section-1">
        <Instructions/>
        <Request/>
        <Input/>
        <Start_game/>
      </section>
      <section id="section-2">
        <Roll/>
      </section>
    </div>
  )
}

export default App
