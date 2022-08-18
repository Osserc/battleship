import { useState, useEffect } from 'react'
import { createGameboard } from '../game-logic/Gameboard.js'

function PlacementBoard(props) {
    // const [gameboard, setgameboard] = useState(props.generatedBoard)
    const [ships, setShips] = useState([{
                                            id: 0,
                                            length: 5
                                        },
                                        {
                                            id: 1,
                                            length: 4
                                        },
                                        {
                                            id: 2,
                                            length: 3
                                        },
                                        {
                                            id: 3,
                                            length: 2
                                        },
                                        {
                                            id: 4,
                                            length: 2
                                        }
                                        ])

    let currentShip = ships[0]

    useEffect(() => {
        if (ships.length === 0) {
            props.finishPlacement()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ships]);

    function selectSpot(event) {
        let status = props.gameboard.placeShip(currentShip.length, +event.target.dataset.id)
        if (status === true) {
            setShips(ships.filter((element, index) => index !== 0))
        }
        console.log(props.gameboard.board)
        console.log(ships.length)
    }

    return (
        <div className="flex flex-c justify-center align-center">
            <button onClick={props.gameboard.changeOrientation}>V or O</button>
            <div className="board container">
                {props.gameboard.board.map((cell, index) => {
                    return <div key={index} className="single-cell flex justify-center align-center" data-id={index} onClick={selectSpot}>{String(cell)}</div>
                })}
            </div>
        </div>
    )
}

export { PlacementBoard }