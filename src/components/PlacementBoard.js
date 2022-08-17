import { useState, useEffect } from 'react'
import { Game } from '../game-logic/Game.js'

function PlacementBoard(props) {
    const [gameboard, setgameboard] = useState(props.generatedBoard)
    // const [turn, setTurn] = useState(0)
    const [ships, setShips] = useState([1, 2, 3])

    useEffect(() => {
        if (ships.length === 0) {
            props.finishPlacement()
            // Game.finishPlacement()
            // console.log('Hi')
            // console.log(Game.placement)
        }
    }, [ships]);

    function placeShip() {
        setShips(ships.filter((element, index) => index !== ships.length - 1))
        console.log(ships.length)
    }

    return (
        <div className="board container">
            {gameboard.board.map((cell, index) => {
                return <div key={index} className="single-cell flex justify-center align-center" onClick={placeShip}>d</div>
            })}
        </div>
    )
}

export { PlacementBoard }