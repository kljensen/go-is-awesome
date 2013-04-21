package main

import "fmt"

func sumdiff(x int, y int) (int, int) {
    var xysum, xydiff int
	xysum  = x + y
	xydiff = x - y
	return xysum, xydiff
}

func main() {
    a, b := sumdiff(42, 10)
    fmt.Println(a)
    fmt.Println(b)
}