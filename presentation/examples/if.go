package main

import "fmt"

func main() {
    boredByNow := true
    if boredByNow == true {
    	fmt.Println("Bored bro")
	}

	height := 1.8
	weight := 100.0
	if bmi := weight / (height * height); bmi > 32{
		fmt.Println("Getting big dude")
	}else{
		fmt.Println("Have another donut")	
	}
}
