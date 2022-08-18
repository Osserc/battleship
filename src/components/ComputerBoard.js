import { useState, useEffect } from 'react'

function ComputerBoard(props) {
    return (
        <div className="board container">
            {props.gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center" onClick={props.advanceTurn}>{String(cell)}</div>
            })}
        </div>
    )
}

export { ComputerBoard }