import { CellLogic } from './CellLogic.js'

function PlayerBoard(props) {
    return (
        <div className="board container">
            {props.gameboard.board.map((cell, index) => {
                return <div key={index} className={(CellLogic.detectShip(cell) ? "ship " : "") + "single-cell flex justify-center align-center " + (CellLogic.detectMiss(props.gameboard.shots, index) ? "miss" : "") + (CellLogic.detectHit(props.gameboard.shots, index) ? "hit" : "") + (CellLogic.detectSunk(cell) ? " sunk" : "")} data-index={index}></div>
            })}
        </div>
    )
}

export { PlayerBoard }