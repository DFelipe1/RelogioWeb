import { Clock } from "./components/Clock"
import { Relogio } from "./components/Relogio"
import { Weather } from "./components/Weather"
import './styles/global.css'

function App() {

  return (
    <main>
      <Clock/>
      <Relogio/>
      <Weather/>
    </main>
  )
}

export default App
