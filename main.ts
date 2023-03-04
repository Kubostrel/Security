input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.B)) {
    	
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(3000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . # # .
        # . # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . # # # #
        # # # # #
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("-)-)-)")
    }
})
