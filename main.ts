let temperature = 0
datalogger.setColumnTitles(
control.deviceName(),
"1"
)
radio.setGroup(0)
datalogger.log(datalogger.createCV(control.deviceName(), control.deviceSerialNumber()))
basic.forever(function () {
    basic.pause(5000)
    temperature = input.temperature()
    basic.showNumber(temperature)
    datalogger.log(datalogger.createCV("1", temperature))
    radio.sendNumber(temperature)
})
