import { createShip } from './Ship.js'

function createGameboard() {
    let board = new Array(100).fill(null)
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

    function receiveHit(spot) {
        if ((gameboard.shots.hits.includes(spot)) || (gameboard.shots.misses.includes(spot))) return false
        if (gameboard.board[spot] !== null) {
            gameboard.shots.hits.push(spot)
            gameboard.board[spot].hit(spot)
        } else {
            gameboard.shots.misses.push(spot)
        }
    }

    function allSunk() {
        if (gameboard.ships.every((ship) => ship.isSunk())) return true
        return false
    }

    const gameboard = {
        board,
        vertical,
        ships,
        shots,
        changeOrientation,
        // calculateCoordinates,
        placeShip,
        receiveHit,
        allSunk
    }

    return gameboard
}

export { createGameboard }