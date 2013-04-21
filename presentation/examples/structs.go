package main
import "fmt"

type Rect struct {
    H int
    W int
}

func main() {
    r := Rect{1, 2}
    fmt.Println(r.H + r.W)
}
