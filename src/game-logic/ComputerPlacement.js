const ComputerPlacement = (() => {
    let ships = [5, 4, 3, 2, 2]

    function randomPlacement(board) {
        console.log('hi')
        let allowed = false
        for (let i = 0; i < ships.length; i++) {
            while (allowed === false) {
                decideDirection()
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