import './App.css'
import { useState, useEffect } from 'react'
import { PlacementBoard } from './components/PlacementBoard.js'
import { PlayerBoard } from './components/PlayerBoard.js'
import { ComputerBoard } from './components/ComputerBoard.js'
import { Game } from './game-logic/Game.js'

function App() {
  const [gameState, setGameState] = useState(Game.gameState)

  useEffect(() => {
    if (gameState.turn % 2 === 1) {
      console.log('CPU turn! Pew pew!')
      advanceTurn()
    }
  }, [gameState.turn])

  function finishPlacement() {
    setGameState({
                    ...gameState,
                    placement: !gameState.placement
                  })
  }

  function advanceTurn() {
    setGameState({
                    ...gameState,
                    turn: gameState.turn + 1
                  })
  }

  return (
    <div className="App">
      { gameState.placement === true ? 
        <div className="flex justify-center align-center gap-15">
          <PlacementBoard generatedBoard={Game.boardOne} finishPlacement={finishPlacement} />
        </div>
        :
        <div className="flex justify-center align-center gap-15">
          <PlayerBoard generatedBoard={Game.boardOne} advanceTurn={advanceTurn} />
          {gameState.turn}
          <ComputerBoard generatedBoard={Game.boardTwo} />
        </div>
      }
    </div>
  )
}

export default App
