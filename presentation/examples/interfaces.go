package main

import "fmt"

type Rect struct {
	H, W float64
}

func (r Rect) Area() float64 {
	return r.W * r.H
}

type Circle struct {
	R float64
}

func (c Circle) Area() float64 {
	return 3.14 * c.R * c.R
}

type Shape interface {
	Area() float64
}

func SumAreas(shapes ...Shape) float64 {
	sum := 0.0
	for _, shape := range shapes {
		sum += shape.Area()
	}
	return sum
}

func main() {
	rectangle := Rect{3.0, 6.0}
	circle := Circle{4.2}
	fmt.Println("Area =", SumAreas(rectangle, circle))
}
