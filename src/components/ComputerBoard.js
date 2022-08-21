import { CellLogic } from './CellLogic.js'

function ComputerBoard(props) {
    return (
        <div className="board container">
            {props.gameboard.board.map((cell, index) => {
                return <div key={index} className={"single-cell flex justify-center align-center " + (CellLogic.detectMiss(props.gameboard.shots, index) ? "miss" : "") + (CellLogic.detectHit(props.gameboard.shots, index) ? "hit" : "") + (CellLogic.detectSunk(cell) ? " sunk" : "")} data-index={index} onClick={props.end === false ? props.shoot : undefined} onMouseEnter={props.end === false ? CellLogic.selectCell : undefined} onMouseLeave={props.end === false ? CellLogic.deselectCell : undefined}></div>
            })}
        </div>
    )
}

export { ComputerBoard }