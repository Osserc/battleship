const AudioFiles = (() => {
    const sunkSound = new Audio()

    function playHit() {

    }

    function playSunk() {
        sunkSound.play()
    }

    return {
            playHit,
            playSunk
            }
})()

export { AudioFiles }