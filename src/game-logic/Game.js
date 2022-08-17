import { createGameboard } from './Gameboard.js'
import { useState } from 'react'

const Game = (() => {
    let boardOne = createGameboard()
    let boardTwo = createGameboard()
    let placement = true

    function finishPlacement() {
        this.placement = !this.placement
    }

    return {
        boardOne,
        boardTwo,
        placement,
        finishPlacement
    }
})()

export { Game }