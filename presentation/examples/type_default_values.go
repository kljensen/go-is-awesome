package main
import "fmt"

type Rect struct {
    H, W int
}

func main() {
	var a int
	var b float
	var c [5]int
	var d = make([]int, 5)
	var e make(map[string]int)
	var f Rect
	fmt.Println(a, b, c, d, e, f)
}
