package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(500 * time.Millisecond)
		fmt.Println(s, i)
	}
}

func main() {
	go say("foo")
	go say("bar")
	time.Sleep(5 * time.Second)
}
