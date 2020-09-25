input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setBrightness(20)
    light.showAnimation(light.sparkleAnimation, 200)
    makerController.player1.press(ArcadeButton.A)
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setBrightness(20)
    light.showAnimation(light.rainbowAnimation, 200)
    makerController.player1.press(ArcadeButton.B)
    light.clear()
})
