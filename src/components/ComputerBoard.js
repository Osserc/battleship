import { useState } from 'react'
import { Game } from '../game-logic/Game.js'

function ComputerBoard(props) {
    const [gameboard, setgameboard] = useState(props.generatedBoard)
    const [turn, setTurn] = useState(0)

    return (
        <div className="board container">
            {gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center">d</div>
            })}
        </div>
    )
}

export { ComputerBoard }