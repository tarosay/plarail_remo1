let Group = 0
if (input.buttonIsPressed(Button.A)) {
    Group = 3
} else if (input.buttonIsPressed(Button.B)) {
    Group = 4
} else {
	
}
radio.sendValue("c", 0)
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.Z))
})
