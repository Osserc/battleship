import './App.css'
import { useState, useEffect } from 'react'
import { PlacementBoard } from './components/PlacementBoard.js'
import { PlayerBoard } from './components/PlayerBoard.js'
import { ComputerBoard } from './components/ComputerBoard.js'
import { Header } from './components/Header.js'
import { Game } from './game-logic/Game.js'
import { ComputerShot } from './game-logic/ComputerShot.js'
import { GameOver } from './components/GameOver.js'
import { AudioFiles } from './components/AudioFiles.js'

function App() {
  // const [gameState, setGameState] = useState(Game.gameState)
  const [gameState, setGameState] = useState({placement: true,
                                              turn: 0,
                                              end: false
                                            })

  useEffect(() => {
    if (gameState.turn % 2 === 1) {
      ComputerShot.shoot(Game.boardOne)
      resolveTurn()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.turn])

  function finishPlacement() {
    setGameState({
                    ...gameState,
                    placement: !gameState.placement
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
    let shot = Game.boardTwo.receiveHit(+event.target.dataset.index)
    if (shot === false) {
      return
    } else {
      AudioFiles.playSunk()
      resolveTurn()
    }
  }

  function resetGame() {
    setGameState({
      placement: true,
      turn: 0,
      end: false
    })
    Game.reset()
  }

  return (
    <div className="App flex flex-c justify-center align-center gap-15">
      <Header />
      { gameState.end === true ? 
        <GameOver turn={gameState.turn} reset={resetGame} />
        :
        null
      }
      { gameState.placement === true ? 
        <div className="b-box flex justify-center align-center gap-15 m-15">
          <PlacementBoard gameboard={Game.boardOne} finishPlacement={finishPlacement} />
        </div>
        :
        <div className="TwoBoards b-box flex justify-center align-center gap-15 m-15">
          <PlayerBoard gameboard={Game.boardOne} />
          <ComputerBoard gameboard={Game.boardTwo} end={gameState.end} shoot={shoot} />
        </div>
      }
    </div>
  )
}

export default App
