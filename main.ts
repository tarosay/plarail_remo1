let 速さ = 0
if (input.buttonIsPressed(Button.A)) {
    radio.setGroup(3)
    basic.showNumber(3)
} else if (input.buttonIsPressed(Button.B)) {
    radio.setGroup(4)
    basic.showNumber(4)
} else {
    radio.setGroup(4)
    basic.showNumber(4)
}
radio.sendNumber(0)
let 回 = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 2000) {
        回 = 回 + 1
    } else {
        回 = 回 * 0.93
    }
    if (回 > 10) {
        回 = 10
    } else if (回 <= 0) {
        回 = 0
    } else {
    	
    }
    速さ = Math.trunc(回 / 10 * 100)
    radio.sendNumber(速さ)
})
