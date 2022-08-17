import './App.css'
import { useState, useEffect } from 'react'
import { PlacementBoard } from './components/PlacementBoard.js'
import { PlayerBoard } from './components/PlayerBoard.js'
import { ComputerBoard } from './components/ComputerBoard.js'
import { Game } from './game-logic/Game.js'

function App() {
  const [game, setGame] = useState(Game.placement)
  useEffect(() => {
    console.log(game)
  }, [game])

  function finishPlacement() {
    setGame(!game)
  }

  return (
    <div className="App">
      { game === true ? 
        <div className="flex justify-center align-center gap-15">
          <PlacementBoard generatedBoard={Game.boardOne} p={finishPlacement} />
        </div>
        :
        <div className="flex justify-center align-center gap-15">
          <PlayerBoard generatedBoard={Game.boardOne} />
          <ComputerBoard generatedBoard={Game.boardTwo} />
        </div>
      }
    </div>
  )
}

export default App
