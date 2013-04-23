package main

import "fmt"

func main() {
	letters := []string{"Aa", "Bb", "Cc", "Dd", "Ee"}
	for i, v := range letters {
		fmt.Printf("%d = %s\n", i, v)
	}
}
