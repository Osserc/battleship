import { useState } from 'react'
import { Game } from '../game-logic/Game.js'

function PlayerBoard(props) {
    const [gameboard, setgameboard] = useState(props.generatedBoard)

    return (
        <div className="board container">
            {gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center" onClick={props.advanceTurn}>d</div>
            })}
        </div>
    )
}

export { PlayerBoard }