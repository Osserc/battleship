import { createShip } from './Ship.js'

function createGameboard() {
    let board = new Array(100).fill(null)
    const lowerBorder = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    const rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
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
        if (validatePlacement(coordinates) === false) return false
        let newShip = createShip(length, coordinates)
        coordinates.forEach(spot => {
            gameboard.board[spot] = newShip
        })
        gameboard.ships.push(newShip)
        return true
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

    function validatePlacement(coordinates) {
        if (gameboard.vertical === true) {
            if ((lowerBound(coordinates) === true) && (detectOverlap(coordinates) === true)) return true
        } else {
            if ((outerBound(coordinates)) === true && (detectOverlap(coordinates) === true)) return true
        }
        return false
    }

    function lowerBound(coordinates) {
        let column = coordinates[0] % 10
        if (coordinates.some((spot) => spot > lowerBorder[column])) return false
        return true
    }

    function outerBound(coordinates) {
        let row = rightBorder.findIndex((spot) => spot >= coordinates[0])
        if (coordinates.some((spot) => spot > rightBorder[row]) === true) return false
        return true
    }

    function detectOverlap(coordinates) {
        let occupiedSpots = gameboard.ships.map((ship) => ship.coordinates).flat()
        if (coordinates.some((spot) => occupiedSpots.includes(spot))) return false
        return true
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
        placeShip,
        receiveHit,
        allSunk,
    }

    return gameboard
}

export { createGameboard }