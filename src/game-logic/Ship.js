function Ship(player, length, coordinates) {
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
        // if (coordinates.every((spot) => hits.includes(spot))) return true
        if (hits.length === length) return true
        return false
    }

    return {
        hit,
        hits,
        isSunk
    }

}

export { Ship }