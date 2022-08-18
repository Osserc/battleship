import { useState } from 'react'

function ComputerBoard(props) {
    const [gameboard, setGameboard] = useState(props.gameboard)

    return (
        <div className="board container">
            {gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center" onClick={props.advanceTurn}>{String(cell)}</div>
            })}
        </div>
    )
}

export { ComputerBoard }