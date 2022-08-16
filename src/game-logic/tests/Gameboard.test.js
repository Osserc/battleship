import { createGameboard } from '../Gameboard'
import { createShip } from '../Ship'

let gameboard

describe('test ship placement', () => {
    beforeEach(() => {
        gameboard = createGameboard()
    })
    
    test('make sure board exists', () => {
        expect(gameboard.board).toHaveLength(100)
    })

    test('change ship placement orientation', () => {
        gameboard.changeOrientation()
        expect(gameboard.vertical).toBe(false)
    })

    // test('calculate coordinates', () => {
    //     expect(gameboard.calculateCoordinates(3, 0)).toEqual([0, 10, 20])
    //     expect(gameboard.calculateCoordinates(2, 34)).toEqual([34, 44])
    //     expect(gameboard.calculateCoordinates(5, 48)).toEqual([48, 58, 68, 78, 88])
    //     expect(gameboard.calculateCoordinates(3, 79)).toEqual([79, 89, 99])
    // })

    // test('calculate swapped coordinates', () => {
    //     gameboard.changeOrientation()
    //     expect(gameboard.calculateCoordinates(3, 0)).toEqual([0, 1, 2])
    //     expect(gameboard.calculateCoordinates(2, 34)).toEqual([34, 35])
    //     expect(gameboard.calculateCoordinates(5, 41)).toEqual([41, 42, 43, 44, 45])
    //     expect(gameboard.calculateCoordinates(3, 76)).toEqual([76, 77, 78])
    // })

    test('place small ship', () => {
        gameboard.placeShip(2, 4)
        expect(gameboard.board[4]).toHaveProperty('coordinates', [4, 14])
        expect(gameboard.board[14]).toHaveProperty('coordinates', [4, 14])
    })

    test('place mid ship horizontally', () => {
        gameboard.changeOrientation()
        gameboard.placeShip(3, 54)
        expect(gameboard.board[54]).toHaveProperty('coordinates', [54, 55, 56])
        expect(gameboard.board[55]).toHaveProperty('coordinates', [54, 55, 56])
        expect(gameboard.board[56]).toHaveProperty('coordinates', [54, 55, 56])
    })

    test('check number of ships on board', () => {
        gameboard.placeShip(2, 4)
        gameboard.placeShip(3, 54)
        expect(gameboard.ships).toHaveLength(2)
    })
})

describe('inspect board state', () => {
    beforeEach(() => {
        gameboard = createGameboard()
    })

    test('check number of ships on board', () => {
        gameboard.placeShip(2, 4)
        gameboard.placeShip(3, 54)
        expect(gameboard.ships).toHaveLength(2)
    })

    test('all ships are sunk', () => {
        gameboard.ships = [createShip(3, [4, 14, 24]), createShip(2, [35, 36]), createShip(5, [93, 94, 95, 96, 97])]
        gameboard.ships[0].hit(4)
        gameboard.ships[0].hit(24)
        gameboard.ships[0].hit(14)
        gameboard.ships[1].hit(35)
        gameboard.ships[1].hit(36)
        gameboard.ships[2].hit(97)
        gameboard.ships[2].hit(94)
        gameboard.ships[2].hit(95)
        gameboard.ships[2].hit(93)
        gameboard.ships[2].hit(96)
        expect(gameboard.allSunk()).toBe(true)
    })

    test('not all ships are sunk', () => {
        gameboard.ships = [createShip(3, [4, 14, 24]), createShip(2, [35, 36]), createShip(5, [93, 94, 95, 96, 97])]
        gameboard.ships[0].hit(4)
        gameboard.ships[0].hit(24)
        gameboard.ships[0].hit(14)
        gameboard.ships[1].hit(35)
        gameboard.ships[1].hit(36)
        gameboard.ships[2].hit(97)
        gameboard.ships[2].hit(96)
        expect(gameboard.allSunk()).toBe(false)
    })
})

describe('test hit functionality', () => {
    beforeEach(() => {
        gameboard = createGameboard()
        gameboard.placeShip(3, 4)
        gameboard.changeOrientation()
        gameboard.placeShip(2, 35)
        gameboard.placeShip(5, 93)
    })

    test('record missed hit', () => {
        gameboard.receiveHit(65)
        expect(gameboard.shots.misses).toContain(65)
    })

    test('record successful hit', () => {
        gameboard.receiveHit(4)
        console.log(gameboard.board[4])
        expect(gameboard.shots.hits).toContain(4)
    })

    test('deny already hit spot', () => {
        gameboard.receiveHit(65)
        expect(gameboard.receiveHit(65)).toBe(false)
    })
})