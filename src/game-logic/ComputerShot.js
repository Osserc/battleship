const ComputerShot = (() => {
    function shoot(board) {
        let allowed = false
        while (allowed === false) {
            allowed = board.receiveHit(decideShot())
        }
    }

    function decideShot() {
        return Math.floor(Math.random() * 100)
    }

    return { shoot }
})()

export { ComputerShot }