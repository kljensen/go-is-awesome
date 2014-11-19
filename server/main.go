package main

import (
	// "errors"
	"golang.org/x/tools/playground/socket"
	"fmt"
	"log"
	"net/http"
	"os"
	"net/url"
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
	addr1 := "localhost:8080"
	log.Printf("Serving at %s\n", addr1)
	mux := http.NewServeMux()
	server := &http.Server{Addr: addr1, Handler: mux}
	origin := &url.URL{
		Scheme: "http",
		Host: addr1,
	}

	mux.Handle("/socket", socket.NewHandler(origin))
	mux.Handle("/", http.FileServer(http.Dir(pathToServe)))
	log.Fatal(server.ListenAndServe())
}
