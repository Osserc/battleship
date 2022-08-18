import './App.css'
import { useState, useEffect } from 'react'
import { PlacementBoard } from './components/PlacementBoard.js'
import { PlayerBoard } from './components/PlayerBoard.js'
import { ComputerBoard } from './components/ComputerBoard.js'
import { Game } from './game-logic/Game.js'
// import { createGameboard } from './game-logic/Gameboard.js'

function App() {
  const [gameState, setGameState] = useState(Game.gameState)

  useEffect(() => {
    if (gameState.turn % 2 === 1) {
      console.log('CPU turn! Pew pew! Turn = ' + gameState.turn)
      advanceTurn()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.turn])

  useEffect(() => {
    console.log(gameState.end)
  }, [gameState.end])

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

  function resolveTurn() {
    let newTurn = gameState.turn
    let newEnd = Game.endgame()
    if (newEnd === false) {
      newTurn += 1
    }
    setGameState({
      ...gameState,
      turn: newTurn,
      end: newEnd
    })
  }

  function shoot(event) {
    Game.boardTwo.receiveHit(+event.target.dataset.index)
    resolveTurn()
  }

  return (
    <div className="App">
      { gameState.placement === true ? 
        <div className="flex justify-center align-center gap-15">
          <PlacementBoard gameboard={Game.boardOne} finishPlacement={finishPlacement} />
        </div>
        :
        <div className="flex justify-center align-center gap-15">
          <PlayerBoard gameboard={Game.boardOne} />
          {gameState.turn}
          <ComputerBoard gameboard={Game.boardTwo} shoot={shoot} />
        </div>
      }
    </div>
  )
}

export default App
