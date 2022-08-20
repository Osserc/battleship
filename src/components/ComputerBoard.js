import { CellLogic } from './CellLogic.js'

function ComputerBoard(props) {
    return (
        <div className="board container">
            {props.gameboard.board.map((cell, index) => {
                return <div key={index} className={"single-cell flex justify-center align-center " + (CellLogic.detectMiss(props.gameboard.shots, index) ? "miss" : "") + (CellLogic.detectHit(props.gameboard.shots, index) ? "hit" : "") + (CellLogic.detectSunk(cell) ? " sunk" : "")} data-index={index} onClick={props.end === false ? props.shoot : undefined}>{String(cell)}</div>
            })}
        </div>
    )
}

export { ComputerBoard }