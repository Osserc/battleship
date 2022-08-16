import { useState } from "react"

function Board(props) {
    const [gameboard, setgameboard] = useState(props.generatedBoard)

    return (
        <div className="board container">
            {gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center">d</div>
            })}
        </div>
    )
}

export { Board }