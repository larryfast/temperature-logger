datalogger.setColumnTitles(
control.deviceName(),
"1"
)
basic.showNumber(0)
datalogger.log(datalogger.createCV(control.deviceName(), control.deviceSerialNumber()))
basic.forever(function () {
    basic.pause(10000)
    datalogger.log(datalogger.createCV("1", input.temperature()))
})
