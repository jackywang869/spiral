turtle.setPosition(0, 0)
turtle.turnRight()
turtle.pen(TurtlePenMode.Down)
basic.forever(function () {
    let index = 0
    turtle.setBrightness(128)
    turtle.forward(4 - index)
    turtle.turnRight()
    for (let index = 0; index <= 4; index++) {
        turtle.forward(4 - index)
        turtle.turnRight()
        turtle.forward(4 - index)
        turtle.turnRight()
    }
    turtle.setBrightness(0)
    for (let index = 0; index <= 4; index++) {
        turtle.turnLeft()
        turtle.back(index)
        turtle.turnLeft()
        turtle.back(index)
    }
    turtle.turnLeft()
    turtle.back(4)
})
