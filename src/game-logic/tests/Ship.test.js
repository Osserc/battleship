import { createShip } from '../Ship'

let ship
beforeEach(() => {
    ship = createShip(5, [0, 10, 20, 30, 40])
})

describe('test hit detection', () => {
    test('shoot to hit', () => {
        expect(ship.hit(10)).toBe(true)
    })

    test('shoot to miss', () => {
        expect(ship.hit(2)).toBe(false)
    })

    // test added only to see if the logic would avoid adding the same hit twice, will probably
    // be eliminated later when shot validation is added

    test('repeated shots', () => {
        expect(ship.hit(10)).toBe(true)
        expect(ship.hit(10)).toBe(false)
    })
})

describe('test sunk status detection', () => {
    test('not sunk', () => {
        ship.hit(10)
        expect(ship.isSunk()).toBe(false)
    })

    test('sunk', () => {
        ship.hit(0)
        ship.hit(10)
        ship.hit(20)
        ship.hit(30)
        ship.hit(40)
        expect(ship.isSunk()).toBe(true)
    })
})

// added only to check whether hits array is updated or not

// describe('check hits array', () => {
//     test('successful shot', () => {
//         expect(ship.hits.includes(10)).toBe(true)
//     })
//     test('failed shot', () => {
//         expect(ship.hits.includes(2)).toBe(false)
//     })
// })