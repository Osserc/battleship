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