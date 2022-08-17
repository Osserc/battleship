import { createGameboard } from './Gameboard.js'
import { useState } from 'react'

const Game = (() => {
    let boardOne = createGameboard()
    let boardTwo = createGameboard()
    let gameState = {
                        placement: true,
                        turn: 0
                    }

    return {
        boardOne,
        boardTwo,
        gameState,
    }
})()

export { Game }