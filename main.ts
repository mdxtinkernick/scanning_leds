let movement2 = 0
let dot_pos2 = 0
let time_to_change2 = 0
let dot_pos = 0
let movement = 1
let num_leds = 10
let time_between_changes = 10
time_between_changes = 200
let time_to_change = 0
let strip = neopixel.create(DigitalPin.P0, num_leds, NeoPixelMode.RGB)
basic.forever(function () {
    let time_between_changes2 = 0
    if (control.millis() >= time_to_change) {
        time_to_change = control.millis() + time_between_changes
        strip.setPixelColor(dot_pos, neopixel.colors(NeoPixelColors.Black))
        dot_pos += movement
        strip.setPixelColor(dot_pos, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        if (dot_pos == num_leds - 1) {
            movement = -1
        }
        if (dot_pos == 0) {
            movement = 1
        }
    }
    if (control.millis() >= time_to_change2) {
        time_to_change2 = control.millis() + time_between_changes2
        strip.setPixelColor(dot_pos2, neopixel.colors(NeoPixelColors.Black))
        dot_pos2 += movement2
        strip.setPixelColor(dot_pos2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        if (dot_pos2 == num_leds - 1) {
            movement2 = -1
        }
        if (dot_pos2 == 0) {
            movement2 = 1
        }
    }
    if (control.millis() >= time_to_change2) {
        time_to_change2 = control.millis() + time_between_changes2
        strip.setPixelColor(dot_pos2, neopixel.colors(NeoPixelColors.Black))
        dot_pos2 += movement2
        strip.setPixelColor(dot_pos2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        if (dot_pos2 == num_leds - 1) {
            movement2 = -1
        }
        if (dot_pos2 == 0) {
            movement2 = 1
        }
    }
})
