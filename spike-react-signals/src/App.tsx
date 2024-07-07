import './App.css'
import { Events } from './Events'
import { Left } from './Left'
import { Right } from './Right'
import { Top } from './Top'

function App() {
  
  return (
    <>
    <div>
      <Top />
    </div>
    <br />

    <div style={{ display: "flex", gap: "20px" }}>
      <Left />
      <Right />
    </div>
    <br />
    <div>
      <Events />
    </div>
    </>
  )
}

export default App
