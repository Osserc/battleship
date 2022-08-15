import { Ship } from '../Ship'

let ship
beforeAll(() => {
    ship = Ship('Pippo', 5, [0, 10, 20, 30, 40])
})

describe('test hit detection', () => {
    test('shoot to hit', () => {
        expect(ship.hit(10)).toBe(true)
    })
    test('shoot to miss', () => {
        expect(ship.hit(2)).toBe(false)
    })
})