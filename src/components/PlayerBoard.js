function PlayerBoard(props) {

    function detectMiss(index) {
        return props.gameboard.shots.misses.includes(index)
    }

    function detectHit(index) {
        return props.gameboard.shots.hits.includes(index)
    }

    return (
        <div className="board container">
            {props.gameboard.board.map((cell, index) => {
                return <div key={index} className={"single-cell flex justify-center align-center " + (detectMiss(index) ? "miss" : "") + (detectHit(index) ? "hit" : "")} data-index={index} >{String(cell)}</div>
            })}
        </div>
    )
}

export { PlayerBoard }