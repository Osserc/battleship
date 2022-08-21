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

    function selectCell(event) {
        event.target.classList.add('selected')
    }

    function deselectCell(event) {
        event.target.classList.remove('selected')
    }

    return {
            detectShip,
            detectSunk,
            detectMiss,
            detectHit,
            selectCell,
            deselectCell
            }
})()

export { CellLogic }