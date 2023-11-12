let gramy = false
let falseStart = false
let win = false
let start = 0
let end = 0
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
input.onPinPressed(TouchPin.P2, function () {
    if (gramy) {
        win = true
        gramy = false
        end = input.runningTime()
        basic.showString("B")
        basic.pause(1000)
        basic.showNumber(end - start)
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
input.onPinPressed(TouchPin.P1, function () {
    if (gramy) {
        win = true
        gramy = false
        end = input.runningTime()
        basic.showString("A")
        basic.pause(1000)
        basic.showNumber(end - start)
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
