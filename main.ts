input.onPinPressed(TouchPin.P0, function () {
    gramy = false
    falseStart = false
    win = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 3000))
    if (!(falseStart)) {
        start = input.runningTime()
        gramy = true
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("min:")
    basic.showNumber(minA)
    basic.showString("max:")
    basic.showNumber(maxA)
})
input.onPinPressed(TouchPin.P2, function () {
    if (gramy) {
        win = true
        gramy = false
        end = input.runningTime()
        basic.showString("B")
        basic.pause(1000)
        timeB = end - start
        basic.showNumber(timeB)
        if (timeB < minB) {
            minB = timeB
        }
        if (timeB > maxB) {
            maxB = timeB
        }
    } else {
        if (!(win)) {
            falseStart = true
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.showString("B")
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("min:")
    basic.showNumber(minB)
    basic.showString("max:")
    basic.showNumber(maxB)
})
input.onPinPressed(TouchPin.P1, function () {
    if (gramy) {
        win = true
        gramy = false
        end = input.runningTime()
        basic.showString("A")
        basic.pause(1000)
        timeA = end - start
        basic.showNumber(timeA)
        if (timeA < minA) {
            minA = timeA
        }
        if (timeA > maxA) {
            maxA = timeA
        }
    } else {
        if (!(win)) {
            falseStart = true
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.showString("A")
            basic.clearScreen()
        }
    }
})
let timeA = 0
let timeB = 0
let end = 0
let start = 0
let win = false
let falseStart = false
let gramy = false
let maxB = 0
let maxA = 0
let minB = 0
let minA = 0
minA = 1000000
minB = 1000000
maxA = 0
maxB = 0
