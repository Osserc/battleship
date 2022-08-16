import { createShip } from './Ship.js'

function createGameboard() {
    let board = new Array(100)
    let vertical = true
    let ships = []
    let shots = {
                    hits: [],
                    misses: []
                }
    
    function changeOrientation() {
        gameboard.vertical = !gameboard.vertical
    }

    function placeShip(length, spot) {
        let coordinates = calculateCoordinates(length, spot)
        let newShip = createShip(length, coordinates)
        coordinates.forEach(spot => {
            gameboard.board[spot] = newShip
        })
        gameboard.ships.push(newShip)
    }

    function calculateCoordinates(length, spot) {
        let coordinates = [spot]
        let direction

        if (gameboard.vertical === true ) {
            direction = 10
        } else {
            direction = 1
        }

        for (let i = 1; i < length; i++) {
            coordinates.push(coordinates[coordinates.length - 1] + direction)
        }

        return coordinates
    }

    const gameboard = {
        board,
        vertical,
        ships,
        shots,
        changeOrientation,
        // calculateCoordinates,
        placeShip
    }

    return gameboard
}

export { createGameboard }