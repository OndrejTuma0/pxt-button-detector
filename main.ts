let buttonPressed = input.buttonIsPressed(Button.A)

basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !buttonPressed) {
        music.playTone(440, 100)

        buttonPressed = true
    }
    if (!input.buttonIsPressed(Button.A)) {
        buttonPressed = false
    }
})