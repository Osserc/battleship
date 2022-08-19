function GameOver(props) {
    return (
        <div>
            <div>
                {props.turn % 2 === 0 ?
                "You won!"
                :
                "The computer won..."}
            </div>
            <div>
                <button onClick={props.reset}>Play again</button>
            </div>
        </div>
    )
}

export { GameOver }