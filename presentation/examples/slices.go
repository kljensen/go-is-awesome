package main

import "fmt"

func main() {

	// Array, fixed size
	dayArray := [7]int{1, 2, 3, 4, 5, 6, 7}
	fmt.Println(dayArray)

	// Slice, flexible size
	daySlice := make([]int, 7)
	for i, day := range dayArray {
		daySlice[i] = day
	}
	// daySlice := []int{1, 2, 3, 4, 5, 6, 7} // <- Alternative
	daySlice = append(daySlice, 121, 122, 123, 124)
	fmt.Println(daySlice)
}
