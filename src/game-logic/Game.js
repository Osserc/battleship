import { createGameboard } from './Gameboard.js'
import { ComputerPlacement } from './ComputerPlacement.js'
import { useState } from 'react'

const Game = (() => {
    let boardOne = createGameboard()
    let boardTwo = createGameboard()
    let gameState = {
                        placement: true,
                        turn: 0
                    }

    ComputerPlacement.randomPlacement(boardTwo)
    // let ships = [5, 4, 3, 2, 2]

    // function randomPlacement() {
    //     console.log('hi')
    //     let allowed = false
    //     for (let i = 0; i < ships.length; i++) {
    //         while (allowed === false) {
    //             decideDirection()
    //             let spot = decideSpot()
    //             allowed = boardTwo.placeShip(ships[i], spot)
    //         }
    //         allowed = false
    //     }
    // }
    
    // function decideDirection() {
    //     let yes = Math.floor(Math.random() * 2)
    //     if (yes === 1) {
    //         boardTwo.changeOrientation()
    //     }
    // }
    
    // function decideSpot() {
    //     return Math.floor(Math.random() * 100)
    // }

    // randomPlacement()

    return {
        boardOne,
        boardTwo,
        gameState,
    }
})()

export { Game }