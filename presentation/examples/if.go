package main

import "fmt"

func main() {
	boredByNow := true
	if boredByNow == true {
		fmt.Println("Bored sister")
	}

	height := 1.8
	weight := 100.0
	if bmi := weight / (height * height); bmi > 32 {
		fmt.Println("Yale rubgy, here I come!")
	} else {
		fmt.Println("Moar kettlebell swings...")
	}
}
