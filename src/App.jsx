import './App.css'
import { basics } from './information/example-data.json'


function App() {

  return (
    <main>
      <header>
        <h1>{basics.name}</h1>
        <span>{basics.label}</span>
      </header>
      <div>
        <p>{basics.summary}</p>
      </div>
    </main>
  )
}

export default App