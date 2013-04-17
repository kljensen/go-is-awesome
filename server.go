package main

import (
	// "errors"
	"code.google.com/p/go.talks/pkg/socket"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

// Parse the path to server from command line args
// and ensure that it exists.
//
func getPathToServe() (pathToServe string, err error) {
	if len(os.Args) != 2 {
		err = fmt.Errorf("You must provide a path to serve!")
		return
	}
	pathToServe, err = filepath.Abs(filepath.Clean(os.Args[1]))
	if err != nil {
		return
	}
	pathStat, err := os.Stat(pathToServe)
	if err != nil {
		return
	}

	if pathStat.IsDir() != true {
		err = fmt.Errorf("Path must be a directory: %s", os.Args[1])
	}
	return
}

func main() {
	pathToServe, err := getPathToServe()
	if err != nil {
		log.Fatalln(err)
	}
	port := ":8080"
	log.Printf("Serving at localhost%s\n", port)
	http.Handle("/socket", socket.Handler)
	http.Handle("/", http.FileServer(http.Dir(pathToServe)))
	log.Fatal(http.ListenAndServe(port, nil))
}
