import './App.css'
import { Board } from './components/Board.js'
import { Game } from './game-logic/Game.js'

function App() {
  return (
    <div className="App">
      <div className="flex justify-center align-center gap-15">
        <Board generatedBoard={Game.boardOne} />
        <Board generatedBoard={Game.boardTwo} />
      </div>
    </div>
  )
}

export default App
