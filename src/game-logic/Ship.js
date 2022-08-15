function Ship(player, length, coordinates) {
    let hits = []

    function hit(shot) {
        if (coordinates.includes(shot)) {
            hits.push(shot)
            return true
        } else {
            return false
        }
    }

    return {
        hit,
    }

}

export { Ship }