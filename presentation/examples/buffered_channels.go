package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan int, 3)
	max := 10

	go func() {
		for i := 0; i < max+1; i += 1 {
			c <- i
			fmt.Println("Added", i)
		}
	}()

	for {
		i := <-c
		fmt.Println("Removed", i)
		time.Sleep(500 * time.Millisecond)
		if i == max {
			break
		}
	}
}
