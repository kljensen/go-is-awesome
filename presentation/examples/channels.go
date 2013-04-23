package main

import "fmt"

func main() {
	x := make(chan string)

	go func() {
		for {
			fmt.Println(<-x)
		}
	}()

	x <- "yo"
	x <- "duder,"
	x <- "woot!"
}
