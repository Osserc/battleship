const CellLogic = (() => {
    function detectShip(cell) {
        if (cell != null) return true
    }

    function detectSunk(cell) {
        if (cell != null) return cell.isSunk()
    }

    function detectMiss(shots, index) {
        return shots.misses.includes(index)
    }

    function detectHit(shots, index) {
        return shots.hits.includes(index)
    }

    return {
            detectShip,
            detectSunk,
            detectMiss,
            detectHit
            }
})()

export { CellLogic }