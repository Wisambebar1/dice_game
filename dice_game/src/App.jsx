import './App.css'
import Input from './Components/Input'
import Instructions from './Components/Instructions'
import Request from './Components/Request'
import Start_game from './Components/Start_game'
function App() {
  return(
    <div>
      <section id="section-1">
        <Instructions/>
        <Start_game/>
      </section>
      <section id="section-2">
        <Request/>
        <Input/>
      </section>
    </div>
  )
}

export default App
