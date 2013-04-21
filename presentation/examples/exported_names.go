package main

import (
    "fmt"
    "math"
)

func main() {
	// Won't compile, "pi" is lowercase/private
    fmt.Println("Happy", math.pi, "Day")
}
