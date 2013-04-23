package main

import (
	"fmt"
	"net/http"
	"time"
)

func get_url(u string, outputChan chan string) {
	resp, err := http.Get("http://" + u + ".edu/")
	if err != nil {
		outputChan <- u + " " + err.Error()
	} else {
		outputChan <- u + " " + resp.Status
	}
}

func main() {
	urls := []string{"yale", "harvard", "stanford", "phoenix"}
	resultsChan := make(chan string)
	start := time.Now()
	for _, u := range urls {
		go get_url(u, resultsChan)
	}
	for _ = range urls {
		fmt.Println(<-resultsChan, time.Since(start))
	}
}
