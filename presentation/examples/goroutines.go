package main

import (
	"fmt"
	"math/rand"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(250)))
		fmt.Println(s, i)
	}
}

func main() {
	rand.Seed(time.Now().UTC().UnixNano())
	go say("foo")
	go say("woot")
	go say("bar")
	time.Sleep(5 * time.Second)
}
