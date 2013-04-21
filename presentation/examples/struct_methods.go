package main
import "fmt"

type Rect struct {
    H, W int
}

func (r *Rect) Area() int {
    return r.W * r.H
}

func main() {
    rect := Rect{3, 6}
    fmt.Println(rect.Area())
}