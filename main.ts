let gramy = false
basic.forever(function () {
    gramy = false
    basic.pause(randint(1000, 5000))
    gramy = true
    basic.showIcon(IconNames.Yes)
    while (gramy) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            gramy = false
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            gramy = false
        }
    }
    basic.pause(2000)
    basic.clearScreen()
})
