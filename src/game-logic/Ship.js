function createShip(length, coordinates) {
    let hits = []

    function hit(shot) {
        if (coordinates.includes(shot) && (!hits.includes(shot))) {
            hits.push(shot)
            return true
        } else {
            return false
        }
    }

    function isSunk() {
        // deprecated logic
        // if (coordinates.every((spot) => hits.includes(spot))) return true
        if (hits.length === length) return true
        return false
    }

    return {
        coordinates,
        hit,
        isSunk
    }

}

export { createShip }