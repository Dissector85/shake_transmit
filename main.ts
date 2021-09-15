radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        radio.sendString("on")
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
