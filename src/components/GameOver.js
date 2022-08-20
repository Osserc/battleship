function GameOver(props) {
    return (
        <div className="GameOver flex flex-c justify-center align-center text-center gap-15 p-15">
            <div>
                {props.turn % 2 === 0 ?
                "You won, commander!"
                :
                "We suffered defeat, commander..."}
            </div>
            <div>
                <button onClick={props.reset}>Play again</button>
            </div>
        </div>
    )
}

export { GameOver }