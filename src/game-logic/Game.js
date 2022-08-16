import { createGameboard } from "./Gameboard.js"

const Game = (() => {
    let boardOne = createGameboard()
    let boardTwo = createGameboard()

    return {
        boardOne,
        boardTwo
    }
})()

export { Game }