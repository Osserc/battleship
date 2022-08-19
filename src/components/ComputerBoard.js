function ComputerBoard(props) {

    function detectMiss(index) {
        return props.gameboard.shots.misses.includes(index)
    }

    function detectHit(index) {
        return props.gameboard.shots.hits.includes(index)
    }

    return (
        <div className="board container">
            {props.gameboard.board.map((cell, index) => {
                return <div key={index} className={"single-cell flex justify-center align-center " + (detectMiss(index) ? "miss" : "") + (detectHit(index) ? "hit" : "")} data-index={index} onClick={props.end === false ? props.shoot : undefined}>{String(cell)}</div>
            })}
        </div>
    )
}

export { ComputerBoard }