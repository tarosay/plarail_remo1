let 速さ = 0
radio.setGroup(5)
radio.sendValue("c", 0)
basic.forever(function () {
    速さ = input.acceleration(Dimension.Y) / 1023 * -100
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("c", 速さ)
        if (速さ > 0) {
            basic.showArrow(ArrowNames.North)
        } else if (速さ < 0) {
            basic.showArrow(ArrowNames.South)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
        }
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("a", 速さ)
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("b", 速さ)
        basic.showArrow(ArrowNames.East)
    } else {
        radio.sendValue("c", 0)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
