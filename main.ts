let 速さ = 0
let 回 = 0
if (input.buttonIsPressed(Button.A)) {
    radio.setGroup(3)
} else if (input.buttonIsPressed(Button.B)) {
    radio.setGroup(4)
} else {
    radio.setGroup(5)
}
radio.sendNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 2000) {
        回 = 回 + 1
    } else {
        回 = 回 * 0.99
    }
    if (回 > 36) {
        回 = 36
    }
    速さ = Math.trunc(回 / 36 * 100)
    radio.sendNumber(速さ)
    if (回 > 18) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
