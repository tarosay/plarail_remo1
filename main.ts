let 速さ = 0
let 回 = 0
let Group = 0
if (input.buttonIsPressed(Button.A)) {
    Group = 3
} else if (input.buttonIsPressed(Button.B)) {
    Group = 4
} else {
    Group = 4
}
radio.sendNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 2000) {
        回 = 回 + 1
    } else {
        回 = 回 * 0.99
    }
    速さ = 回 / 35
    if (速さ > 1) {
        速さ = 100
    } else {
        速さ = 回 * 100
    }
    radio.sendNumber(0)
    if (回 > 30) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.clearScreen()
    }
})
