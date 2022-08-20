const CellLogic = (() => {
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
            detectSunk,
            detectMiss,
            detectHit
            }
})()

export { CellLogic }