//basic.forever(function() {
//    if (input.buttonIsPressed(Button.A)) {
//        music.playTone(440, 100)
//    }
//    if (input.buttonIsPressed(Button.A)) {
//        while (input.buttonIsPressed(Button.A)) {
//            break
//        }
//    }
//})

let x = input.buttonIsPressed(Button.A)

basic.forever(function() {
    if (x) {
        do {
            music.playTone(440, 100)
            x = false
        } while (x)
    }
})