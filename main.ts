input.onLoudSound(function () {
    input.setLoudSoundThreshold(250)
    light.setBrightness(20)
    light.showAnimation(light.rainbowAnimation, 200)
    light.clear()
    makerController.player1.press(ArcadeButton.A)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setBrightness(20)
    light.showAnimation(light.rainbowAnimation, 200)
    makerController.player1.press(ArcadeButton.B)
    light.clear()
})
