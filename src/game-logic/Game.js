import { createGameboard } from './Gameboard.js'
import { ComputerPlacement } from './ComputerPlacement.js'

const Game = (() => {
    let boardOne = createGameboard()
    let boardTwo = createGameboard()
    let gameState = {
                        placement: true,
                        turn: 0,
                        end: false
                    }

    function endgame() {
        if ((boardOne.allSunk() === true) || (boardTwo.allSunk() === true)) {
            return true
        }
        return false
    }

    function reset() {
        this.boardOne.reset()
        this.boardTwo.reset()
        ComputerPlacement.randomPlacement(this.boardTwo)
    }

    ComputerPlacement.randomPlacement(boardTwo)

    return {
        boardOne,
        boardTwo,
        gameState,
        endgame,
        reset
    }
})()

export { Game }