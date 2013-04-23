package main

import (
	"fmt"
	"math/rand"
	"time"
)

type TwitterUser struct{
	Name string
	Stream chan string
	Followers []chan (chan string)
}
func (t *TwitterUser) New(name string) (){
	t
}
func (t *TwitterUser) Follow(f *TwitterUser) {
	f.Followers.
}
func (t *TwitterUser) Listen() {
	for msg := <-t.Stream {
		fmt.Println(t.Name, "got msg", msg)		
	}
}
func (t *TwitterUser) Tweet() {
	
}

func racer(name string) chan string {
	done := make(chan string)
	time.Sleep(time.Millisecond * time.Duration(rand.Intn(250)))
	done <- name
}

func main() {
	kyle := racer("kyle")
	steven := racer("steven")
	select {
	case <-kyle:
		fmt.Println("Kyle wins, woot!")
	case <-steven:
		fmt.Println("Steven wins, lame.")
	}
}