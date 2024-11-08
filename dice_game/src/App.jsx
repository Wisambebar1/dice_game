import './App.css'
import Input from './Components/Input'
import Instructions from './Components/Instructions'
import Request from './Components/Request'
import Start_game from './Components/Start_game'
function App() {
  return(
    <section>
      <Instructions/>
      <Request/>
      <Input/>
      <Start_game/>
    </section>
  )
}

export default App
