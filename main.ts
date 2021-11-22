input.onButtonPressed(Button.A, function () {
    message = 3
    radio.sendValue(convertToText(ID), message)
})
input.onButtonPressed(Button.B, function () {
    message = 10
    radio.sendValue(convertToText(ID), message)
})
radio.onReceivedValue(function (name, value) {
    if (value == 3) {
        basic.showString("" + name + "-1400")
    } else if (value == 10) {
        basic.showString("" + name + "-1415")
    }
})
let message = 0
let ID = 0
radio.setGroup(40)
ID = 3
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
