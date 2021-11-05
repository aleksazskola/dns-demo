radio.onReceivedString(function (receivedString) {
    if (receivedString == "AAB") {
        radio.setGroup(101)
        radio.sendString("A")
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "ABB") {
        radio.setGroup(101)
        radio.sendString("B")
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
    radio.setGroup(100)
    scrollbit.scrollText("DNS SERVER", 128, 50)
})
