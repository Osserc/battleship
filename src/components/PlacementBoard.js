import { useState, useEffect } from 'react'

function PlacementBoard(props) {
    const [gameboard, setgameboard] = useState(props.generatedBoard)
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

    let currentShip

    useEffect(() => {
        if (ships.length === 0) {
            props.finishPlacement()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ships]);

    function placeShip() {
        setShips(ships.filter((element, index) => index !== 0))
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