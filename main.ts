input.onLoudSound(function () {
    input.setLoudSoundThreshold(250)
    light.setBrightness(20)
    light.showAnimation(light.rainbowAnimation, 200)
    makerController.player1.press(ArcadeButton.A)
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    music.pewPew.play()
    light.setBrightness(20)
    light.showAnimation(light.rainbowAnimation, 200)
    makerController.player1.press(ArcadeButton.B)
    light.clear()
})
