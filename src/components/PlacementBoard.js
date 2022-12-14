import { useState, useEffect } from 'react'
import { ShipIcon } from './ShipIcon.js'
import { CellLogic } from './CellLogic.js'

function PlacementBoard(props) {
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

    useEffect(() => {
        if (ships.length === 0) {
            props.finishPlacement()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ships]);

    let currentShip = ships[0]

    function selectSpot(event) {
        let status = props.gameboard.placeShip(currentShip.length, +event.target.dataset.id)
        if (status === true) {
            setShips(ships.filter((element, index) => index !== 0))
            decolorCells(event)
        }
    }

    function colorCells(event) {
        let orientation = determineOrientation()
        let cellsIndexes = collectIndexes(+event.target.dataset.id, orientation)
        let actualCells = collectCells(event.target, cellsIndexes)
        addClass(actualCells)
    }

    function decolorCells(event) {
        let orientation = determineOrientation()
        let cellsIndexes = collectIndexes(+event.target.dataset.id, orientation)
        let actualCells = collectCells(event.target, cellsIndexes)
        removeClass(actualCells)
    }

    function determineOrientation() {
        if (props.gameboard.vertical === true) {
            return 10
        } else {
            return 1
        }
    }

    function collectIndexes(id, orientation) {
        let cellsIndexes = [id]
        for (let i = 1; i < currentShip.length; i++) {
            cellsIndexes.push(cellsIndexes[cellsIndexes.length - 1] + orientation)
        }
        cellsIndexes = pruneCells(cellsIndexes, orientation)
        return cellsIndexes
    }

    function collectCells(cell, indexes) {
        let actualCells = [cell]
        indexes.forEach((id) => {
            actualCells.push(document.querySelectorAll(`[data-id="${id}"]`)[0])
        })
        return actualCells
    }

    function addClass(cells) {
        cells.forEach((cell) => {
            cell.classList.add('selected')
        })
    }

    function removeClass(cells) {
        cells.forEach((cell) => {
            cell.classList.remove('selected')
        })
    }

    function pruneCells(cells, orientation) {
        let border = 100
        if (orientation === 1) {
            border = Math.ceil(cells[0] / 10) * 10
            if (cells[0].toString().slice(-1) === "0") {
                border += 10
            }
        }
        let prunedCells = cells.filter((cell) => cell < border)
        return prunedCells
    }

    return (
        <div className="PBoard flex justify-center align-center gap-15">
            <div className="Placement flex flex-c justify-center align-center gap-15 p-15">
                <button onClick={props.gameboard.changeOrientation}>Rotate ship</button>
                <div className="flex flex-c justify-start gap-15">
                    {ships.map((ship) => {
                        return <ShipIcon key={ship.id} length={ship.length} />
                    })}
                </div>
            </div>
            <div className="board container">
                {props.gameboard.board.map((cell, index) => {
                    return <div key={index} className={(CellLogic.detectShip(cell) ? "ship " : "") + "single-cell flex justify-center align-center"} data-id={index} onClick={selectSpot} onMouseEnter={colorCells} onMouseLeave={decolorCells}></div>
                })}
            </div>
        </div>
    )
}

export { PlacementBoard }