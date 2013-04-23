package main

import "fmt"

type Rect struct {
	H, W int
}

func main() {
	var a int
	var b float32
	var c [5]int
	var d = make([]int, 5)
	var e = make(map[string]int)
	var f Rect
	fmt.Println(a, "\n", b, "\n", c, "\n", d, "\n", e, "\n", f)
}
