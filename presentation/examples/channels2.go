package main

import (
	"fmt"
	"math/rand"
	"time"
)

func say(s string, done chan string) {
	for i := 0; i < 5; i++ {
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(250)))
		fmt.Println(s, i)
	}
	done <- s
}

func main() {
	rand.Seed(time.Now().UTC().UnixNano())
	done := make(chan string)
	go say("foo", done)
	go say("woot", done)
	go say("bar", done)
	fmt.Println(<-done, "finished first!")
}
