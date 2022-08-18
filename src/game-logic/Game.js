import { createGameboard } from './Gameboard.js'
import { ComputerPlacement } from './ComputerPlacement.js'

const Game = (() => {
    let boardOne = createGameboard()
    let boardTwo = createGameboard()
    let gameState = {
                        placement: true,
                        turn: 0
                    }

    ComputerPlacement.randomPlacement(boardTwo)

    return {
        boardOne,
        boardTwo,
        gameState,
    }
})()

export { Game }