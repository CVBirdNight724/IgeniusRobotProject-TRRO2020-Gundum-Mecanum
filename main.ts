function control2 (speed1: number, speed2: number, speed3: number, speed4: number) {
    M1M2(speed1, speed2)
    M3(speed3)
    M4(speed4)
}
function testMotor () {
    control2(100, 0, 0, 0)
    basic.pause(500)
    control2(-100, 0, 0, 0)
    basic.pause(500)
    control2(0, 100, 0, 0)
    basic.pause(500)
    control2(0, -100, 0, 0)
    basic.pause(500)
    control2(0, 0, 100, 0)
    basic.pause(500)
    control2(0, 0, -100, 0)
    basic.pause(500)
    control2(0, 0, 0, 100)
    basic.pause(500)
    control2(0, 0, 0, -100)
    basic.pause(500)
}
function M3 (Speed3: number) {
    if (Speed3 >= 100) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (Speed3 < 100 && Speed3 > 0) {
        pins.analogWritePin(AnalogPin.P13, Math.map(Speed3, 0, 100, 0, 1023))
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (Speed3 < 0 && Speed3 > -100) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, Math.map(Math.abs(Speed3), 0, 100, 0, 1023))
    } else if (Speed3 <= -100) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == User) {
        X = (value - value % 100) / 100
        Y = (value % 100 - value % 100 % 10) / 10
        button = value % 10
    }
})
function Drive () {
    if (button == 1) {
    	
    } else if (button == 2) {
        control2(max_Speed, max_Speed, -1 * max_Speed, -1 * max_Speed)
    } else if (button == 3) {
    	
    } else if (button == 4) {
        control2(-1 * max_Speed, -1 * max_Speed, max_Speed, max_Speed)
    } else if (button == 5) {
        State = 0
    } else if (button == 6) {
        State = 1
    }
    if (State == 0) {
    	
    } else if (State == 1) {
    	
    }
    if (X == 2 && Y == 2 && button == 0) {
        control2(0, 0, 0, 0)
    } else if (X == 2 && Y == 4) {
        control2(max_Speed, max_Speed, max_Speed, max_Speed)
    } else if (X == 2 && Y == 3) {
        control2(base_Speed, base_Speed, base_Speed, base_Speed)
    } else if (X == 3 && Y == 3) {
        control2(max_Speed, 0, 0, max_Speed)
    } else if (X == 4 && Y == 2) {
        control2(max_Speed, -1 * max_Speed, -1 * max_Speed, max_Speed)
    } else if (X == 3 && Y == 2) {
        control2(base_Speed, -1 * base_Speed, -1 * base_Speed, base_Speed)
    } else if (X == 3 && Y == 1) {
        control2(0, -1 * max_Speed, -1 * max_Speed, 1)
    } else if (X == 2 && Y == 0) {
        control2(-1 * max_Speed, -1 * max_Speed, -1 * max_Speed, -1 * max_Speed)
    } else if (X == 1 && Y == 1) {
        control2(-1 * max_Speed, 0, 1, -1 * max_Speed)
    } else if (X == 0 && Y == 2) {
        control2(-1 * max_Speed, max_Speed, max_Speed, -1 * max_Speed)
    } else if (X == 1 && Y == 2) {
        control2(-1 * base_Speed, base_Speed, base_Speed, -1 * base_Speed)
    } else if (X == 1 && Y == 3) {
        control2(0, max_Speed, max_Speed, 1)
    }
}
function M1M2 (Speed1: number, Speed2: number) {
    if (Speed1 >= 100 && Speed2 >= 100) {
        motorbit.freestyle(100, 100)
    } else if (Speed1 >= 100 && (Speed2 < 100 && Speed2 > 0)) {
        motorbit.freestyle(100, Speed2)
    } else if (Speed1 < 100 && Speed1 > 0 && Speed2 >= 100) {
        motorbit.freestyle(Speed1, 100)
    } else if (Speed1 < 100 && Speed1 > 0 && (Speed2 < 100 && Speed2 > 0)) {
        motorbit.freestyle(Speed1, Speed2)
    } else if (Speed1 < 0 && Speed1 > -100 && (Speed2 < 0 && Speed2 > -100)) {
        motorbit.freestyle(Speed1, Speed2)
    } else if (Speed1 < 0 && Speed1 > -100 && Speed2 <= -100) {
        motorbit.freestyle(Speed1, -100)
    } else if (Speed1 <= -100 && (Speed2 < 0 && Speed2 > -100)) {
        motorbit.freestyle(-100, Speed2)
    } else if (Speed1 <= -100 && Speed2 <= -100) {
        motorbit.freestyle(-100, -100)
    } else if (Speed1 == 0) {
        motorbit.freestyle(0, Speed2)
    } else if (Speed2 == 0) {
        motorbit.freestyle(Speed1, 0)
    } else if (Speed1 >= 100 && Speed2 <= -100) {
        motorbit.freestyle(100, -100)
    } else if (Speed1 <= -100 && Speed2 >= 100) {
        motorbit.freestyle(-100, 100)
    } else {
    	
    }
}
function M4 (Speed4: number) {
    if (Speed4 >= 100) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (Speed4 < 100 && Speed4 > 0) {
        pins.analogWritePin(AnalogPin.P15, Math.map(Speed4, 0, 100, 0, 1023))
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (Speed4 < 0 && Speed4 > -100) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, Math.map(Math.abs(Speed4), 0, 100, 0, 1023))
    } else if (Speed4 <= -100) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
}
let User = ""
let State = 0
let max_Speed = 0
let base_Speed = 0
let button = 0
let Y = 0
let X = 0
radio.setGroup(191)
radio.setTransmitPower(7)
X = 0
Y = 0
button = 0
let error = 10
base_Speed = 100
max_Speed = 100
State = 0
User = "Ro-Bird"
basic.forever(function () {
    Drive()
})
