const ComputerPlacement = (() => {
    let ships = [5, 4, 3, 2, 2]

    function randomPlacement(board) {
        let allowed = false
        for (let i = 0; i < ships.length; i++) {
            while (allowed === false) {
                decideDirection(board)
                let spot = decideSpot()
                allowed = board.placeShip(ships[i], spot)
            }
            allowed = false
        }
    }
    
    function decideDirection(board) {
        let yes = Math.floor(Math.random() * 2)
        if (yes === 1) {
            board.changeOrientation()
        }
    }
    
    function decideSpot() {
        return Math.floor(Math.random() * 100)
    }

    return { randomPlacement }
})()

export { ComputerPlacement }