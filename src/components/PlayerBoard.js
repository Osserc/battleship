import { useState } from 'react'
import { Game } from '../game-logic/Game.js'

function PlayerBoard(props) {
    const [gameboard, setgameboard] = useState(props.gameboard)

    return (
        <div className="board container">
            {gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center">{String(cell)}</div>
            })}
        </div>
    )
}

export { PlayerBoard }