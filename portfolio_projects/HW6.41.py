'''
Sabrina Slattery
Instructor: Takyiu Liu
HW 6.41
Turtle:draw points, rectangles, and circles
'''

import turtle
import random
import UsefulTurtleFunctions

width = 100
height = 100
UsefulTurtleFunctions.drawRectangle(-75,0,width,height)

for z in range(10):
    x = random.randint(-122,-22)
    y = random.randint(-47,47)
    UsefulTurtleFunctions.drawPoint(x, y)

radius = 50
UsefulTurtleFunctions.drawCircle(50, 0, radius)

for i in range(10):
    x1 = random.randint(-50, 50)
    y1 = random.randint(-50, 50)
    while (x1*x1+y1*y1 > 2500):
        x1 = random.randint(-50, 50)
        y1 = random.randint(-50, 50)
    UsefulTurtleFunctions.drawPoint(50 + x1, y1)

#area of a circle pi*(r**2)
#perimeter of a circle 2*pi*r
turtle.hideturtle()

turtle.done()
