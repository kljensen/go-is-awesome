package main

import (
	"fmt"
	"math/rand"
	"time"
)

func race(name string) (done chan string) {
	done = make(chan string)
	go func() {
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(250)))
		done <- name
	}()
	return done
}

func main() {
	rand.Seed(time.Now().UTC().UnixNano())
	r1 := race("kyle")
	r2 := race("john")

	select {
	case <-r1:
		fmt.Println("Kyle wins, woot!")
	case <-r2:
		fmt.Println("John wins, lame.")
		//default:
		//	fmt.Println("Too slow.")
	}
}
