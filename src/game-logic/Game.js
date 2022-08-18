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
            console.log('Game over')
            return true
        }
        return false
    }

    ComputerPlacement.randomPlacement(boardTwo)

    return {
        boardOne,
        boardTwo,
        gameState,
        endgame
    }
})()

export { Game }